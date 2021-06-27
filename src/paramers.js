import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default  function ParamersExample(){
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Nexflix</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />}></Route>
        </Switch>
      </div>
    </Router>
  )
}

function Child(){
  let {id} = useParams();

  return(
    <div>
      <h3>ID:{id}</h3>
    </div>
  )
}
