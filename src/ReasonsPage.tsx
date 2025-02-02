import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ReasonsPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-center p-10 relative font-custom">
      {/* Sad Snoopy Image */}
      <motion.img
        src="/snoopy-crying.png"
        alt="Sad Snoopy"
        className="w-64 h-auto mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.h1
        className="text-5xl font-bold text-red-600 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Wait! Think Again! 💔
      </motion.h1>

      <p className="text-3xl text-gray-700 max-w-lg font-custom">
        Here are all the reasons why you shouldn't say no...
      </p>

      <ul className="mt-6 text-2xl text-gray-600 font-custom">
        <li>💕 I make you laugh all the time.</li>
        <li>🎁 There might be surprises waiting for you!</li>
        <li>🍩 I give you sweet treats.</li>
        <li>💌 Cinnamaroll is going to be mad if you say no.</li>
      </ul>

      {/* Go Back Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-red-700 transition">
          Okay, Maybe I Should Say Yes! 😍
        </Link>
      </motion.div>
    </div>
  );
}
