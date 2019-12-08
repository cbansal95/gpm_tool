import React from 'react';
import './App.css';
import FileInput from './components/input'
import Body from './components/body'

class App extends React.Component {
  constructor() {
    super()
    this.state = { songs: "" }
  }

  setSongsData = (data) => {
    this.setState({'songs':data})
  }

  render() {

    if (this.state.songs === "") {
      return (
          <FileInput setSongsData={this.setSongsData}/>
      );
    }
    else{
      return(
        <Body data={this.state.songs}/>
      )
    }
  }

}

export default App;
