var React = require('react');

var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
        <div className="board-name">{this.props.title}</div>
        <form>
          <input type="text" value={this.props.value} onChange={this.props.onAddInputChange}/>
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
        <div className="list-list">{this.props.lists}</div>
      </div>
    );
  }
});

module.exports = Board;