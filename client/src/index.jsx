import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import $ from 'jquery';
import CarList from './components/CarList.jsx';
import AddMakeModel from './components/AddMakeModel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.addCarItem = this.addCarItem.bind(this);
    this.getCars = this.getCars.bind(this);
  }
  addCarItem(make, model) {
    $.ajax({
      method: "POST",
      url: "/cars",
      contentType: 'application/json',
      data: JSON.stringify({
        make: make,
        model: model
      })
    }).done(() => {
      this.getCars();
    });
  }

  getCars() {
    $.ajax({
      url: '/cars',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (<div>
      <hi>CarList</hi>
      <AddMakeModel addItem={this.addCarItem}/>
      <CarList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
