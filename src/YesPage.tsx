import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function YesPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-100 text-center p-10 font-custom">
      {/* Happy Snoopy Image */}
      <motion.img
        src="/happy-snoop.png"
        alt="Happy Snoopy"
        className="w-80 h-auto mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.h1
        className="text-5xl font-bold text-red-600 mb-6 font-custom"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Yay! You Said Yes! 🎉
      </motion.h1>

      <p className="text-3xl text-gray-700 max-w-lg font-custom">
        OH HELLS YEAHHH!!   
      </p>

      {/* Return Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-red-700 transition font-custom">
          Back to Home 💕
        </Link>
      </motion.div>
    </div>
  );
}

