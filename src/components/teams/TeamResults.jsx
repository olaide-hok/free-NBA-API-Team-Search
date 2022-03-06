import Pagination from '../layouts/Pagination'
import Spinner from '../layouts/Spinner'
import TeamList from './TeamList'

function TeamResults(
    {   allPlayers,
        allTeamPlayers,
        setPagination,
        searchTerm,
        setLoading,
        pagination,
        loading
    }) {

    if (!loading) { return (
        <div>
        {
            (allTeamPlayers.length === 0 && allPlayers.length > 0) 
            ? <p>There is no player name on this page, click next page.</p> 
            : (allTeamPlayers.length === 0 && allPlayers.length === 0) ? ''
            : (allTeamPlayers.length > 0 && allPlayers.length > 0) ? 
                <p>Click next page to see more players</p>
            : (allTeamPlayers.length === allPlayers.length ) ? 
                <p>Last Player, click previous page to see previous players</p>
            : ''
        }
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {(allTeamPlayers.map((player, index) => {
                    return (                    
                        <TeamList player={player} key={index}/>
                    )
                  }))
                }           
            </div>
            {(allPlayers.length > 0) && <Pagination 
                setPagination={setPagination} 
                searchTerm={searchTerm}
                setLoading={setLoading}
                pagination={pagination} />}
        </div>        
    ) } else {
        return <Spinner />
    }    
}

export default TeamResults