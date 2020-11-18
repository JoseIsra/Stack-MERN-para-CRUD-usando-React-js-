import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Crud from './componentes/Crud';
import ListaJuegos from './componentes/ListaJuegos';
import Inicio from './componentes/Inicio';
import JuegoElegido from './componentes/JuegoElegido';



function App() {


  return <Router>
      <Switch>
        <Route exact path="/">
          <Inicio /> 
        </Route>
        <Route exact path="/crud">
          <Crud /> 
        </Route>

        <Route exact path="/juegos">
          <ListaJuegos />
        </Route>

        <Route exact path="/juegos/ver/:id">
          <JuegoElegido />
        </Route>

      </Switch>
  </Router>
}

export default App;
