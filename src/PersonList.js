// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

import axios from 'axios';
import {Grid, Row} from 'react-bootstrap';

class PersonList extends Component {
  state = {
    lines: []
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get(`https://api.tfl.gov.uk/line/mode/tube/status`)
    
    
      .then(res => {
        const lines = res.data;
        this.setState({ lines });
      })
  }

  render() {
    return (
        this.state.lines.map(line => 
<div>
        <Grid>
            <Row>
                <div className="line-block">
                    {
                        line.lineStatuses.map(theStatus => 
                          <div className={"line-row  line-name " + line.id}>
                                <div className="line-box">
                                <div className={"line-sev level-" + theStatus.statusSeverity}>
                                </div>
                                </div>
                                <div className={"col-md-10"}>
                                  <div className="the-line">{line.name}</div>
                                  <br/>
                                  <div className="the-desc">
                                  {theStatus.reason}
                                  </div>
                                  
                                </div>
                              
                          </div>
                        )
                    }
                </div>
            </Row>
        </Grid>
        </div> 
        )     
    )
  }
}

// export default App;
export default PersonList;
