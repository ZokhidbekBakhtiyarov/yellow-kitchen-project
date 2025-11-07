import "./App.css";
import FoodCourt from "./components/Main/FoodCourt/FoodCourt.jsx"
import Restaurants from "./components/Main/Restaurants/Restaurants.jsx";
import Specialities from "./components/Main/Specialities/Specialities.jsx";
import Socialmedia from "./components/Main/Socialmedia/Socialmedia.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <FoodCourt></FoodCourt>
      <Restaurants></Restaurants>
      <Specialities></Specialities>
      <Socialmedia></Socialmedia>
      <Footer></Footer>
    </>
  );
}

export default App;
