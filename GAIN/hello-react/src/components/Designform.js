import React, { Component } from 'react';
import { Button,Input } from 'antd';
import './Designform.css';

class Design extends Component {
    constructor() {
    super();
    this.state = { 
      name: '',
      artist:'',
      link:''
    };
  }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState ({
            name: '',
            artist: '',
            link: ''
        });
    }

    render(){
    return (
        <form>
        <Input placeholder="노래 이름" 
        value={this.state.name} onChange={this.handleChange} name="name"
        />
        <Input placeholder="가수/아티스트" value={this.state.artist} onChange={this.handleChange} name="artist" />
        <Input placeholder="링크" value={this.state.link} onChange={this.handleChange} name="link"/>
        <Button type="primary" onClick={this.handleSubmit}>신청</Button>
        </form>
        );
    }
}

export default Design;