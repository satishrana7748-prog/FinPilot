from fastapi import APIRouter

router = APIRouter(
    prefix="/notification",
    tags=["Notification"]
)

@router.get("/")
def notifications():
    return {
        "message": "Notification API Ready"
    }