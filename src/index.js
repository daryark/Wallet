import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App/App';
import { Media } from 'components/Media/Media';
import { store } from 'redux/store';

import GlobalStyles from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Media>
            <App />
          </Media>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
