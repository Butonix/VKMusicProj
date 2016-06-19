import React, { Component, PropTypes } from 'react';


class AudioRow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			Value: '▶'
		};
	}

	handleClick() {
		console.log('play button works!')
	}

	render() {
		return (

			<tr>
                <td className="artist"> {this.props.audio.artist} </td>
                <td> {this.props.audio.title} </td>
                <td className="buttons-onrow">
                    <input type="button" className="stop-btn-onrow" onClick={this.handleClick} value={this.state.Value} /> 
                    <a href={this.props.audio.url} download="audio.mp3">
                    	<button className="download-btn line"> <img className="download-img" src="/media/download.png"/> </button>
                    </a>
                </td>
            </tr>

		)
	}
}

export default AudioRow