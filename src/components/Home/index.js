// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const convertedData = data.teams.map(item => ({
      name: item.name,
      id: item.id,
      imgUrl: item.team_image_url,
    }))
    this.setState({teams: convertedData, isLoading: false})
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getTeamCards = () => {
    const {teams} = this.state
    return (
      <ul className="team-card-list">
        {teams.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="app-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.getLoader() : this.getTeamCards()}
      </div>
    )
  }
}
export default Home
