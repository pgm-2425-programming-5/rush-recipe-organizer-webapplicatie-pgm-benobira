import styles from './styles/AddRecipe.module.css';
import Button from '../common/Button';
import { useState } from 'react';

type RecipeCategory = 'Ontbijt' | 'Lunch' | 'Diner' | 'Dessert';

export default function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState<RecipeCategory>('Ontbijt');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map((item) => item.trim()), // Convert to array
      instructions,
      category,
    };

    // Retrieve existing recipes from local storage or initialize an empty array
    const existingRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    // Save the new recipe
    existingRecipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(existingRecipes));

    // Clear the form fields after submission
    setName('');
    setIngredients('');
    setInstructions('');
    setCategory('Ontbijt');
    
    // Refresh the page
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.recipeform} + space-y-4 p-4 border rounded-lg shadow-md`}>
      <h2 className="text-2xl font-semibold">Recept Toevoegen</h2>
      
      <div>
        <label className="block text-lg font-medium">Gerechtnaam:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Ingrediënten:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
          rows={3}
          placeholder="Bijv. 3 eieren, 200g bloem"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Bereidingsinstructies:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Categorie:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as RecipeCategory)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="Ontbijt">Ontbijt</option>
          <option value="Lunch">Lunch</option>
          <option value="Diner">Diner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <Button type="submit">
        Voeg Recept Toe
      </Button>
    </form>
  );
}