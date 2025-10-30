from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# Load model and scaler
model = joblib.load(r"D:\Machine Learning\Artificial Neural Network\model\ann_model.pkl")
scaler = joblib.load(r"D:\Machine Learning\Artificial Neural Network\model\scaler.pkl")

# Define input schema
class Features(BaseModel):
    age_group: float
    legal_status: float
    num_dependents: float
    active_dependents: float

# Create FastAPI app
app = FastAPI()

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to ["http://localhost:3000"] if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(features: Features):
    try:
        input_array = np.array([
            [
                features.age_group,
                features.legal_status,
                features.num_dependents,
                features.active_dependents
            ]
        ])
        input_scaled = scaler.transform(input_array)
        prediction = model.predict(input_scaled)
        return {"prediction": int(prediction[0])}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Prediction failed due to internal error.")