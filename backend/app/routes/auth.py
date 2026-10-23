from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.user import User
from app.models.user import User as UserModel
from app.database.database import get_db
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)

router = APIRouter()


@router.post("/register")
def register(user: User, db: Session = Depends(get_db)):

    existing_user = (
        db.query(UserModel)
        .filter(UserModel.email == user.email)
        .first()
    )

    if existing_user:
        return {"message": "User already exists"}

    new_user = UserModel(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}


@router.post("/login")
def login(user: User, db: Session = Depends(get_db)):

    db_user = (
        db.query(UserModel)
        .filter(UserModel.email == user.email)
        .first()
    )

    if not db_user:
        return {"message": "User not found"}

    if not verify_password(user.password, db_user.password):
        return {"message": "Invalid credentials"}

    token = create_access_token(
        {"sub": db_user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }