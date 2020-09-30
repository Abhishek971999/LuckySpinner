import React,{Fragment} from 'react';
import './App.css';

class App extends React.Component{
  state={
    spinnerState:"circle"
  }
  RotateSpinner = ()=>{
    this.setState({spinnerState:"circle start-rotating"});
    setTimeout(()=>{
      this.setState({spinnerState:"circle start-rotating stop-rotating"});
    },Math.floor(Math.random()*10000+1))
  }
  render(){
    return (
    <Fragment>
    <div className="SpinnerSection">
      <div className="arrow"></div>
      <div className="button-container"><button onClick={this.RotateSpinner}>SPIN</button></div>
      <ul className={this.state.spinnerState}>
        <li><div className="circle-section"><span>Better luck <br/> next time!</span></div></li>
        <li><div className="circle-section"><span>2x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span>100% <br/> Cashback</span></div></li>
        <li><div className="circle-section"><span>&#x20B9; 20</span></div></li>
        <li><div className="circle-section"><span>&#x20B9; 50</span></div></li>
        <li><div className="circle-section"><span>1.5x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span>2x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span>Better luck <br/> next time!</span></div></li>
        <li><div className="circle-section"><span>&#x20B9; 20</span></div></li>
        <li><div className="circle-section"><span>75% <br/> Cashback</span></div></li>
        <li><div className="circle-section"><span>&#x20B9; 50</span></div></li>
        <li><div className="circle-section"><span>3x <br/> Savings</span></div></li>
      </ul>
      <div className="spin-message-div">
      <h1>Spin the wheel now and get rewarded</h1>
      <p>Tap on Spin or rotate the wheel anti-clockwise direction and release to start spinning</p>
    </div>
    </div>
    
    </Fragment>
  );
  }
}

export default App;
