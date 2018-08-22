import React, { Component } from 'react';
import '../index.css';
import '../material.min.css';
 
class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
         <section id="buttons">
           <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this.props.handlePrevClick}>
             <ion-icon name="skip-backward" />
           </button>
           <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this.props.handleSongClick} >
           <ion-icon name={this.props.isPlaying ? 'pause' : 'play'} />
           </button>
           <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this.props.handleNextClick}>
            <ion-icon name="skip-forward" />
           </button>
         </section>
         <section id="time-control">
         <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
           <input 
             type="range" 
             className="mdl-slider mdl-js-slider" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01" 
             onChange={this.props.handleTimeChange}

           />   
           <div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"></div>
           <input 
            type="range" 
            className="mdl-slider mdl-js-slider" 
            value={this.props.currentVolume}
            max="1.0"
            min="0.0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            />
           <div className="icon ion-volume-high"></div>
         </section>      
        </section>
    );
  }
}

export default PlayerBar;