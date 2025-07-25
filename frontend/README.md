# bachue-ai-disease-detection

## Project Overview
This project is a web application designed for detecting diseases in crops using a machine learning model. The application consists of a FastAPI backend that handles image uploads and predictions, and a React frontend that provides a user interface for interaction.

## Project Structure
```
bachue-ai-disease-detection
├── backend
│   ├── main.py                # FastAPI application setup and prediction endpoint
│   ├── model
│   │   └── __init__.py        # Model package initialization
│   └── requirements.txt        # Python dependencies for the backend
├── frontend
│   ├── public
│   │   └── index.html          # Main HTML file for the React application
│   ├── src
│   │   ├── App.jsx             # Main component with routing setup
│   │   ├── index.js            # Entry point for the React application
│   │   ├── views
│   │   │   ├── HomeView.jsx    # Landing page component
│   │   │   └── CropRecommendationView.jsx # Component for displaying crop recommendations
│   │   ├── components
│   │   │   └── Navbar.jsx       # Navigation component
│   │   └── styles
│   │       └── tailwind.css     # Tailwind CSS styles
│   ├── package.json             # npm configuration file
│   └── tailwind.config.js       # Tailwind CSS configuration
└── README.md                    # Project documentation
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```
   uvicorn main:app --reload
   ```
   The API will be available at `http://127.0.0.1:8000`.

### Frontend
1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Usage
- Upload an image of a crop to receive disease detection and treatment recommendations.
- Navigate between the Home view and the Crop Recommendation view using the navigation bar.

## License
This project is licensed under the MIT License.