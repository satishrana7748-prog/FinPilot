from fastapi import APIRouter

router = APIRouter(
    prefix="/investment",
    tags=["Investment"]
)

@router.get("/")
def investments():
    return {
        "message": "Investment API Ready"
    }