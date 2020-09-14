import React, { Component } from 'react';


const Words = ({ words }) => (
    words ? ( 
        <ul className="list">
            {words.map((value, index) => (
            <a href="#"><li className="list-items" key={index}>{ value }</li><i class="heart fa fa-heart-o"></i></a>
            ))}
        </ul> ) : <p> 'No words to display! </p>
    );






export default Words