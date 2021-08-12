import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import GoogleTimer from './components/GoogleTimer/GoogleTimer';

import Homepage from './components/Homepage/Homepage';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import InputValidation from './components/InputValidation/InputValidation';
import Parent from './components/Parent/Parent';
import Resize from './components/Resize/Resize';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/example/1" component={Resize} />
          <Route path="/example/2" component={Parent} />
          <Route path="/example/3" component={InfiniteScroll} />
          <Route path="/example/4" component={Carousel} />
          <Route path="/example/5" component={GoogleTimer} />
          <Route path="/example/6" component={InputValidation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
