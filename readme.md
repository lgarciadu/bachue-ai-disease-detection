# 🌿 Bachue: Sistema Inteligente para la Detección de Enfermedades en Cultivos 🌾

## 📄 Descripción General del Proyecto

Bienvenido al repositorio de Bachue, un sistema basado en inteligencia artificial que permite la detección temprana y precisa de enfermedades en cultivos agrícolas a partir de imágenes. Bachue está diseñado para brindar una herramienta accesible y sencilla tanto a agricultores como a investigadores, facilitando el monitoreo del estado de salud de las plantas utilizando simplemente fotos tomadas desde dispositivos móviles.

El sistema está construido sobre un modelo YOLOv5 entrenado con imágenes reales de cultivos, logrando una precisión de predicción cercana al 92%. Aprovecha técnicas avanzadas de visión por computadora y un pipeline robusto de preprocesamiento y extracción de características, asegurando resultados confiables incluso en condiciones reales de campo.

Actualmente, la API funciona en local a través de FastAPI, permitiendo cargar imágenes y obtener predicciones rápidas sobre el tipo de enfermedad detectada.


## ✨ Características Principales

* **Detección automatizada de enfermedades:**
  Utiliza modelos avanzados de visión por computadora (YOLOv5) para identificar enfermedades y determinar el estado de las plantas a partir de imágenes de hojas capturadas con dispositivos móviles.

* **Preprocesamiento inteligente de imágenes:**
  Emplea técnicas de mejora y limpieza de imágenes para maximizar la precisión en las predicciones del modelo.

* **Análisis visual y monitoreo:**
  Ofrece un resumen visual del estado de salud del cultivo, con almacenamiento temporal de datos para facilitar el seguimiento semanal de las plantas.

* **Recomendaciones personalizadas:**
  Integra sugerencias prácticas para el manejo y cuidado de los cultivos, generadas automáticamente según el diagnóstico detectado.

* **Arquitectura modular y escalable:**
  Basado en microservicios, el sistema es flexible, fácil de mantener y puede escalarse para incorporar nuevos servicios como autenticación, gestión de usuarios, análisis avanzado y más.

* **Acceso desde la nube:**
  Permite a los usuarios aprovechar el potencial del modelo sin depender de la capacidad de sus propios dispositivos, garantizando rapidez y disponibilidad.

## 🚀 Arquitectura del Sistema

Bachue está desarrollado bajo una arquitectura modular y escalable, pensada para facilitar el despliegue, la mantenibilidad y la evolución futura del sistema. La solución actual se basa en la integración de servicios desacoplados que comunican eficientemente la inferencia de modelos de IA con la experiencia de usuario final.

### **Componentes Principales**

* **API de Inferencia (FastAPI):**
  Servicio backend principal encargado de recibir imágenes, gestionar el preprocesamiento y ejecutar la inferencia utilizando el modelo YOLOv5 entrenado. Devuelve la clase detectada y la confianza asociada, así como descripciones o recomendaciones asociadas a cada resultado.

* **Modelo YOLOv5 personalizado:**
  El modelo de visión por computadora está entrenado para identificar enfermedades en hojas de cultivos y se integra de forma eficiente en el backend para predicciones en tiempo real.

* **Documentación y testing automáticos:**
  La API expone documentación Swagger UI (`/docs`), permitiendo la validación rápida de los endpoints y facilitando las pruebas desde el frontend o herramientas externas.

* **Frontend interactivo:**
  Preparado para integrarse con una interfaz web o móvil (por ejemplo, en React), desde donde los usuarios podrán cargar imágenes y visualizar resultados en tiempo real.

* **Despliegue flexible:**
  La arquitectura soporta tanto entornos locales como despliegue en la nube, permitiendo escalar la capacidad de cómputo y habilitar accesibilidad global.

* **Mantenibilidad y extensibilidad:**
  El diseño modular permite la incorporación sencilla de nuevos servicios, como autenticación, gestión de usuarios, dashboards de análisis o integración con modelos de lenguaje para recomendaciones avanzadas.


## 🗂️ Diagrama de Arquitectura de Bachue


┌────────────────────────────┐
│        Usuario final       │
│ (web/mobile: futuro React) │
└─────────────┬──────────────┘
│ (1. Sube imagen vía HTTP POST)
▼
┌────────────────────────────────────────┐
│      API de Inferencia (FastAPI)       │
│ - Endpoint `/predict/`                 │
│ - Documentación Swagger (`/docs`)      │
└─────────────┬──────────────┬───────────┘
│              │
│              │
▼              ▼
Preprocesamiento   Diccionario de clases,
de imagen       descripciones y tratamientos
│              │
└─────┬────────┘
│
▼
┌────────────────────────────────────┐
│    Modelo YOLOv5 entrenado (.pt)   │
└────────────────────────────────────┘
│
▼
┌────────────────────────────────────┐
│     Respuesta: Clase, confianza,   │
│     descripción y recomendación    │
└────────────────────────────────────┘
│
▼
Usuario recibe la respuesta

---

**Descripción breve:**
- El usuario final (desde web, móvil o Swagger UI) sube una imagen a la API.
- La API de FastAPI preprocesa la imagen y consulta el modelo YOLOv5 entrenado.
- El sistema busca la descripción y el tratamiento recomendado para la clase detectada.
- Devuelve la clase predicha, la confianza, una descripción y una sugerencia al usuario.

## Estructura del proyecto

```
├── yolov5/                           # Carpeta del repositorio de YOLOv5
├── runs/train/bachue_yolov5/weights/ # Pesos entrenados (`last.pt`)
├── main.py                           # Código principal de la API FastAPI
├── requirements.txt                  # Dependencias del proyecto
├── README.md                         # Este archivo
└── ...                               # Otros archivos relevantes (notebooks, data.yaml, etc.)
```

## Cómo correr el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Ejecutar la API:**
   ```bash
   uvicorn main:app --reload
   ```

4. **Probar la API:**
   - Abre tu navegador en: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
   - Usa la interfaz para subir una imagen y obtener la predicción.

## Entrenamiento del modelo

El modelo YOLOv5 se entrenó con una métrica de validación de mAP ≈ 92%.  
Puedes encontrar los pesos entrenados en `runs/train/bachue_yolov5/weights/last.pt`.

## ¿Cómo funciona la API?

- Recibe una imagen vía POST en `/predict/`
- Devuelve un JSON con la clase detectada y su probabilidad.

## Requisitos

- Python 3.8+
- PyTorch
- FastAPI
- Uvicorn
- Pillow
- torch.hub (para cargar el modelo YOLOv5)
- (Otros, ver requirements.txt)

## Créditos

- YOLOv5 - [Ultralytics](https://github.com/ultralytics/yolov5)
- FastAPI - [tiangolo](https://fastapi.tiangolo.com/)

---

¡Para cualquier duda, contáctanos!