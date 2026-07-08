from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.routes.data import router as data_router
from app.routes.predict import router as predict_router
from app.routes.chat import router as chat_router

# Create FastAPI app
app = FastAPI(title="FinPilot API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://finpilot-frontend-uwic.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(auth_router)
app.include_router(data_router)
app.include_router(predict_router)
app.include_router(chat_router)

@app.get("/")
def home():
    return {
        "message": "FinPilot API Running"
    }