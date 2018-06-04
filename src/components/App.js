import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import FilesLoader from './FilesLoader'

class App extends Component {
    render() {

        return (
            <div>
               <FilesLoader/>
            </div>
        )
    }
}

export default hot(module)(App)