from fastapi import APIRouter

from app.schemas.user import UserRegister, UserLogin
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)
from app.database.fake_db import fake_db

router = APIRouter()


# ==========================
# Register
# ==========================

@router.post("/register")
def register(user: UserRegister):

    if user.email in fake_db:
        return {"message": "User already exists"}

    fake_db[user.email] = hash_password(user.password)

    return {
        "message": "User registered successfully"
    }


# ==========================
# Login
# ==========================

@router.post("/login")
def login(user: UserLogin):

    if user.email not in fake_db:
        return {
            "message": "User not found"
        }

    hashed_pwd = fake_db[user.email]

    if not verify_password(user.password, hashed_pwd):
        return {
            "message": "Invalid credentials"
        }

    token = create_access_token(
        {"sub": user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }