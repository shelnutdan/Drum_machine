import React, { Component } from 'react';
import keydown from 'react-keydown';

import './App.css';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      display:""
    }
    /*Bind functions*/
    this.audioPlay=this.audioPlay.bind(this);
  }
  componentWillMount=(e)=>{
   document.addEventListener("keydown", this.audioPlay.bind(this))
   ;
 }

  audioPlay=(e)=>{
    let trigger=e.target.id || e.key.toUpperCase().charCodeAt(0)
    
    let index=bankOne.findIndex(obj=>obj.keyCode==trigger)
    let audio;
    audio = new Audio(bankOne[index].url)
    audio.type='audio/mp3';
    audio.play();
    this.setState({
      display: bankOne[index].id
    })

  }


  render() {


    return (


    <div id='drum-machine'>
        <div id="display">
          <h1>{this.state.display}</h1>
        </div>
      <div className='container' >
        {bankOne.map(e=>
          <div className='drum-pad' id={e.keyCode} onClick={(e)=>{this.audioPlay(e)}}
            onKeyDown={(e)=>{this.audioPlay(e)} }>{e.keyTrigger}
            </div>
        )}
      </div>

    </div>
    );
  }
}

export default App;
