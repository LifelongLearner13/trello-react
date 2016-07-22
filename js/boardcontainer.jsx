var React = require('react');
var Board = require('./board');
var ListContainer = require('./listcontainer');

var BoardContainer = React.createClass({
  getInitialState: function () {
    return {
      listTitle: '',
      lists: [],
      counter: 0
    }
  },
  onAddInputChange: function (event) {
    this.setState({listTitle: event.target.value})
  },
  onAddClick: function (event) {
    event.preventDefault();
    var tempLists = this.state.lists.slice();
    tempLists.push(<ListContainer key={this.state.counter} title={this.state.listTitle} id={this.state.counter}/>);
    var tempCounter = this.state.counter + 1;
    this.setState({
      listTitle: '',
      lists: tempLists,
      counter: tempCounter});
  },
  render: function () {
    return <Board title="Trello Board"
      onAddInputChange={this.onAddInputChange}
      onAddClick={this.onAddClick}
      lists={this.state.lists}
      value={this.state.listTitle}
      />
  }
});

module.exports = BoardContainer;