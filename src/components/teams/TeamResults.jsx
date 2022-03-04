import Spinner from '../layouts/Spinner'
import TeamList from './TeamList'

function TeamResults(
    {   allTeamPlayers,
        setPagination,
        searchTerm,
        setLoading,
        pagination,
        loading
    }) {

    const prevClick = () => {
        setLoading(true)        
        if (searchTerm) {
            setPagination(pagination - 1)
        } else {
            alert("Please enter team's name")
        }
        if(pagination === 0) {
        
            return
        }
    }

    const nextClick = () => {
        setLoading(true)
        if(searchTerm){
            setPagination(pagination + 1)
            
        } else {
            alert("Please enter team's name")
        }       
    }

    const Pagination = () => {
        return (
            <div className="btn-group grid grid-cols-1 xl:grid-cols-2 
                lg:grid-cols-2 md:grid-cols-2 mt-2">
                <button onClick={prevClick} className="btn btn-md w-36 btn-outline">Previous page</button>
                <button onClick={nextClick} className="btn btn-md w-36 btn-outline">Next Page</button>
            </div>
        )
    }

    if (!loading) { return (
        <div>
            
            {pagination}
            {searchTerm}
            <h1>Results</h1>
                
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {(allTeamPlayers.length === 0) 
                        ? <p>There is no player name on this page, click next.</p>
                        :                
                        (allTeamPlayers.map((player, index) => {
                            return (                    
                                <TeamList player={player} key={index}/>
                            )
                        }))
                    }           
                </div>
                {(allTeamPlayers.length > 0) && <Pagination />}            
                  
                           
        </div>        
    ) } else {
        return <Spinner />
    }  


    
}

export default TeamResults