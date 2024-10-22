import './App.css';
import Accordion from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
