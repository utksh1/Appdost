import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiSmartphone, FiTarget, FiCalendar } from 'react-icons/fi'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { icon: FiCode, value: '10+', label: 'Web Projects', color: 'from-blue-500 to-cyan-500' },
    { icon: FiSmartphone, value: '4+', label: 'Mobile Apps', color: 'from-purple-500 to-pink-500' },
    { icon: FiTarget, value: '1', label: 'CRM Project', color: 'from-orange-500 to-red-500' },
    { icon: FiCalendar, value: '2025', label: 'Founded Year', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-8 rounded-3xl text-center card-hover"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-2xl mb-4`}>
                <stat.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-black font-display mb-2 text-gradient">{stat.value}</h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
