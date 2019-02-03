import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css'
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
