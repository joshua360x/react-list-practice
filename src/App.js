// import logo from './logo.svg';
import './App.css';
// import your arrays here
import { phonesArr } from './array-phone';
import { foodFavObj } from './array-foodFav';
import { animalTimeArr } from './array-animal';
import { whereArr } from './array-Where';
import PhoneList from './PhoneList';
import FavFoodList from './FavFoodList';
import AnimalList from './AnimalList';
import WhereList from './WhereList';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <PhoneList phones={phonesArr} />
      <FavFoodList foods={foodFavObj} />
      <AnimalList animals={animalTimeArr} />
      <WhereList whereAbouts={whereArr} />
    </div>
  );
}

export default App;
