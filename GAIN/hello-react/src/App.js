import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Designform from './components/Designform';
import SongCreate from './components/SongCreate';
import SongList from './components/SongList';
import SongTemplate from './components/SongTemplate';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
     <div>
       <SongTemplate>
       <Designform onCreate={this.handleCreate}/>
       </SongTemplate>
     </div>
    );
  }
}

export default App;