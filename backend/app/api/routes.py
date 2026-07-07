from fastapi import APIRouter
from app.services.recommendation import get_recommendations

router = APIRouter()

@router.get("/")
def home():
    return {"message": "FinPilot API Running 🚀"}

@router.get("/health")
def health():
    return {"status": "OK"}

@router.get("/recommend/{asset}")
def recommend(asset: str):
    return get_recommendations(asset)