import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <div classNameName="grid-container">
        <header className="row">
          <div className="brand">
            <a href="/">MERN Web</a>
          </div>
          <div className="">
            <a href="/cart.html">Cart</a>
            <a href="/signin.html">SignIn</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
