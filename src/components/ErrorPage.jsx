import { motion } from 'framer-motion'
import { BiError, BiHome, BiRefresh } from 'react-icons/bi'

const ErrorPage = ({ onRetry, onGoHome }) => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-effect p-12 rounded-3xl max-w-2xl text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full">
            <BiError className="text-6xl text-white" />
          </div>
        </motion.div>

        {/* Error Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-black font-display mb-4 text-gray-900 dark:text-white"
        >
          Oops! Something Went <span className="text-gradient">Wrong</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 dark:text-gray-400 text-lg mb-8"
        >
          We&apos;re sorry, but something unexpected happened. Don&apos;t worry, it&apos;s not your fault. 
          Please try refreshing the page or return to the homepage.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onRetry || (() => window.location.reload())}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <BiRefresh className="text-xl" />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={onGoHome || (() => window.location.href = '/')}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <BiHome className="text-xl" />
            <span>Go Home</span>
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 dark:border-white/10 border-slate-900/10"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 text-gray-400">
            If the problem persists, please contact our support team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ErrorPage
