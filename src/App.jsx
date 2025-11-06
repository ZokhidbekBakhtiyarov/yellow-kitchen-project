import "./App.css";
import Foodcourt from "./components/Main/Section1/Section1";
import Restaurants from "./components/Main/Section2/Section2";
import Specialities from "./components/Main/Section3/Section3";
import Socialmedia from "./components/Main/Section4/Section4";
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