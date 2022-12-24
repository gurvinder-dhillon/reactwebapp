//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import CardContainer from './components/CardContainer.js';
import Promo from './components/Promo';
import Calc from './components/Calc';

function Heading(props) {
  console.log(props);
  return (
    < h1 className="App-header" >{props.head}</h1 >
  );
}

function App() {
  return (
    <div className="container">
      <Heading head="Gurvinder Dhillon" />
      <Nav />

      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </div>
  );
}

export default App;
