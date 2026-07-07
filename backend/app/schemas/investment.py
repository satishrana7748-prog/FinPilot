from pydantic import BaseModel

class InvestmentResponse(BaseModel):
    asset: str
    allocation: float
    expected_return: float
    risk: str