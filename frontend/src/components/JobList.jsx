import { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from './JobCard'
import LoadingSpinner from './LoadingSpinner'

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        setError(null)
        const params = {}
        if (filters.location) params.location = filters.location
        if (filters.type && filters.type !== 'All') params.type = filters.type
        
        // Update API endpoint to match your backend
        const { data } = await axios.get('http://localhost:5000/api/jobs', { params })
        setJobs(data)
      } catch (err) {
        console.error('Error fetching jobs:', err)
        setError('Failed to load jobs. Please check if the server is running.')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filters])

  if (loading) return <LoadingSpinner />
  if (error) return (
    <div className="text-center py-10">
      <div className="text-red-500 mb-2">{error}</div>
      <button 
        onClick={() => window.location.reload()}
        className="text-blue-600 hover:text-blue-800 text-sm"
      >
        Try Again
      </button>
    </div>
  )
  if (!jobs.length) return (
    <div className="text-center py-10">
      <h3 className="text-lg font-medium text-gray-700">No jobs found</h3>
      <p className="mt-2 text-gray-500">Try adjusting your search filters</p>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">
        Found {jobs.length} job{jobs.length !== 1 ? 's' : ''}
      </div>
      
      {/* Grid Layout for Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default JobList