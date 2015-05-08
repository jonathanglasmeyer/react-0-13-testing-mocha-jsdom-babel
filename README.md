# Testing with Mocha, Chai, JSDom, React 0.13 and Babel

This is a demo/proof of concept demonstrating how to test React components with React 0.13 style classes and babel (stage 0), using the idea of [smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for dependency injecting mock-data into the components we want to test via TestController components.

In this example there is an App component which gets its data as props from a  AppTestController component, which has test data hardcoded in its state and serves as a data mock for testing. There would be another 'real' AppController getting its state via Flux/Actions/some API, but we don't care about this when we want to test React components in isolation.

## how
`npm test` runs mocha in watch mode, loading the tests each time a test file or a component file changes. this is blazing fast (6-7ms). if the test suite grows, we could append `.only` to the `describe`- or `it`-block that we are currently testing. (see [here](http://jaketrent.com/post/run-single-mocha-test/) for further explanation).


### credit
forked/inspired by [jesstelford/react-testing-mocha-jsdom](https://github.com/jesstelford/react-testing-mocha-jsdom). thanks!
