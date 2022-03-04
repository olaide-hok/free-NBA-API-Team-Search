import { useState } from 'react'

function TeamSearch(
    {   allTeamPlayers,
        pagination,
        clearPlayers,
        setSearchTerm,
        setPagination,
        setLoading,
        fetchAllPlayers
    }) {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '') {
            alert("Enter valid NBA team name")
            
        }else {
            setSearchTerm(text)
            setLoading(true)
            fetchAllPlayers(text)
        }
        setText('')
        setPagination(pagination)
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8' >
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input 
                            type="text" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder="Enter team's name"
                            value={text}
                            onChange={handleChange}
                            required
                        />
                        <button
                            onClick={(e) =>handleSubmit(e) }
                            type='submit' 
                            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Search
                        </button>
                    </div>
                </div>
            </form>

        </div>
       { allTeamPlayers.length > 0 && (<div>
            <button
                onClick={clearPlayers}
                className="btn btn-ghost btn-lg">Clear
            </button>
        </div>)}
    </div>
  )
}

export default TeamSearch