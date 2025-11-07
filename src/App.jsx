import "./App.css";
import Foodcourt from "./components/Main/Foodcourt";
import Restaurants from "./components/Main/Restaurants";
import Specialities from "./components/Main/Specialities";
import Socialmedia from "./components/Main/Socialmedia";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Foodcourt></Foodcourt>
      <Restaurants></Restaurants>
      <Specialities></Specialities>
      <Socialmedia></Socialmedia>
      <Footer></Footer>
    </>
  );
}

export default App;
