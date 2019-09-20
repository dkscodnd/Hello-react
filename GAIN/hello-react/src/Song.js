import React, { Component } from 'react';

class Song extends Component {
    render(){
        return (
            <div>
                <b>{this.props.name}</b>
            </div>
        )
    }
}