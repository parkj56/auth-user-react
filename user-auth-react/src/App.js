import SignUp from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/Signup' Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
