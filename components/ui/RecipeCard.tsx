import React from 'react';

type RecipeProps = {
  name: string;
  ingredients: string[];
  instructions: string;
  category: string;
  onDelete: () => void; // New prop for the delete function
};

// Rewrite the RecipeCard component using the export default function syntax
export default function RecipeCard({
  name,
  ingredients,
  instructions,
  category,
  onDelete,
}: RecipeProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-600 mt-2"><strong>Categorie:</strong> {category}</p>
      <h3 className="mt-4 font-semibold">Ingrediënten:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="mt-4 font-semibold">Bereidingsinstructies:</h3>
      <p className="text-gray-700 mt-2">{instructions}</p>
      <button
        onClick={onDelete}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700"
      >
        Verwijder
      </button>
    </div>
  );
}
