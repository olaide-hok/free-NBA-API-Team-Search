import PropTypes from 'prop-types'

function TeamList({player : { first_name, last_name, team }}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <h2 className="card-title">{team.full_name}</h2>
            <h4> {first_name} {last_name}</h4> 
          </div>                    
        </div>
    </div>
  )
}

TeamList.propTypes = {
    team: PropTypes.object
}

export default TeamList
