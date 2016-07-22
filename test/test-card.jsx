var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card.jsx');

describe('Card component', function() {
	it('renders the card text', function() {
		var renderer = TestUtils.createRenderer();
		renderer.render(<Card description='string' />);

		var result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		result.type.should.equal('div');
		
	});
});


//   Card component
// string  is highlighted  false
// { '$$typeof': Symbol(react.element),
//   type: 'div',
//   key: null,
//   ref: null,
//   props:
//    { className: 'card',
//      onClick:
//       { [Function: bound onClick]
//         __reactBoundContext: [Object],
//         __reactBoundMethod: [Function: onClick],
//         __reactBoundArguments: null,
//         bind: [Function] },
//      children: [ [Object], [Object] ] },
//   _owner: null,
//   _store: {} }