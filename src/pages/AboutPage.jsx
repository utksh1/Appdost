import { useEffect } from 'react'
import { motion } from 'framer-motion'
import About from '../components/About'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <About />
    </motion.div>
  )
}

export default AboutPage
