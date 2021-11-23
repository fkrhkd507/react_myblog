import { BrowserRouter, Route } from 'react-router-dom';
import Main from './route/Main.js';

const App = () => {

  return (
    <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/:type" component={Main} />
    </BrowserRouter>
  );
}


export default App;
