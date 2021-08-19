import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Fruits from "./Components/Fruits";
import FruitInfo from "./Components/FruitInfo";
import AppState from "./Context/AppState";

function App() {
   return (
      <>
         <AppState>
            <Router>
               <Switch>
                  <Route path="/" exact component={Fruits} />
                  <Route path="/:id" component={FruitInfo} />
               </Switch>
            </Router>
         </AppState>
      </>
   );
}

export default App;
