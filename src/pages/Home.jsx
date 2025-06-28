
import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce.",
    image: "src/pages/spaghetti.jpg"
  },
  {
    id: "2",
    title: "Chicken Teriyaki",
    description: "Sweet and savory grilled chicken with teriyaki glaze.",
    image: "src/pages/Chicken-teriyaki.jpeg"
  },
  {
    id: "3",
    title: "Paneer Butter Masala",
    description: "Rich and creamy North Indian curry with paneer.",
    image: "src/pages/Paneer Butter Masala.jpg"
  },
  {
    id: "4",
    title: "Avocado Toast",
    description: "Quick breakfast with creamy avocado on toasted bread.",
    image: "src/pages/Avocado Toast.jpg"
  },
  {
    id: "5",
    title: "Grilled Salmon",
    description: "Healthy salmon grilled to perfection with herbs.",
    image: "src/pages/grilled salmon.jpg"
  },
  {
    id: "6",
    title: "Veggie Stir Fry",
    description: "Colorful mix of vegetables stir-fried with soy sauce.",
    image: "src/pages/Veggie Stir Fry.jpeg"
  },
  {
    id: "7",
    title: "Vegetable Biryani",
    description: "A fragrant and flavorful rice dish with mixed vegetables.",
    image: "src/pages/easy-vegetable-biryani.jpg"
  },
  {
    id: "8",
    title: "Creamy Mushroom Pasta",
    description:"A rich and creamy pasta dish with sautéed mushrooms.",
    image: "src/pages/mushroom-linguine-close.jpg"
  },
  {
    id: "9",
    title: "Classic Margherita Pizza",
    description: "Italian pizza topped with tomato, mozzarella, and basil.",
    image: "src/pages/pizza.jpeg"
  },
  {
    id: "10",
    title: "Chana Masala",
    description: "Spicy and tangy chickpea curry from North India.",
    image: "src/pages/chana.jpeg"
  },
  {
    id: "11",
    title: "Berry Smoothie Bowl",
    description: "A refreshing breakfast bowl made with blended berries.",
    image: "src/pages/berry.jpg"
  },
  {
    id: "12",
    title: "Garlic Butter Shrimp",
    description: "Juicy shrimp tossed in garlic butter sauce.",
    image: "src/pages/images.jpeg"
  },
  {
    id: "13",
    title: "Butter Chicken",
    description: "A creamy, mildly spiced North Indian chicken curry.",
    image: "src/pages/Butter-Chicken.jpg"
  },
  {
    id: "14",
    title: "Aloo Gobi",
    description: "A dry curry made with potatoes and cauliflower.",
    image: "src/pages/aloo-gobi-recipe.jpg"
  },
  {
    id: "15",
    title: "Palak Paneer",
    description: "Spinach and cottage cheese curry, healthy and creamy.",
    image: "src/pages/Palak-paneer-7-edited.jpg"
  },
  {
    id: "16",
    title: "Chole (Chickpea Curry)",
    description: "A hearty North Indian chickpea curry.",
    image: "src/pages/Punjabi-Chole-Masala-480x270.jpg"
  },
  {
    id: "17",
    title: "Masala Dosa",
    description: "Crispy rice crepes filled with spiced potato filling.",
    image: "src/pages/Mysore-masala-dosa-recipe@palates-desire.jpg"
  },
  {
    id: "18",
    title: "Banana Pancakes",
    description: "Fluffy pancakes made with ripe bananas and a hint of vanilla.",
    image: "src/pages/20334-banana-pancakes-i-DDMFS-4x3-9f291f03044247d48c9ec26917952402.jpg"
  },
  {
    id: "19",
    title: "Greek Salad",
    description: "A refreshing salad with feta cheese, olives, and veggies.",
    image: "src/pages/greek salad.jpg"
  },
  {
    id: "20",
    title: "Mac and Cheese",
    description: "Classic creamy macaroni with cheesy sauce.",
    image: "src/pages/mac and cheese.jpg"
  },
  {
    id: "21",
    title: "Lemonade",
    description: "Cool and tangy homemade lemonade.",
    image: "src/pages/lemonade.jpeg"
  },
  {
    id: "22",
    title: "Chocolate Mug Cake",
    description: "Quick microwave mug cake for a chocolate craving fix.",
    image: "src/pages/mug cake.jpg"
  },
  {
    id: "23",
    title: "Chicken Quesadillas",
    description: "Crispy tortillas filled with cheesy, spicy chicken.",
    image: "src/pages/quesadillas.jpeg"
  },
  {
    id: "24",
    title: "Tacos al Pastor",
    description: "Marinated pork tacos with pineapple and onion.",
    image: "src/pages/Classic-Tacos-Al-Pastor_Square-1.jpg"
  },
  {
    id: "25",
    title: "Guacamole",
    description: "Classic avocado dip with lime and onion.",
    image: "src/pages/guac.jpeg"
  },
  {
    id: "26",
    title: "Mexican Rice",
    description: "Fluffy rice cooked with tomatoes, garlic, and spices.",
    image: "src/pages/mex.jpg"
  },
  {
    id: "27",
    title: "Churros",
    description: "Fried dough pastries coated with cinnamon sugar.",
    image: "src/pages/churros.jpeg"
  }
];

export default function Home() {
  return (
    <div className="container">
      <h2 className="section-title">Featured Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-card-body">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
