/*---------- DEPENDENCIES ----------*/
var React = require('react');
// TestUtils is a React addon that allows you to render a version of a component without needing access to the DOM.
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

// Modules required to run the tests
var Board = require('../js/board');
var List = require('../js/list');
var	Card = require('../js/card');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(
<Board 
	title='test board' 
	lists={
		[<List 
			title='test'
			key='1'
			cards={[
				<Card description="text" key="1"/>
			]} 
		/>]}
/>);

/*---------- VARIABLES ----------*/
// getRenderOutput returns the rendered React component, allowing us to check the type and props of the elements rendered by the component.
var result = renderer.getRenderOutput();
var children = result.props.children;
var	listArr = children[2].props.children;
var cardArr = listArr[0].props.cards;

/*----------- TESTS -----------*/
describe('Board component', function() {
	it('Renders the Board component with a title', function() {
		result.props.className.should.equal('board');
		result.type.should.equal('div');
		children[0].type.should.equal('div');
		children[0].props.className.should.equal('board-name');
		children[0].props.children.should.equal('test board');
	});

	it('Renders a text input and a button', function() {
		children[1].type.should.equal('form');
		children[1].props.children[0].type.should.equal('input');
		children[1].props.children[1].type.should.equal('button');
	});

	it('Renders List components containing Card components', function() {
		children[2].type.should.equal('div');
		children[2].props.className.should.equal('list-list');
		listArr.length.should.equal[1];
		listArr[0].type.should.equal(List);
		cardArr.length.should.equal[1];
		cardArr[0].type.should.equal(Card);

	});
});