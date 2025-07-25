from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from PIL import Image
import torch
import io
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O especifica ["http://localhost:3000"] (en este momento permite todas las solicitudes CORS)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = "C:/Users/maria/Downloads/Bachue_project/yolov5/runs/train/bachue_yolov5/weights/last.pt"
model = torch.hub.load("ultralytics/yolov5", "custom", path=MODEL_PATH, force_reload=True)

CLASS_INFO = {
    "late_blight": {
        "description": "Tizón tardío: enfermedad fúngica común en papas y tomates.",
        "treatment": "Aplicar fungicidas recomendados y retirar plantas afectadas."
    },
    "early_blight": {
        "description": "Tizón temprano: afecta hojas, tallos y frutos.",
        "treatment": "Mejorar ventilación y usar productos a base de cobre."
    },
    "healthy": {
        "description": "Planta sana, sin síntomas visibles.",
        "treatment": "Mantener monitoreo regular."
    }
}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    results = model(image)
    names = results.names
    detections = results.pred[0]
    pred_classes = []
    pred_conf = []
    pred_info = []

    if detections.shape[0] > 0:
        for det in detections:
            class_idx = int(det[-1])
            class_name = names[class_idx]
            pred_classes.append(class_name)
            pred_conf.append(float(det[4]))
            pred_info.append(CLASS_INFO.get(class_name, {"description": "", "treatment": ""}))
    else:
        pred_classes = []
        pred_conf = []
        pred_info = []

    return JSONResponse(content={
        "predicted_classes": pred_classes,
        "confidences": pred_conf,
        "info": pred_info
    })
