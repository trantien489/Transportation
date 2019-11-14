import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n'; // initialized i18next instance
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import ReduxToastr from 'react-redux-toastr';
const store = configureStore();
export default ReactDOM.render(
    (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />                
            </I18nextProvider>
            <ReduxToastr timeOut={3000} newestOnTop={false} preventDuplicates 
            position="top-right" transitionIn="fadeIn" transitionOut="fadeOut" 
            progressBar closeOnToastrClick={false} />
        </Provider>
    ), document.getElementById('root'),
);
serviceWorker.unregister();
