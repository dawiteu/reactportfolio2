import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
//import ReactPageScroller from 'react-page-scroller';

import Header from './components/Header'; 
import Navigation from './components/Navigation';

//import Index from './pages/Index'; 

import About from './pages/About';
import Skills from './pages/Skills'; 
import Portfolio from './pages/Portfolio'; 
import Footer from './components/Footer'; 
import Contact from './pages/Contact'; 

const App = () => {

  const compIndex = () =>{ 
      return (
        <Fragment>
            <About /> 
            <Skills />
            <Portfolio />
            <Contact />
        </Fragment>
      );
  }

  return (
    <Fragment>
      <Header />
      <Router>
      <Navigation />
        <Switch>
            <Route exact path="/" component={compIndex} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;

/*


   <h1>Hello!</h1>
      <h2>Hello 2</h2>
      <p>dddd</p>
      <span>Spaan</span>



      <Browser>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery1" component={Gal1} />
            <Route exact path="/gallery2" component={Gal2} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer/>
      </Browser>


*/
