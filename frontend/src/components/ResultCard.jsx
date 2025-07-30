import { useState, useEffect } from 'react';

const ResultCard = ({ result, onClear }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (result) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [result]);

  if (!result) return null;

  const getClassIcon = (className) => {
    const icons = {
      cardboard: '📦',
      glass: '🍾',
      metal: '🥫',
      paper: '📄',
      plastic: '🥤',
      trash: '🗑️'
    };
    return icons[className.toLowerCase()] || '♻️';
  };

  const getClassColor = (className) => {
    const colors = {
      cardboard: 'from-amber-500 to-orange-500',
      glass: 'from-cyan-500 to-blue-500',
      metal: 'from-gray-500 to-slate-600',
      paper: 'from-blue-400 to-blue-600',
      plastic: 'from-purple-500 to-pink-500',
      trash: 'from-red-500 to-red-600'
    };
    return colors[className.toLowerCase()] || 'from-green-500 to-green-600';
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const confidencePercentage = Math.round(result.confidence * 100);

  return (
    <div className={`transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getClassColor(result.prediction)} p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{getClassIcon(result.prediction)}</span>
              <div>
                <h3 className="text-white font-bold text-lg capitalize">
                  {result.prediction}
                </h3>
                <p className="text-white/90 text-sm">Classification Result</p>
              </div>
            </div>
            <button
              onClick={onClear}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Image Preview */}
          {result.image && (
            <div className="text-center">
              <img
                src={result.image}
                alt="Classified"
                className="max-w-full max-h-32 mx-auto rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Confidence Score */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Confidence Score</span>
              <span className={`font-bold ${getConfidenceColor(confidencePercentage)}`}>
                {confidencePercentage}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  confidencePercentage >= 80
                    ? 'bg-gradient-to-r from-green-400 to-green-600'
                    : confidencePercentage >= 60
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : 'bg-gradient-to-r from-red-400 to-red-600'
                }`}
                style={{ width: `${confidencePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Disposal Tips */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Disposal Tip
            </h4>
            <p className="text-sm text-gray-600">
              {getDisposalTip(result.prediction)}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClear}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Classify Another
            </button>
            <button
              onClick={() => {
                const data = {
                  prediction: result.prediction,
                  confidence: confidencePercentage,
                  timestamp: new Date().toISOString()
                };
                navigator.clipboard.writeText(JSON.stringify(data, null, 2));
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Copy Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const getDisposalTip = (className) => {
  const tips = {
    cardboard: "Clean and flatten cardboard boxes before recycling. Remove tape, staples, and labels.",
    glass: "Rinse glass containers and remove lids before recycling. Check local guidelines for colored glass.",
    metal: "Clean metal cans and containers. Aluminum cans are highly recyclable and valuable.",
    paper: "Keep paper dry and clean. Remove plastic windows from envelopes and separate different paper types.",
    plastic: "Check the recycling number (1-7) and clean containers. Remove caps and labels when possible.",
    trash: "General waste that cannot be recycled. Consider if any parts can be separated for recycling."
  };
  return tips[className.toLowerCase()] || "Please dispose of this item according to local waste management guidelines.";
};

export default ResultCard; 