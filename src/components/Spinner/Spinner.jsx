import React, { Component } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
import {SPINNER_SPREADSHEET_ID,SPINNER_SHEET_ID,SPINNER_CLIENT_EMAIL,SPINNER_PRIVATE_KEY} from './spinner_credentials'
import './Spinner.css';
import money from '../../images/money.png'

const SPREADSHEET_ID = SPINNER_SPREADSHEET_ID;
const SHEET_ID = SPINNER_SHEET_ID;
const CLIENT_EMAIL = SPINNER_CLIENT_EMAIL;
const PRIVATE_KEY = SPINNER_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export class Spinner extends Component {
    state={
        spinnerState:"circle"
      }
      //Function to Rotate and Stop the spinner
      RotateSpinner = ()=>{
        this.setState({spinnerState:"circle start-rotating"});
        setTimeout(()=>{
          this.setState({spinnerState:"circle start-rotating stop-rotating"});
          const res = this.checkValue()
          let device = "web-pwa"
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            device = "mobile-pwa"
           }
          this.appendSpreadsheet({ web_client: device, timestamp: new Date(),spin_result_index:res })
        },Math.floor(Math.random()*10000+1))
      }

      //Function to Check Value overlapping the pin
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

      //Function to append data to google spreadsheet
       appendSpreadsheet = async (row) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
          });
          await doc.loadInfo();
          const sheet = doc.sheetsById[SHEET_ID];
          const result = await sheet.addRow(row);
        } catch (e) {
          console.error('Error: ', e);
        }
      };

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