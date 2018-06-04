import React, { Component } from 'react';
import './style.sass';

function FilesDiffer(props) {
    const {firstFile} = props;
    const {secondFile} = props;

    if (!firstFile && !secondFile) return null;
    
    const firstFileArray = firstFile.split('\n');
    const secondFileArray = secondFile.split('\n');

    const firstFilleInner = firstFileArray.map((el, i) =>  <li 
            className = 'file-item'
            key = {i}>
                <span className = {el !== secondFileArray[i] ? 'file-item-first-unique' : 'file-item-first-already'}>{el}</span>
            </li>
    );

    const secondFileInner = secondFileArray.map((el, i) => <li 
            className = 'file-item'
            key = {i} >
                <span  className = {el !== firstFileArray[i] ? 'file-item-second-unique' : 'file-item-second-already'}>{el}</span>
            </li>
    );

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
    );
};

export default FilesDiffer;
