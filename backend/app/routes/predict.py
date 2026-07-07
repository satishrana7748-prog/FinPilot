from fastapi import APIRouter
from app.schemas.prediction import PredictionRequest

router = APIRouter()

@router.post("/predict")
def predict(data: PredictionRequest):

    amount = data.amount
    duration = data.duration

    if amount < 50000:

        asset = "Gold"
        allocation = "80%"
        expected = "12%"
        risk = "Low"
        confidence = "94%"
        probability = "90%"
        reason = "Low investment amount is best suited for stable assets."

    elif amount < 200000:

        asset = "Stocks"
        allocation = "70%"
        expected = "18%"
        risk = "Medium"
        confidence = "91%"
        probability = "86%"
        reason = "Balanced portfolio recommended based on investment amount."
        
    elif amount < 500000:

        asset = "Silver"
        allocation = "80%"
        expected = "38%"
        risk = "Medium"
        confidence = "93%"
        probability = "89%"
        reason = "Balanced portfolio recommended based on investment amount."

    else:

        asset = "Bitcoin"
        allocation = "60%"
        expected = "28%"
        risk = "High"
        confidence = "84%"
        probability = "78%"
        reason = "Higher investment amount allows higher growth potential."

    return {

        "asset": asset,

        "allocation": allocation,

        "expectedReturn": expected,

        "confidence": confidence,

        "risk": risk,

        "probability": probability,

        "reason": reason,

    }