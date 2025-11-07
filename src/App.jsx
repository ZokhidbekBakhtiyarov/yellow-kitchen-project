import "./App.css";
import Foodcourt from "./components/Main/Foodcourt/Section1";
import Restaurants from "./components/Main/Restaurants/Section2";
import Specialities from "./components/Main/Specialities/Section3";
import Socialmedia from "./components/Main/Socialmedia/Section4";
import Header from "./components/Header/Header";
import Footer from ".components//Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Restaurants></Restaurants>
      <Socialmedia></Socialmedia>
      <Foodcourt></Foodcourt>
      <Specialities></Specialities>
      <Footer></Footer>
    </>
  );
}

export default App;