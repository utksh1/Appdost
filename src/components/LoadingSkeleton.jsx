const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count })

  if (type === 'card') {
    return (
      <>
        {skeletons.map((_, idx) => (
        <div key={idx} className="glass-effect p-8 rounded-3xl animate-pulse">
            <div className="w-16 h-16 bg-gray-200 dark:bg-white/10 rounded-2xl mb-6"></div>
            <div className="h-6 bg-gray-200 dark:bg-white/10 rounded-lg mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-4/6"></div>
          </div>
        ))}
      </>
    )
  }

  if (type === 'project') {
    return (
      <>
        {skeletons.map((_, idx) => (
        <div key={idx} className="glass-effect rounded-3xl overflow-hidden animate-pulse">
            <div className="w-full h-64 bg-gray-200 dark:bg-white/10"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 dark:bg-white/10 rounded-lg mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-5/6"></div>
            </div>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="glass-effect p-8 rounded-3xl animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-white/10 rounded-lg mb-6 w-1/3"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg"></div>
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-4/6"></div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
