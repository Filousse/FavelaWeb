import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import Service from './pages/Service';
import FavelaWebSchool from './pages/FavelaWebSchool';
import Prix from './pages/Prix';
import Devis from './pages/Devis';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/service" component={Service} />
            <Route path="/price" component={Prix} />
            <Route path="/favela-web-school" component={FavelaWebSchool} />
            <Route path="/quote" component={Devis} />
            <Route path="/contact" component={Contact} />

            <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
      
  );
};

export default App;
