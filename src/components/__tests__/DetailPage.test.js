import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailPage from '../DetailPage';
import { store } from '../../redux/store';

describe('Test the DetailPage component', () => {
  test('DetailPage renders correctly', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DetailPage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
