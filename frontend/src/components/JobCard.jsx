const JobCard = ({ job }) => {
  const typeColors = {
    Remote: 'bg-green-100 text-green-800',
    Onsite: 'bg-blue-100 text-blue-800',
    Hybrid: 'bg-purple-100 text-purple-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{job.title}</h3>
            <p className="text-gray-600 mt-1 text-sm">{job.company}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[job.type]} whitespace-nowrap`}>
            {job.type}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="mr-1.5 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{job.location}</span>
        </div>

        <p className="text-gray-700 text-sm line-clamp-3 flex-1">{job.description}</p>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {new Date(job.postedDate).toLocaleDateString()}
          </span>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard