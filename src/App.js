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

    }
    /*Bind functions*/
    this.audioPlay=this.audioPlay.bind(this);
    this.testPress=this.testPress.bind(this);


  }

  componentWillMount=(e)=>{
   document.addEventListener("keydown", this.audioPlay.bind(this))
   ;
 }

  testPress =(event)=>{
    console.log("This button was presses")
  }
  audioPlay=(e)=>{
    console.log(e.target.id)
    //console.log(bankOne[0].url)
    let node=document.getElementById('display');
    //console.log(e.key.toUpperCase());e
    let audio;
    switch(e.target.id || e.key.toUpperCase()){

      case 'Q':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Heater-1</h1>'
        break;
      case 'W':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Heater-2</h1>'
        break;
      case 'E':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Heater-3</h1>'
        break;
      case 'A':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Heater-4</h1>'
        break;
      case 'S':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Clap</h1>'
        break;
      case 'D':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Open-HH</h1>'
        break;
      case 'Z':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Kick-n-Hat</h1>'
        break;
      case 'X':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Kick</h1>'
        break;
      case 'C':
        audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
        audio.type='audio/mp3';
        audio.play()
        node.innerHTML='<h1>Closed-HH</h1>'
        break;
    }
/*
    let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    audio.type='audio/mp3';
    audio.play()*/
  }


  render() {


    return (


      <div id='drum-machine'>


        <div className='container' >
          
          <div
          className='drum-pad'
          id='Q'
          onClick={(e) =>this.audioPlay(e)}>Q</div>

          <div
          className='drum-pad'
          id='W'
          onClick={(e) =>this.audioPlay(e)}
          >W
          </div>
          <div
           className='drum-pad'
           id='E'
           onClick={(e) =>this.audioPlay(e)}
           >E
          </div>
          <div
          className='drum-pad'
          id='A'
          onClick={(e) =>this.audioPlay(e)}
          >A
          </div>
          <div
          className='drum-pad'
          id='S'
          onClick={(e) =>this.audioPlay(e)}
          >S
          </div>
          <div
          className='drum-pad'
          id='D'
          onClick={(e) =>this.audioPlay(e)}
          >D
          </div>
          <div
          className='drum-pad'
          id='Z'
          onClick={(e) =>this.audioPlay(e)}
          >Z
          </div>
          <div
          className='drum-pad'
          id='X'
          onClick={(e) =>this.audioPlay(e)}
        >X
          </div>
          <div
          className='drum-pad'
          id='C'
          onClick={(e) =>this.audioPlay(e)}
          >C
          </div>

        </div>
        <div id="display">

        </div>
      </div>
    );
  }
}

export default App;
