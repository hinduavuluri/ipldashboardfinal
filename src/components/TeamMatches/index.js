// Write your code here
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, recentMatchesData: {}}

  componentDidMount() {
    this.getData()
  }

  getFormattedDataObj = item => ({
    id: item.id,
    umpires: item.umpires,
    result: item.result,
    manOfTheMatch: item.man_of_the_match,
    date: item.date,
    venue: item.venue,
    competingTeam: item.competing_team,
    competingTeamLogo: item.competing_team_logo,
    firstInnings: item.first_innings,
    secondInnings: item.second_innings,
    matchStatus: item.match_status,
  })

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedDataObj(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedDataObj(eachMatch),
      ),
    }
    this.setState({recentMatchesData: formattedData, isLoading: false})
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getRecentMatches = () => {
    const {recentMatchesData} = this.state
    const {recentMatches} = recentMatchesData

    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} matchData={eachMatch} />
        ))}
      </ul>
    )
  }

  onClickBackBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  displayMatchDetails = () => {
    const {recentMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = recentMatchesData

    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <button type="button" className="button" onClick={this.onClickBackBtn}>
          Back
        </button>
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.getRecentMatches()}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div className="bg-container">
          {isLoading ? this.getLoader() : this.displayMatchDetails()}
        </div>
      </>
    )
  }
}

export default withRouter(TeamMatches)
