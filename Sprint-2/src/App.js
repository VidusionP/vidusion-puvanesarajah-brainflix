import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main3 from './Pages/Main'
import Upload from './Pages/Upload'
import NotFound from './Pages/NotFound'
import './App.css';

class App extends Component {
      render() {
        return(
          <BrowserRouter>
            <Switch>
              <Route
                path='/videos/:id/'
                render={(props) => 
                <Main3 
                {...props}
                />}
                />
              <Route exact path="/" component={Main3}/>
              <Route path="/Upload" component={Upload}/>
              <Route component={NotFound}/>
            </Switch>
          </BrowserRouter>
        )
      }
}

export default App;
