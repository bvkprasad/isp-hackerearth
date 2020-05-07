import React from 'react';
import LargeScreen from './components/LargeScreen';
import Header from './components/Header';
//import Axios from 'axios';

class App extends React.Component {

  domain="http://localhost:8080/isp/";
  state = {
    list: [
      {
        id: 1,
        name: "Airtle",
        rating: "3.5",
        price: "500"
      },
      {
        id: 2,
        name: "ACT Broadband",
        rating: "4.5",
        price: "600"
      },
      {
        id: 3,
        name: "Hathway",
        rating: "5",
        price: "800"
      },
      {
        id: 4,
        name: "You Broadband",
        rating: "3",
        price: "400"
      }
    ],
    item: {}
  }
  
  fetchDetails = (id) => {
    //Axios.get(this.domain+"details/"+id)
    //.then((res => res.data))
    //.then(data => {item = data})
    this.setState(()=>({
      ...this.state, 
      item : this.state.list.find(item => (item.id === id))
    }));
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <div className="row">
          <LargeScreen list={this.state.list} fetchDetails={this.fetchDetails} item={this.state.item}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;   
