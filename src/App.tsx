import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import navigation
import AnimatedAnimal from "./AnimatedAnimal";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const maxAttempts = 5;
  const navigate = useNavigate(); // Hook to navigate between pages

  const generateRandomPosition = () => {
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 200;
    return { x: newX, y: newY };
  };

  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    if (noAttempts < maxAttempts) {
      setNoPosition(generateRandomPosition());
      setNoAttempts(noAttempts + 1);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center font-custom relative">
      {/* Background Music - With You by Chris Brown */}
      <audio autoPlay loop>
        <source src="/with-you.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Snoopy Image */}
      <AnimatedAnimal />

      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
        {!accepted ? (
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h1 className="text-4xl font-bold text-pink-600 text-center font-custom">
              Will you be my Valentine? 💖
            </h1>
            <div className="mt-6 flex gap-6 justify-center relative w-full">
              {/* Yes Button */}
              <motion.button
                className="bg-red-500 text-white px-8 py-4 rounded-full text-2xl font-semibold shadow-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-400 transition-all duration-300"
                onClick={() => setAccepted(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Yes! 💘
              </motion.button>

              {/* No Button */}
              <motion.button
                className={`bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-2xl font-semibold shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ${
                  noAttempts < maxAttempts ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onMouseEnter={moveNoButton}
                onClick={() => {
                  if (noAttempts >= maxAttempts) {
                    navigate("/reasons"); // Redirect to Reasons Page
                  }
                }}
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 100 }}
                whileHover={{ rotate: [0, 5, -5, 0] }}
              >
                No 😢
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h1 className="text-4xl font-bold text-red-500 text-center font-custom">Yay! 🎉</h1>
            <p className="text-lg mt-4 text-center font-custom">Can't wait for our special day! 💑</p>
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ opacity: [0, 1, 1, 0], scale: [1, 1.5, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🎊🎉💖
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
