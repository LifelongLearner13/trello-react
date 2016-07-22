/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<Card description='text' />);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
var card = result.props.children[0];
var button = result.props.children[1];

/*----------- TESTS -----------*/
describe('Card component', function() {
	it('Renders a card component with a text', function() {
		result.props.className.should.equal('card');
		result.type.should.equal('div');
		card.type.should.equal('div');
		card.props.className.should.equal('card-description');
		card.props.children.should.equal('text');
	});

	it('Renders a delete button', function() {
		button.type.should.equal('button');
		
	});
});
