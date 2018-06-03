import React, { Component } from 'react';
import './style.sass';

class DiffFiles extends Component {
    state = {
        firstFileInner: '',
        secondFileInner: '',
        CompareFirst: '',
        CompareSecond: '',
    }
    render() {
        return (
            <div>
                <form>
                    <div className = 'compare-menu'>
                        <label htmlFor = 'firstFile' >
                            <span className = 'compare-menu__file-titles'>First file: </span>
                            <input type="file" accept="text/plain" onChange = {this.handleLoadFile}  id = 'firstFile' />
                        </label>
                        <label htmlFor = 'secondFile' > 
                            <span className = 'compare-menu__file-titles'> Second file: </span>
                            <input type="file" accept="text/plain" onChange = {this.handleLoadFile} id = 'secondFile' />
                        </label>
                        <button onClick = {this.handleCompare(this.state.firstFileInner, this.state.secondFileInner)} > Compare </button>
                    </div>
                    {this.getBodyCompared(this.state.CompareFirst, this.state.CompareSecond)}
                </form>
            </div>
        );
    }

    handleLoadFile = (event) => {
        const currentInput = event.nativeEvent.target.id;

        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (e) => {
                currentInput === 'firstFile' ? this.setState({firstFileInner: e.target.result}) : this.setState({secondFileInner: e.target.result})
         
            };

            reader.readAsText(event.target.files[0]);
           
        }
    } 

    handleCompare = (firstInner,secondInner) => (ev) => {
        ev.preventDefault();
        if ( this.state.firstFileInner && this.state.secondFileInner) {
            this.setState({
                CompareFirst: firstInner,
                CompareSecond: secondInner
            })
        } else 
        return alert('Please load 2 files')

    }

    getBodyCompared = (firstFile, SecondFile) => {
    if (!firstFile && !SecondFile) return

    const firstFileArray = firstFile.split('\n');
    const secondFileArray = SecondFile.split('\n');

    const firstFilleInner = firstFileArray.map((el, i) =>  <li 
            className = 'file-item'
            key = {i}>
                <span className = {el !== secondFileArray[i] ? 'file-item-first-unique' : 'file-item-first-already'}>{el}</span>
            </li>
    )

    const secondFileInner = secondFileArray.map((el, i) => <li 
            className = 'file-item'
            key = {i} >
                <span  className = {el !== firstFileArray[i] ? 'file-item-second-unique' : 'file-item-second-already'}>{el}</span>
             </li>
    )

        return (
            <div className = 'compare-container'>
                <div className = 'file-container file-container__first'>
                    <ul className = 'file-list file-list__first'>
                        {firstFilleInner}
                    </ul>
                </div>
                <div className = 'file-container file-container__second'>
                    <ul className = 'file-list file-list__second'>
                        {secondFileInner}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DiffFiles;