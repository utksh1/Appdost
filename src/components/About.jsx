import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheck } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    'Innovation-driven IT solutions',
    'Expert team of developers',
    'Cutting-edge technology',
    'User-centric approach',
    'Market-ready products',
    'Lasting digital impact',
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">About AppDost</span>
              <h2 className="text-5xl md:text-6xl font-black font-display mt-4 mb-6">
                Your Trusted Partner for{' '}
                <span className="text-gradient">Digital Transformation</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                AppDost is a dynamic, innovation-driven IT solutions provider specializing in turning visionary 
                ideas into powerful, market-ready products. Our mission is to empower businesses with cutting-edge 
                technology solutions that drive growth, enhance user experiences, and create lasting digital impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl font-black">
                    💼
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">What We Do</h3>
                    <p className="text-gray-400">Core Expertise</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {['UI/UX Design', 'Web Development', 'Mobile Apps', 'Custom Software'].map((service) => (
                    <div key={service} className="glass-effect p-4 rounded-2xl text-center hover:bg-white/10 transition-all">
                      <p className="font-semibold text-sm">{service}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From concept to deployment, we deliver excellence at every stage, creating solutions 
                    that users love and businesses rely on.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
