import React, { Component } from 'react';
import FilesDiffer from '../FilesDiffer';
import './style.sass';


class FilesLoader extends Component {
    state = {
        firstFileInner: '',
        secondFileInner: '',
        CompareFirst: '',
        CompareSecond: ''
    }
    render() {
        return (
            <div>
                <form>
                    <div className = 'compare-menu'>
                        <label htmlFor = 'firstFile' >
                            <div className = 'compare-menu__file-titles'>First file: </div>
                            <input type="file" accept="text/plain" onChange = {this.handleLoadFile}  id = 'firstFile' />
                        </label>
                        <label htmlFor = 'secondFile' > 
                            <div className = 'compare-menu__file-titles'> Second file: </div>
                            <input type="file" accept="text/plain" onChange = {this.handleLoadFile} id = 'secondFile' />
                        </label>
                        <button onClick = {this.handleCompare(this.state.firstFileInner, this.state.secondFileInner)} > Compare </button>
                    </div>
                    <FilesDiffer firstFile = {this.state.CompareFirst} secondFile = {this.state.CompareSecond} />
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

        if (this.state.firstFileInner && this.state.secondFileInner) {
            this.setState({
                CompareFirst: firstInner,
                CompareSecond: secondInner
            })
        } else 
        return alert('Please load 2 files')
    }
}

export default FilesLoader;