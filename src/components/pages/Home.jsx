import { useEffect, useRef, useState } from 'react'
import TeamResults from "../teams/TeamResults"
import TeamSearch from "../teams/TeamSearch"
const FREE_NBA_API_URL = process.env.REACT_APP_FREE_NBA_API_URL
const FREE_NBA_API_KEY = process.env.REACT_APP_FREE_NBA_API_KEY

function capFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const [pagination, setPagination] = useState(1)
  const [allPlayers, setAllPlayers] = useState([])
  const [allTeamPlayers, setTeamPlayers] = useState([])
  const [loading, setLoading] = useState(false)

    const prevSearchIdRef = useRef()

    const clearPlayers = () => {
      setTeamPlayers([])
      setPagination(1)
      setSearchTerm('')
    }

    useEffect(() => {
        prevSearchIdRef.current = searchTerm  
    })

    const prevSearchTerm = prevSearchIdRef.current  

    useEffect(() => {
  
        if(searchTerm) {
          fetchAllPlayers(searchTerm)
        }        
  
    }, [searchTerm, pagination, loading])

    const fetchAllPlayers = async (searchTerm) => {
      var currentPagination = pagination      

        if(prevSearchTerm !== searchTerm) {
          currentPagination = 1
          setPagination(1)
        }
      const response = await fetch(`${FREE_NBA_API_URL}/players?page=${currentPagination + 1}&per_page=100`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "free-nba.p.rapidapi.com",
              "x-rapidapi-key": `${FREE_NBA_API_KEY}`
          }
      })
      const data = await response.json()
      const players = data.data

      if(players.length > 0) {
        setAllPlayers(players)
      }
      
      const teamPlayers = players.filter((player) =>
        (capFirstLetter(searchTerm) === player["team"]["name"]
            || capFirstLetter(searchTerm) === player["team"]["full_name"].split(' ')[0]
        )
      )

      setTeamPlayers(teamPlayers)
      
      setLoading(false)
    }

  return (
    <>
      <TeamSearch 
        setPagination={setPagination} 
        allTeamPlayers={allTeamPlayers} 
        clearPlayers={clearPlayers} 
        pagination={pagination} 
        fetchAllPlayers={fetchAllPlayers} 
        setSearchTerm={setSearchTerm}
        setLoading={setLoading}
      />
      <TeamResults 
        setPagination={setPagination}
        setLoading={setLoading}
        allTeamPlayers={allTeamPlayers}
        searchTerm={searchTerm}
        pagination={pagination}
        loading={loading} 
      />
    </>
  )
}

export default Home