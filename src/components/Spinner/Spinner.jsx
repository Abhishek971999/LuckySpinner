import React, { Component } from 'react'
import money from '../../Vector.png'
import './Spinner.css'
export class Spinner extends Component {
    state={
        spinnerState:"circle"
      }
      RotateSpinner = ()=>{
        this.setState({spinnerState:"circle start-rotating"});
        setTimeout(()=>{
          this.setState({spinnerState:"circle start-rotating stop-rotating"});
          const res = this.checkValue()
        //   this.appendSpreadsheet({ web_client: "pwa", timestamp: "2020-10-14T18:40:16.092Z",spin_result_index:res })
        },Math.floor(Math.random()*10000+1))
      }
      checkValue = ()=>{
        const elements = document.querySelectorAll(".circle-section")
        let max = 0;
        let element = undefined;
        elements.forEach(function(elem) {
        if(elem.getBoundingClientRect().left>max){
          max = elem.getBoundingClientRect().left
          element = elem.childNodes[0].id
        }
        });
        return element
      }
    render() {
        return (
            <>
                <div className="arrow"></div>
                <div className="button-container"><button onClick={this.RotateSpinner}>SPIN</button></div>
                <ul className={this.state.spinnerState}>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="1">Better luck <br/> next time!</span>
                        </div>
                      </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="2">2x <br/> Savings</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="3">100% <br/> Cashback</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="4">&#x20B9; 20<img src={money} alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span " id="5">&#x20B9; 50<img src={money} alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span " id="6">1.5x <br/> Savings</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="7">2x <br/> Savings</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                      <span className="circle-span" id="8">Better luck <br/> next time!</span>
                    </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="9">&#x20B9; 20<img src={money} alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="10">75% <br/> Cashback</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="11">&#x20B9; 50<img src={money} alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="12">3x <br/> Savings</span>
                    </div>
                    </li>
                </ul>  
            </>
        )
    }
}
export default Spinner