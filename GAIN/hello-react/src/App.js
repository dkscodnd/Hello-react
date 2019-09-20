import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import SongTemplate from './components/SongTemplate';
import SongTemplate1 from './components/SongTemplate1';
import BoardForm from './components/BoardForm';
import BoardItem from './components/BoardItem';


class App extends Component {
  constructor(props) { 
    super(props); 
    this.child = React.createRef(); 
}
    state = { 
      maxno:3,
      boards: [
        {
          name: '포장마차',
          artist: '황인욱',
          brdtitle:'대기',
          brddsin:'안채웅',
          brdlink:'https://www.youtube.com/watch?v=Hi0skksGeRk'
        },
        {
                name: 'Bad guy',
                artist: '빌리 아일리쉬',
                brdtitle: '완료',
                brddsin: '정현문',
                brdlink: 'https://www.youtube.com/watch?v=DyDfgMOUjCI'
        }
      ]
    }
    handleSaveData = (data) => {
      this.setState({
        boards: this.state.boards.concat({ name: '', artist: '',brdlink: '',...data })
      });
    }
      
  handleCreate1 = (data) => {
    console.log(data);
  }
render(){
  const {boards} = this.state;
  const list = boards.map(function(row){
      return row.brdno + row.brdwriter;
  });
    return (
      <main>
       <SongTemplate>
      <BoardForm onSaveData={this.handleSaveData} onCreate={this.handleCreate1}/>
      </SongTemplate>
      <SongTemplate1/>
     <table border="1" className="song-list">
         <tbody>
             <tr align="center">
             </tr>
             {
                 boards.map(row =>   
                  (<BoardItem key={row.brdno} row={row}/>)
                  )
             }
         </tbody>
     </table>
  </main>
    );
  }
}

export default App;