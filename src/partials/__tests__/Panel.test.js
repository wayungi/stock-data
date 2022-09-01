import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Panel from '../Panel';
import { store } from '../../redux/store';

describe('Test the Panel component', () => {
  test('Panel renders correctly', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Panel />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
