import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import DiffFiles from './DiffFiles'

class App extends Component {
    render() {

        return (
            <div>
               <DiffFiles/>
            </div>
        )
    }
}

export default hot(module)(App)