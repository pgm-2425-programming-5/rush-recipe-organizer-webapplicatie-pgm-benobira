import React from 'react';

type FilterRecipesProps = {
    categories: string[];
    selectedCategory: string;
    onFilterChange: (category: string) => void;
};

export default function FilterRecipes({ categories, selectedCategory, onFilterChange }: FilterRecipesProps) {
    return (
        <div className="mt-8">
          <label className="block text-lg font-medium">Filter op Categorie:</label>
          <select
            value={selectedCategory}
            onChange={(e) => onFilterChange(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      );
}
