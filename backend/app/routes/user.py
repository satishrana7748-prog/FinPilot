from fastapi import APIRouter

router = APIRouter(
    prefix="/user",
    tags=["User"]
)

@router.get("/profile")
def get_profile():
    return {
        "message": "User Profile API Ready"
    }