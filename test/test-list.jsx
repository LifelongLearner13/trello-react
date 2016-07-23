/*---------- DEPENDENCIES ----------*/
var React = require('react');
// TestUtils is a React addon that allows you to render a version of a component without needing access to the DOM.
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

// Modules required to run the tests
var List = require('../js/list');
var	Card = require('../js/card');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<List 
				title='test list'
				cards={[
					<Card description='text' key='1'/>
					]} />);

/*---------- VARIABLES ----------*/
// getRenderOutput returns the rendered React component, allowing us to check the type and props of the elements rendered by the component.
var result = renderer.getRenderOutput();
var children = result.props.children;

/*----------- TESTS -----------*/
describe('List component', function() {
	it('Renders the list component with a title', function() {

		result.props.className.should.equal('list');
		result.type.should.equal('div');
		children[0].type.should.equal('div');
		children[0].props.className.should.equal('list-title');
		children[0].props.children.should.equal('test list');
	});

	it('Renders a card-holder div containing card components', function() {
		children[1].type.should.equal('div');
		children[1].props.className.should.equal('card-holder');
		children[1].props.children.length.should.equal[1];
		children[1].props.children[0].type.should.equal(Card);
	});

	it('Renders an text input and a button', function() {
		children[2].type.should.equal('form');
		children[2].props.children[0].type.should.equal('input');
		children[2].props.children[1].type.should.equal('button');
	});
});
