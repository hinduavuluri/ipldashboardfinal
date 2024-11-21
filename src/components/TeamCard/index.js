// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imgUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div className="team-card">
          <img src={imgUrl} className="image" alt={name} />
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
