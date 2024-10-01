import React from "react"
import RecipeChoices from "./RecipeChoices"
import "../App.css"

const BaristaForm = ({
	correctTemp,
	correctSyrup,
	correctMilk,
	correctBlended,
	inputs,
	setInputs,
}) => {
	const ingredients = {
		temperature: ["hot", "lukewarm", "cold"],
		syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
		milk: ["cow", "oat", "goat", "almond", "none"],
		blended: ["yes", "turbo", "no"],
	}

	const getClassName = correct => {
		if (correct === null) return "answer-space"
		return `answer-space ${correct ? "correct" : "wrong"}`
	}

	return (
		<div>
			<div className="mini-container">
				<div className="item">
					<h3>Temperature</h3>
					<div className={getClassName(correctTemp)}>
						{inputs["temperature"]}
					</div>
					<RecipeChoices
						handleChange={e =>
							setInputs(prevState => ({
								...prevState,
								[e.target.name]: e.target.value,
							}))
						}
						label="temperature"
						choices={ingredients["temperature"]}
						checked={inputs["temperature"]}
					/>
				</div>

				<div className="item">
					<h3>Syrup</h3>
					<div className={getClassName(correctSyrup)}>{inputs["syrup"]}</div>
					<RecipeChoices
						handleChange={e =>
							setInputs(prevState => ({
								...prevState,
								[e.target.name]: e.target.value,
							}))
						}
						label="syrup"
						choices={ingredients["syrup"]}
						checked={inputs["syrup"]}
					/>
				</div>

				<div className="item">
					<h3>Milk</h3>
					<div className={getClassName(correctMilk)}>{inputs["milk"]}</div>
					<RecipeChoices
						handleChange={e =>
							setInputs(prevState => ({
								...prevState,
								[e.target.name]: e.target.value,
							}))
						}
						label="milk"
						choices={ingredients["milk"]}
						checked={inputs["milk"]}
					/>
				</div>

				<div className="item">
					<h3>Blended</h3>
					<div className={getClassName(correctBlended)}>
						{inputs["blended"]}
					</div>
					<RecipeChoices
						handleChange={e =>
							setInputs(prevState => ({
								...prevState,
								[e.target.name]: e.target.value,
							}))
						}
						label="blended"
						choices={ingredients["blended"]}
						checked={inputs["blended"]}
					/>
				</div>
			</div>
		</div>
	)
}

export default BaristaForm
