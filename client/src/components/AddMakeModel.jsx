import React from 'react';

class AddMakeModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: ''
    }
    this.add = this.add.bind(this);
    this.updateMake = this.updateMake.bind(this);
    this.updateModel = this.updateModel.bind(this);

  }

  updateMake(e) {
    this.setState({
      make: e.target.value
    })
  }

  updateModel(e) {
    this.setState({
      model: e.target.value
    })
  }

  add() {
    this.props.addItem(this.state.make, this.state.model);
    this.setState({
      make: '',
      model: ''
    })
  }

  render () {
    return (<div>
      Description: <input onChange={this.updateMake} value={this.state.make}></input>
      <br />
      Quantity: <input onChange={this.updateModel} value={this.state.model}></input>
    <button onClick={this.add}>Add Make Model</button>
    </div>);
  }
}

export default AddMakeModel;
