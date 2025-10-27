import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPenTool, FiCode, FiSmartphone, FiServer } from 'react-icons/fi'
import LoadingSkeleton from './LoadingSkeleton'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: FiPenTool,
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.',
      color: 'from-pink-500 to-rose-500',
      delay: 0.1,
    },
    {
      icon: FiCode,
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.2,
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love. iOS, Android, or both—we have got you covered with cutting-edge solutions.',
      color: 'from-purple-500 to-violet-500',
      delay: 0.3,
    },
    {
      icon: FiServer,
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence.',
      color: 'from-orange-500 to-amber-500',
      delay: 0.4,
    },
  ]

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-5xl md:text-6xl font-black font-display mt-4 mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and deliver exceptional results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {loading ? (
            <LoadingSkeleton type="card" count={4} />
          ) : (
            services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: service.delay, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass-effect p-8 rounded-3xl card-hover group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
