import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import Layout from "./Commponents/Layout/Layout";
import {Component} from "react/cjs/react.production.min";
import AboutMe from "./Commponents/AboutMe/AboutMe";
import Experience from "./Commponents/Experience/Experience";
import Education from "./Commponents/Education/Education";
import Projects from "./Commponents/Projects/Projects";
class App extends Component {
  render() {
    return (
          <Layout>
            <Switch>

                <Route exact path='/Experience' component={Experience}/>
                <Route exact path='/Education' component={Education}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exect path='/' component={AboutMe}/>
            </Switch>
          </Layout>

    )
  }
}

export default App;
