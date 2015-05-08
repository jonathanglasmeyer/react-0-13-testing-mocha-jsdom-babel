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
    appController.state.should.have.all.keys('foo');
  });

  describe('child', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<AppTestController/>);
    const renderOutput = renderer.getRenderOutput();

    it('is of type App', () => {
      const childType = renderOutput.type;
      TestUtils.isCompositeComponentWithType(childType, App);
    });

    it('has exactly one prop with the key "foo"', () => {
      const props = renderOutput.props;
      props.should.all.keys('foo');
    });

  });

});
