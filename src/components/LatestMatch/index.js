// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first-card">
        <div className="card">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="match-text">{venue}</p>
          <p className="match-text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr />

      <p className="innings">First Innings</p>
      <p className="match-text">{firstInnings}</p>
      <p className="innings">Second Innings</p>
      <p className="match-text">{secondInnings}</p>
      <p className="innings">Man Of The Match</p>
      <p className="match-text">{manOfTheMatch}</p>
      <p className="innings">Umpires</p>
      <p className="match-text">{umpires}</p>
    </div>
  )
}
export default LatestMatch
