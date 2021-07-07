import { BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';

import Main from "./views/Main"
import Users from "./views/Users";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/users" component={Users}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
