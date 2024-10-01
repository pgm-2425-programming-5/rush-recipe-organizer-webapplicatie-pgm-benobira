'use client';
import AddRecipe from '../../../components/forms/AddRecipe';
import RecipeCard from '../../../components/ui/RecipeCard';
import FilterRecipes from '../../../components/ui/FilterRecipes';
import { useState, useEffect } from 'react';

const categories = ['Alle', 'Ontbijt', 'Lunch', 'Diner', 'Dessert'];

type Recipe = {
    name: string;
    ingredients: string[];
    instructions: string;
    category: string;
  };

export default function ReceptenPagina() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredCategory, setFilteredCategory] = useState('Alle');

  // Use useEffect to read from localStorage only on the client side
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    setRecipes(savedRecipes);
  }, []);
  
    const handleDelete = (index: number) => {
      const updatedRecipes = recipes.filter((_, i) => i !== index);
      setRecipes(updatedRecipes);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    };
  
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilteredCategory(e.target.value);
    };
  
    const filteredRecipes = filteredCategory === 'Alle' 
      ? recipes 
      : recipes.filter(recipe => recipe.category === filteredCategory);

    return (
        <main className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center">Receptenpagina</h1>
        <AddRecipe />
        
        <FilterRecipes 
                categories={categories} 
                selectedCategory={filteredCategory} 
                onFilterChange={handleFilterChange}
            />

        <div className="mt-8 space-y-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                name={recipe.name}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                category={recipe.category}
                onDelete={() => handleDelete(index)} // Pass delete function
              />
            ))
          ) : (
            <p className="text-center text-gray-700">Geen recepten gevonden. Voeg een nieuw recept toe!</p>
          )}
        </div>
      </main>
    );
}