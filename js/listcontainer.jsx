var React = require('react');
var List = require('./list');
var Card = require('./card');

var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      text: '',
      cards: [],
      counter: 0
    }
  },

  onDelClick: function (event, id) {
    var tempCardsArray = this.state.cards.filter(function(card) {
      return id !== card.props.id;
    });
    this.setState({cards: tempCardsArray});
  },

  onAddInputChange: function (event) {
    this.setState({text: event.target.value})
  },

  onAddClick: function (event) {
    event.preventDefault();
    var testCards = this.state.cards.slice();
    testCards.push(<Card key={this.state.counter} description={this.state.text} id={this.state.counter} onDelClick={this.onDelClick} />)

    var tempCounter = this.state.counter + 1;
    this.setState({cards: testCards,
                   text: '', counter: tempCounter});
  },

  render: function () {
    return <List title={this.props.title}
      cards={this.state.cards}
      value={this.state.text}
      onAddInputChange={this.onAddInputChange}
      onAddClick={this.onAddClick} />
  }
});

module.exports = ListContainer;