import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import LoadingSkeleton from './LoadingSkeleton'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call with potential error
    const timer = setTimeout(() => {
      try {
        // Simulate successful data load
        setLoading(false)
      } catch (err) {
        setError('Failed to load projects')
        setLoading(false)
      }
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce solution with real-time inventory management and payment integration.',
      image: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?t=st=1761536668~exp=1761540268~hmac=8dd8b14d813b94e9174afd275d895d8d3aa97f85be2e5e8bba5f3a794fa738e0&w=2000',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and telemedicine capabilities.',
      image: 'https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148572863.jpg?ga=GA1.1.1291346437.1761063749&semt=ais_hybrid&w=740&q=80',
      tags: ['React Native', 'Firebase', 'Redux'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'CRM Dashboard',
      category: 'Enterprise Solution',
      description: 'Comprehensive customer relationship management system with analytics and reporting.',
      image: 'https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?t=st=1761536336~exp=1761539936~hmac=b3dce6723d84ca9879c58c6e2536a9dde9365330f1c03d7462866337ee4c3401&w=2000',
      tags: ['Vue.js', 'PHP', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Social Media Platform',
      category: 'Web Application',
      description: 'Feature-rich social networking platform with real-time messaging and content sharing.',
      image: 'https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208259.jpg?ga=GA1.1.1291346437.1761063749&semt=ais_hybrid&w=740&q=80',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  if (error) {
    return (
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-effect p-12 rounded-3xl text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h3 className="text-2xl font-bold mb-4">Something went wrong</h3>
            <p className="text-gray-400 mb-8">{error}. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-5xl md:text-6xl font-black font-display mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover some of our recent projects that showcase our expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {loading ? (
            <LoadingSkeleton type="project" count={4} />
          ) : (
            projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-3xl overflow-hidden card-hover group"
              >
                {/* Project Image/Icon */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {(project.image.startsWith('http') || project.image.startsWith('/')) ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  )}
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white/90 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/80 dark:hover:bg-white/30 transition-all">
                      <FiExternalLink className="text-2xl" />
                    </button>
                    <button className="p-4 bg-white/90 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/80 dark:hover:bg-white/30 transition-all">
                      <FiGithub className="text-2xl" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <span className="text-primary-400 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100/60 dark:bg-white/5 rounded-full text-sm font-medium border border-gray-200/20 dark:border-white/10 text-gray-900 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Portfolio
