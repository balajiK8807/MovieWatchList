import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from "./Components/Headers";
import Footer from './Components/Footer';
import MoviesGrid from './Components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>  <Header/></div>
      <MoviesGrid/>
      <Footer/>
    </div>
  );
}


export default App;
