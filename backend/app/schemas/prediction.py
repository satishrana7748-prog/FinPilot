from pydantic import BaseModel

class PredictionRequest(BaseModel):
    goal: str
    amount: float
    duration: float