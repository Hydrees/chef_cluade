import React from "react"
//import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Body() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            <form action={addIngredient} className="ingredientForm">
                <input type="text" placeholder="e.g Tomatoes" name="ingredient" aria-label="Add ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="list">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="recipe">
                    <div>
                        <h3>Ready for a recipe ?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>}
            {recipeShown && <section>
                <h3>Chef Claude Recommends:</h3>
                <article>
                    <p>Based on the ingredients you have available, I would recommend:</p>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>2 noodles</li>
                        <li>1 bowl of water</li>
                        <li>pinch of salf</li>
                        <li>2 eggs</li>
                    </ul>
                </article>
            </section>}
        </main>
    )
}