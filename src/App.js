import logo from "./logo.svg";
import "./style.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="App">
        <Product 
          img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
          name="New product" 
          desc="The new product of Nike" 
          price="$200" /> 
        <Product 
          img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
          name="New product" 
          desc="The new product of Nike" 
          price="$200" />
        <Product 
          img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
          name="New product" 
          desc="The new product of Nike" 
          price="$200" />
      </div>
    </div>
  );
}

export default App;
