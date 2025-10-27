import { motion } from 'framer-motion'
import { BiCodeAlt } from 'react-icons/bi'

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="p-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl shadow-2xl shadow-primary-500/50"
          >
              <BiCodeAlt className="text-6xl text-white" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold font-display mb-4 text-gray-900 dark:text-white"
        >
          <span className="text-gradient">AppDost</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 dark:text-gray-400"
        >
          Loading...
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
