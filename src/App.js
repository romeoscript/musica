import "./App.css";
import Home from "./pages/Home/Home";
import Context from "./context/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Home />
      </Context>
    </div>
  );
}

export default App;
