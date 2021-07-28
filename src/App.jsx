import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import Parent from './components/Parent/Parent';
import Resize from './components/Resize/Resize';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/example/1" component={Resize} />
          <Parent exact path="/example/2" component={Parent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
