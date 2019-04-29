// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import MyInfoContainer from './MyInfoContainer'
import CandidatesContainer from './CandidatesContainer'
import ProfileBar from '../components/ProfileBar'

// Actions
import { choosePlayer } from '../actions/discoverActions'
import { chooseTeam } from '../actions/discoverActions'

class DiscoverContainer extends Component {
  constructor(props) {
    super(props)
  }

  //choose player/team and decline player/team may need to be a patch request to the DB instead of updating state

  render() {
    console.log('discover props', this.props)
    return (
      <div>
        <h1>Discover</h1>
        <button onClick={this.props.logoutClick}>Log Out</button>
        <MyInfoContainer/>
        <CandidatesContainer 
          currentPlayer={this.props.currentPlayer}
          currentTeam={this.props.currentTeam}
          allTeams={this.props.allTeams}
          allPlayers={this.props.allPlayers}
          choosePlayer={this.props.choosePlayer}
          chooseTeam={this.props.chooseTeam}
          declinePlayer={this.props.declinePlayer}
          declineTeam={this.props.declineTeam}
          fetchPlayersAndTeams={this.fetchAllPlayers}
        />
        <ProfileBar showProfileContainer={this.props.showProfileContainer}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myTeams: state.discoverReducer.myTeams,
    myPlayers: state.discoverReducer.myPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choosePlayer: (player) => dispatch(choosePlayer(player)),
    chooseTeam: (team) => dispatch(chooseTeam(team))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer)