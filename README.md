# 🗂️ Smart Garbage Classifier

A beautiful React frontend for AI-powered waste classification using MobileNetV2.

## ✨ Features

- **Drag & Drop Upload**: Intuitive image upload with drag-and-drop support
- **Real-time Classification**: AI-powered classification into 6 categories
- **Beautiful UI**: Modern design with Tailwind CSS and smooth animations
- **Disposal Tips**: Helpful recycling and disposal information
- **Confidence Scoring**: Visual confidence indicators with progress bars
- **Mobile Responsive**: Works on all device sizes

## 🏗️ Project Structure

```
apt3025-garbage-collection/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUpload.jsx
│   │   │   └── ResultCard.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
├── app.py                   # Flask API server
├── garbage2_best.h5         # Trained model
└── README.md
```

## 🚀 Quick Start

### 1. Start the Flask Backend

```bash
# In the root directory
python app.py
```

The Flask server will start on `http://127.0.0.1:5000`

### 2. Start the React Frontend

```bash
# In a new terminal
cd frontend
npm install  # (if not already installed)
npm run dev
```

The React app will be available at `http://localhost:5173`

## 🎯 Usage

1. **Upload Image**: Drag and drop or click to select an image of waste material
2. **Classify**: Click the "Classify Image" button
3. **View Results**: See the classification result with confidence score
4. **Disposal Tips**: Read helpful disposal and recycling information
5. **Try Again**: Use "Classify Another" to test with different images

## 🗂️ Supported Categories

| Category | Icon | Examples |
|----------|------|----------|
| Cardboard | 📦 | Boxes, packaging |
| Glass | 🍾 | Bottles, jars |
| Metal | 🥫 | Cans, containers |
| Paper | 📄 | Documents, newspapers |
| Plastic | 🥤 | Bottles, containers |
| Trash | 🗑️ | General waste |

## 🧠 Model Information

- **Architecture**: MobileNetV2
- **Dataset**: Garbage classification with 6 classes
- **Accuracy**: ~80% validation accuracy
- **Features**: Class-balanced training, stratified splitting

## 🛠️ Technology Stack

- **Frontend**: React + Vite, Tailwind CSS, Axios
- **Backend**: Flask (Python)
- **Model**: TensorFlow/Keras MobileNetV2
- **Styling**: Modern gradient backgrounds, glassmorphism effects

## 📱 Screenshots
<img width="701" height="434" alt="image" src="https://github.com/user-attachments/assets/d15e584b-20f2-4e5c-9604-82b34f59f09c" />
<img width="707" height="351" alt="image (1)" src="https://github.com/user-attachments/assets/d6c9819c-103e-4581-9eb5-4035f5279f75" />


The app features:
- Clean, modern interface with gradient backgrounds
- Drag-and-drop upload area with visual feedback
- Animated result cards with category-specific colors
- Confidence score visualization with progress bars
- Helpful disposal tips for each category
- Responsive design for all screen sizes

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### API Endpoints
- `POST /predict` - Upload image for classification
  - **Input**: `multipart/form-data` with `image` field
  - **Output**: `{"prediction": "category", "confidence": 0.85}`

## 🤝 Contributing

1. Upload test images from different categories
2. Report any classification errors
3. Suggest UI/UX improvements
4. Help improve disposal tips and recycling information

## 📄 License

This project is for educational purposes as part of the APT3025 course.

---

**🌱 Help protect our environment through proper waste classification!** 
