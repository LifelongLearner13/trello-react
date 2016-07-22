var React = require('react');

var Card = React.createClass({
   getInitialState: function() {
        return {
            highlight: false
        };
    },
   onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    onDelete: function(event) {
      event.stopPropagation();
      this.props.onDelClick(event, this.props.id);
    },
    render: function() {
      var classes = 'card' + (this.state.highlight ? ' highlight' : '');
      return (
        <div className={classes} onClick={this.onClick}>
          <div className="card-description">{this.props.description}</div>
          <button onClick={this.onDelete}>-</button>
        </div>
      );
  },
});

module.exports = Card;