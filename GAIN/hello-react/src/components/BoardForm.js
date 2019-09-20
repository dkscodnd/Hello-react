import React,{Component} from 'react';
import { Button,Input } from 'antd';
import './BoardForm.css';

class BoardForm extends Component { 
    state = {} 
    handleChange = (e) => { 
      this.setState({ [e.target.name]: e.target.value 
      }) 
    } 
    handleSubmit = (e) => { 
      e.preventDefault(); 
      this.props.onSaveData(this.state);
      this.props.onCreate(this.state);
      this.setState({
          brdno: '',
          brdwriter: '',
          brdlink: ''
      }); 
    } 
    render() 
    { 
      return (
       <form onSubmit={this.handleSubmit}> 
        <Input placeholder="노래이름" name="brdno" value={this.state.brdno} onChange={this.handleChange}/> 
        <Input placeholder="가수/아티스트" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/> 
        <Input placeholder="링크" name="brdlink" value={this.state.brdlink} onChange={this.handleChange}/> 
        <Button type="primary" onClick={this.handleSubmit}>신청</Button> 
        </form>
        ); 
    } 
  }

  export default BoardForm;