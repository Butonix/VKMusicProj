import React, { Component, PropTypes } from 'react';
import Player from './player_body.jsx';
import SearchField from './search_field.jsx';


class PlayerSection extends Component {

	render() {
		return (

			<div className="player-block">
				<Player {...this.props} />
				<SearchField {...this.props} />
			</div>

		)
	}

}


Player.propTyes = {
	Audiourl: PropTypes.string.isRequired,
	playing: PropTypes.bool.isRequired,
	ButtonValue: PropTypes.string.isRequired,
	CurrentArtist: PropTypes.string.isRequired,
	CurrentTitle: PropTypes.string.isRequired,
	playNextAudio: PropTypes.func.isRequired,
	playPrevAudio: PropTypes.func.isRequired,
	OnChangeAudioSearchQuery: PropTypes.func.isRequired
};


export default PlayerSection