import React from 'react'

function Pagination({searchTerm, pagination, setLoading,setPagination}) {

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

  return (
    <div className="btn-group grid grid-cols-1 xl:grid-cols-2 
        lg:grid-cols-2 md:grid-cols-2 mt-2">
        <button onClick={prevClick} className="btn btn-md w-36 btn-outline">Previous page</button>
        <button onClick={nextClick} className="btn btn-md w-36 btn-outline">Next Page</button>
    </div>
  )
}

export default Pagination