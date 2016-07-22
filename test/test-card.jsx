var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var BoardContainer = require('../index.jsx');
var Board = require('../index.jsx');
var ListContainer = require('../index.jsx');
var List = require('../index.jsx');
var Card = require('../index.jsx');

describe('Card component', function() {
	it('renders the card text', function() {
		var renderer = TestUtils.createRenderer();
		renderer.render(<Card description='string' />);

		var result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('card');
	});
});