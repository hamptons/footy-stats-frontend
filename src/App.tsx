import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LeagueTable from './components/LeagueTable'
import Navbar from './components/Navbar'
import { LeagueTable as LeagueTableType } from './types/LeagueTable'
import './App.css'

function App() {
  const [leagueData, setLeagueData] = useState<LeagueTableType>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLeagueData = async () => {
      try {
        const response = await fetch('http://localhost:8080/standings?competitionId=39&season=2023')
        if (!response.ok) {
          throw new Error('Failed to fetch league data')
        }
        const data = await response.json()
        setLeagueData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchLeagueData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Premier League Table</h1>
          <LeagueTable data={leagueData} />
        </div>
      </div>
    </Router>
  )
}

export default App
