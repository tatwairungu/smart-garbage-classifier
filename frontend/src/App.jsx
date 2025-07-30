import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ResultCard from './components/ResultCard';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePrediction = (result) => {
    setPrediction(result);
    setError('');
  };

  const handleLoading = (loading) => {
    setIsLoading(loading);
    if (loading) {
      setError('');
    }
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setIsLoading(false);
  };

  const clearResults = () => {
    setPrediction(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🗂️ Smart Garbage Classifier
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload an image and let our AI model classify it into the correct waste category: 
              <span className="font-medium"> cardboard, glass, metal, paper, plastic, or trash</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Upload Image
              </h2>
              
              <ImageUpload
                onPrediction={handlePrediction}
                onLoading={handleLoading}
                onError={handleError}
              />

              {/* Loading State */}
              {isLoading && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-blue-600">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        className="opacity-75"
                      ></path>
                    </svg>
                    <span className="font-medium">Classifying image...</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This may take a few seconds
                  </p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Error</span>
                  </div>
                  <p className="text-sm text-red-600 mt-1">{error}</p>
                </div>
              )}
            </div>

            {/* Info Card */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                📋 How it works
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Upload or drag & drop an image of waste material</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Our MobileNetV2 AI model analyzes the image</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Get classification result with confidence score</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Receive disposal tips for proper waste management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {prediction ? (
              <ResultCard result={prediction} onClear={clearResults} />
            ) : (
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ready to classify!
                </h3>
                <p className="text-gray-600">
                  Upload an image to see the AI classification results here.
                </p>
              </div>
            )}

            {/* Categories Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                🗂️ Supported Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm">
                  <span>📦</span>
                  <span className="text-gray-700">Cardboard</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>🍾</span>
                  <span className="text-gray-700">Glass</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>🥫</span>
                  <span className="text-gray-700">Metal</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>📄</span>
                  <span className="text-gray-700">Paper</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>🥤</span>
                  <span className="text-gray-700">Plastic</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>🗑️</span>
                  <span className="text-gray-700">Trash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>
              Powered by <span className="font-medium">MobileNetV2</span> • 
              Trained on garbage classification dataset • 
              <span className="text-green-600 font-medium">~80% accuracy</span>
            </p>
            <p className="mt-1">
              Help protect our environment through proper waste classification! 🌱
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
