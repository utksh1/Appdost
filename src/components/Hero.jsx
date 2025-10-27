import { motion } from 'framer-motion'
import { FiArrowRight, FiZap } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8">
            <FiZap className="text-accent-400" />
            <span className="text-sm font-medium">Complete IT Solution Provider Since 2025</span>
            <HiSparkles className="text-primary-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black font-display mb-6 leading-tight">
            Transform Your
            <br />
            <span className="text-gradient animate-gradient">Ideas Into Reality</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
            we bring <span className="text-gray-900 dark:text-white font-semibold">innovation and excellence</span> to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#services" className="btn-primary group">
              Explore Our Services
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Portfolio
            </a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-16"
          >
            {['100% Client Satisfaction', 'Secure & Scalable', '24/7 Support', 'Fast Delivery'].map((feature, idx) => (
              <motion.div
                key={feature}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect px-6 py-3 rounded-full text-sm font-medium"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                ✨ {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
