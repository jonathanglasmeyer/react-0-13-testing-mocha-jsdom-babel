import React from 'react/addons';
import assert from 'assert';

import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const should = chai.should();

const TestUtils = React.addons.TestUtils;

import AppTestController from '../../components/app/AppTestController.jsx';
import App from '../../components/app/App.jsx';

describe('AppController', () => {
  let appController;

  before('render and locate element', () => {
    appController = TestUtils.renderIntoDocument(
      <AppTestController/>
    );
  });

  it('renders without problems', () => {
    TestUtils.isCompositeComponent(appController).should.be.true;
  });

  it('its state has exactly one key named "foo"', () => {
    (appController.state).should.have.all.keys('foo');
  });

  describe('it renders', () => {
    const renderResult = render(<AppTestController />);

    it('a child of type App', () => {
      const childType = renderResult.type;
      TestUtils.isCompositeComponentWithType(childType, App);

    });

    it('which gets exactly one prop with the key "foo"', () => {
      const props = renderResult.props;
      props.should.have.all.keys('foo');
    });

  });


});
describe('App', () => {

  describe('renders', () => {
    const propValue = 'fooo';
    const renderResult = render(<App foo={propValue}/>);

    it('a paragraph', () => {
      (renderResult.type).should.equal('p');
    });

    it('with the value of the \'foo\'-prop', () => {
      (renderResult.props.children).should.equal(propValue);

    });

  });

});
