const Filters = ({ filters, setFilters }) => {
  const handleLocationChange = (e) => {
    setFilters({...filters, location: e.target.value})
  }

  const handleTypeChange = (e) => {
    setFilters({...filters, type: e.target.value})
  }

  const clearFilters = () => {
    setFilters({ location: '', type: 'All' })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Filter Jobs</h3>
        <button 
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g. Remote, New York"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={filters.location}
            onChange={handleLocationChange}
          />
        </div>
        
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Job Type
          </label>
          <select
            id="type"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={filters.type}
            onChange={handleTypeChange}
          >
            <option value="All">All Types</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters