import { useState } from "react";
import "./App.css";
import BaristaForm from "./Components/BaristaForm";
import drinksJson from "./drinks.json";

function App() {
  const [count, setCount] = useState(0);
  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});

  const [correctTemp, setCorrectTemp] = useState(null);
  const [correctSyrup, setCorrectSyrup] = useState(null);
  const [correctMilk, setCorrectMilk] = useState(null);
  const [correctBlended, setCorrectBlended] = useState(null);

  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(
      Math.random() * drinksJson.drinksJson.length
    );
    setCurrentDrink(drinksJson.drinksJson[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinksJson[randomDrinkIndex].ingredients);

    // reset the wrong guesses the user made when on a new drink
    setCorrectTemp(null);
    setCorrectSyrup(null);
    setCorrectMilk(null);
    setCorrectBlended(null);
  };

  const onCheckAnswer = () => {
    console.log("True Recipe:", trueRecipe);
    console.log("Inputs:", inputs);

    setCorrectTemp(trueRecipe.temp === inputs["temperature"]);
    setCorrectSyrup(trueRecipe.syrup === inputs["syrup"]);
    setCorrectMilk(trueRecipe.milk === inputs["milk"]);
    setCorrectBlended(trueRecipe.blended === inputs["blended"]);
  };

  return (
    <div>
      <div className="title-container">
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <h2>Hi, I'd like to order a: </h2>

      {/* see the new drink */}
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={getNextDrink}
        >
          🔄
        </button>
      </div>

      <form className="container"></form>

      <BaristaForm
        correctTemp={correctTemp}
        correctSyrup={correctSyrup}
        correctMilk={correctMilk}
        correctBlended={correctBlended}
        inputs={inputs}
        setInputs={setInputs}
      />

      <button type="submit" className="buttonSubmit" onClick={onCheckAnswer}>
        Check Answer
      </button>
    </div>
  );
}

export default App;