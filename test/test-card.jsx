/*---------- DEPENDENCIES ----------*/
var React = require('react');
// TestUtils is a React addon that allows you to render a version of a component without needing access to the DOM.
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

// Modules required to run the tests
var Card = require('../js/card');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<Card description='text' />);

/*---------- VARIABLES ----------*/
// getRenderOutput returns the rendered React component, allowing us to check the type and props of the elements rendered by the component.
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
