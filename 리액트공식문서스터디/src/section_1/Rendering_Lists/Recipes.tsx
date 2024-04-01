import { recipes } from "./data.js";
type TRecipe = {
  id: string;
  name: string;
  ingredients: string[];
};

function Recipe({ recipe }: { recipe: TRecipe }) {
  const { id, name, ingredients } = recipe;
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
