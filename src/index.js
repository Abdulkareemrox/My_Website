import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Cards from "./components/Card";
import { card } from "./store/Data";
import { Text, imagesData } from "./store/Data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="textBox">
          <q>{Text}</q>
        </div>

        <ImageSlider images={imagesData} />
      </div>
      <Cards data={card} />

      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
