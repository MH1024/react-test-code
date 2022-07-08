import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import RoutesSettings from './RoutesSettings';


export const history = createBrowserHistory()


function App() {
  
  return (
      <RoutesSettings />
  );
}

export default App;
