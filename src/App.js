import NavBar from "./Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"💕BIENVENIDOS A ESTE HERMOSO SITIO WEB💕"} />
    </div>
  );
}

export default App;
