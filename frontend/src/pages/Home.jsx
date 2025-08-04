import { useState } from 'react'
import JobList from '../components/JobList'
import Filters from '../components/Filters'

const Home = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: 'All'
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Browse through our latest job openings</p>
        </div>
        
        <Filters filters={filters} setFilters={setFilters} />
        <JobList filters={filters} />
      </div>
    </div>
  )
}

export default Home