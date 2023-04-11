//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import CardContainer from './components/CardContainer.js';
import Promo from './components/Promo';
import Calc from './components/Calc';
import DessertList from './components/DessertList'
import Test from './components/Test';
import ToDo from './components/ToDo';
import Formr from './components/Formr';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

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
        <Route path="/desserts" element={<DessertList data={desserts} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/formr" element={<Formr />} />
      </Routes>
    </div>
  );
}

export default App;
