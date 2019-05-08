import React, { Component } from 'react'

import PlayerProfile from '../components/PlayerProfile'
import ProfileBar from '../components/ProfileBar'

const PLAYERS_API = "http://localhost:3000/api/v1/players/"

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  updatePlayerShowTeams = () => {
    const requestParams = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        show_teams: true
      })
    }
    fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  }

  updatePlayerShowPlayers = () => {
    const requestParams = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        show_teams: false
      })
    }
    fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  }

  render() {
    return (
      <div id="profile-container">
      <ProfileBar logout={this.props.logout} currentPlayer={this.props.currentPlayer}/>
        <PlayerProfile 
          login={this.props.loginClick} 
          /* showCreateTeamForm={this.props.showCreateTeamForm} */
          currentPlayer={this.props.currentPlayer}
          /* showTeams={this.updatePlayerShowTeams} */
          showPlayers={this.updatePlayerShowPlayers}
          currentTeam={this.props.currentTeam}
          allTeams={this.props.allTeams}
        />
      </div>
    )
  }
}

export default ProfileContainer