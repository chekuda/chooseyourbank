import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Home from './pages/Home';
import Form from './pages/Form';

browserHistory.listen((location) => {
  setTimeout(() => { // Use setTimeout to make sure this runs after React Router's own listener
    if (location.action === 'POP') { return; } // When going back or changing URL
    window.scrollTo(0, 0); // In all other cases, scroll to top
  });
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Home} />
    </Route>
    <Route path="/form">
         <Route path=":bankId" component={Form} />
    </Route>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
