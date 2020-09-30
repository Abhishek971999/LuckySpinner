import React,{Fragment} from 'react';
import './App.css';
import money from './Vector.png'
import { GoogleSpreadsheet } from "google-spreadsheet";
const SPREADSHEET_ID = "1AlswlDtP6DQDDuVwAfgKdG0fxfIVSOpCKi_ZzmOP3_U";
const SHEET_ID = "0";
const CLIENT_EMAIL = "fampay@fampay-291120.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaD6Xwm0l9ek32\ngiAyceyAzi6a13ITzsAfbKRtD3In0OT+guFFsdEYKReX125jlQ/M2sUHtVcp/2os\nNnnD7zbHZlJWSS+Y4ScfQDnUiFrlIRVpdkJMWNkmD+BL8I8cP9PvI4Qi/zU2DTFE\nGR0FXuq+f0qj5FJS4HI42OYdjui/NP8MDs2v22g/zSrNlOym/hFVmvDd/XWeVIiR\n8butetThtKdIPkwNnFxj8WnnJ+ehzystguY4StVPO1LFDWaiF5Prs5M7MWFGvm41\nY4eh5+PEJrM1Nu3VVyMrV0Y4AjYShDxP3G6uhiXIQeH3ACo4yK3kdrcOTg+UJkK+\nwYRp/g4TAgMBAAECggEAEKMGzFnxdb1tKx4LDWsFgF96s2PPN2ioqtBNcs6txt2x\n4u/vkDNi896kU97i9EqmoNpq4ID635O1/eqOe4VWnuIuucuUPvjXbpOmKRHZxK2z\nmWi+4fezYl6HhKboj3ix/dN69ndiXJ3adBe20ANjK8AnD/43AIC3f9PSKelbcF8B\nvPcJjiWuql6oAAXQv0EQ33yzJzCK1R7BHmzFyHGiAW4VVaKAnR0qEoOzFSwDeUvV\nAfyglM+tjGFg2+jamUMNh/hFv7GghfMTraVwE0Dn7BJZ7shmVyzD3iyIAVXHIMX/\ns5ZREkIgg0A/8xeEO2/n7/zZ9cPdMZs0v8dO7b4qVQKBgQD3/k50TRBXnGRpRF8k\nRJhcXNm+7cYkXujRX5Ib7EeI6Bv7UjkDgNVp573e5LddC/rxMvw8xdvfysC2Ph0c\n3Pf3kBlVyh3TyHqtn8Qe5Nab4DOXPuxE8owYgV6Wv8MnTFxHI4+EvTdvnQD3clNE\n+W7Ir6XSW+gbtPHICoZFJRJK/QKBgQDhGfK+R4cg4D9x8XCvAGBN1XGyROTxNJuz\n0ZZhhYBmYAU+/5kbk23TazB58PXhsdhEEFhhMWr+QmE0WRl6MXU3P7l3HnvB0dzC\nTbaA/z+OQmsRdZyRDyghI2e7YVx6gRpHU+BWmn1MjT13GnhOy+kunaBAev1PJAWE\nS1zdMJmyTwKBgA0BdEHbLMk7dXSj1k2Dn23wnKbLt4F+zLz2QyZdvN6sNZN3m2/Y\nmNimA6ol2ovxreZqYxoY0lApRPQJy+MQn5yHHR0HrYrGz9A9Ob7ZB3xDRNFgxmlT\nQw+h8UD8q5JrCcfdUJCIj9i1pjBT+ZP7dNjnhU3D7idN1QRFsQb9S7lNAoGBAKBo\ni1EJS8QjyVJ7SV+MFxSgG+t7qOIyKRqVKmLIbd2GY3anUgYSo1rbsanUCoQQ5hpq\nw3BPdP1HdFmHfN5UzEDYymOWd36A/J4CHyIBwtqvffjtJOtCL8idoFgpY2txALb/\nkIhmgw/APqLXXBBawwqTDRWmD0kMVFoYEk8VSRGFAoGBAMfiPiu5SpbFDEoZG4EI\nrMSvtwR4B9BesNAoOrN18hJ+JMuT7QvZOaFtt+ZRzHUmYCwkA2dxVYbNDiTDZO9I\nPjA7X5WfeiOC9JDzKZm0jcfDjZopPjaZdZ+HNiT462qgCR8CZdm0yj1W3YU77pll\nP//rTj7rHIpIgUYoOadlVhdv\n-----END PRIVATE KEY-----\n";
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class App extends React.Component{
  state={
    spinnerState:"circle"
  }
  appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
      console.log(result)
    } catch (e) {
      console.error('Error: ', e);
    }
  };
  
  RotateSpinner = ()=>{
    this.setState({spinnerState:"circle start-rotating"});
    setTimeout(()=>{
      this.setState({spinnerState:"circle start-rotating stop-rotating"});
      const res = this.checkValue()
      this.appendSpreadsheet({ web_client: "pwa", timestamp: "2020-10-14T18:40:16.092Z",spin_result_index:res })
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
  render(){
    return (
    <Fragment>
    <div className="SpinnerSection">
      <div className="arrow"></div>
      <div className="button-container"><button onClick={this.RotateSpinner}>SPIN</button></div>
      <ul className={this.state.spinnerState}>
        <li><div className="circle-section"><span className="circle-span" id="1">Better luck <br/> next time!</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="2">2x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="3">100% <br/> Cashback</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="4">&#x20B9; 20<img src={money} alt=""/></span></div></li>
        <li><div className="circle-section"><span className="circle-span " id="5">&#x20B9; 50<img src={money} alt=""/></span></div></li>
        <li><div className="circle-section"><span className="circle-span " id="6">1.5x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="7">2x <br/> Savings</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="8">Better luck <br/> next time!</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="9">&#x20B9; 20<img src={money} alt=""/></span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="10">75% <br/> Cashback</span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="11">&#x20B9; 50<img src={money} alt=""/></span></div></li>
        <li><div className="circle-section"><span className="circle-span" id="12">3x <br/> Savings</span></div></li>
      </ul>
      <div className="spin-message-div">
      <h1>Spin the wheel now and get rewarded</h1>
      <p>Tap on Spin or rotate the wheel anti-clockwise direction and release to start spinning</p>
    </div>
    <p className="question">Have a question?<span className="helplink"> Get help</span></p>

    </div>
    
    </Fragment>
  );
  }
}

export default App;
