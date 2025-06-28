
import React from "react";
import { useParams, Link } from "react-router-dom";

const recipeData = {
  "1": {
    title: "Spaghetti Bolognese",
    description: "A hearty Italian pasta dish made with ground beef and tomatoes.",
    ingredients: [
      "200g spaghetti",
      "2 tbsp olive oil",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "400g ground beef",
      "400g canned tomatoes",
      "Salt and pepper to taste",
      "Parmesan cheese for topping"
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "Heat olive oil in a pan and sauté onions and garlic until golden.",
      "Add ground beef and cook until browned.",
      "Stir in tomatoes, salt, and pepper. Simmer for 20 minutes.",
      "Serve sauce over spaghetti and top with Parmesan."
    ]
  },
  "2": {
    title: "Chicken Teriyaki",
    description: "Sweet and savory Japanese chicken served with rice.",
    ingredients: [
      "500g chicken thighs",
      "1/4 cup soy sauce",
      "2 tbsp mirin",
      "2 tbsp sugar",
      "1 tbsp sesame oil",
      "1 tsp grated ginger"
    ],
    instructions: [
      "Mix soy sauce, mirin, sugar, sesame oil, and ginger to make teriyaki sauce.",
      "Marinate chicken in sauce for 30 minutes.",
      "Grill or pan-fry chicken until cooked through.",
      "Simmer remaining sauce until thickened and pour over chicken.",
      "Serve with steamed rice."
    ]
  },
  
  "4": {
    title: "Avocado Toast",
    description: "A simple and nutritious breakfast with ripe avocado.",
    ingredients: [
      "2 slices of whole grain bread",
      "1 ripe avocado",
      "Salt and pepper to taste",
      "Chili flakes (optional)",
      "Lemon juice"
    ],
    instructions: [
      "Toast the bread slices until golden brown.",
      "Mash the avocado with a fork and add lemon juice, salt, and pepper.",
      "Spread the mashed avocado on the toast.",
      "Sprinkle with chili flakes if desired and serve immediately."
    ]
  },
  "5": {
    title: "Grilled Salmon",
    description: "Juicy grilled salmon fillet with lemon and herbs.",
    ingredients: [
      "2 salmon fillets",
      "2 tbsp olive oil",
      "1 lemon, sliced",
      "Salt and pepper to taste",
      "Fresh dill or parsley"
    ],
    instructions: [
      "Preheat the grill to medium-high heat.",
      "Brush the salmon with olive oil and season with salt and pepper.",
      "Place lemon slices and herbs on top of the salmon.",
      "Grill for 4-5 minutes on each side or until fully cooked.",
      "Serve hot with a side of veggies or rice."
    ]
  },
  "6": {
    title: "Veggie Stir Fry",
    description: "Quick and healthy mix of stir-fried vegetables.",
    ingredients: [
      "1 cup broccoli florets",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "1 tsp garlic, minced"
    ],
    instructions: [
      "Heat oil in a large pan or wok.",
      "Add garlic and sauté for 30 seconds.",
      "Add all vegetables and stir fry on high heat for 5-7 minutes.",
      "Pour in soy sauce and cook for another 2 minutes.",
      "Serve hot with noodles or rice."
    ]
  },
  "7":{
    title: "Vegetable Biryani",
    description: "A fragrant and flavorful rice dish with mixed vegetables.",
    ingredients: [
      "1 cup basmati rice",
      "2 cups mixed vegetables (carrots, peas, beans)",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "2 tbsp biryani masala",
      "3 cups water",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Rinse the basmati rice and soak for 30 minutes.",
      "In a pot, heat oil and sauté onions until golden brown.",
      "Add tomatoes and cook until soft. Stir in biryani masala.",
      "Add mixed vegetables and cook for 5 minutes.",
      "Add soaked rice and water. Season with salt.",
      "Cover and cook on low heat until rice is done"
    ]
    },
  "3": {
    title: "Paneer Butter Masala",
    description: "Rich and creamy North Indian curry made with paneer cheese.",
    ingredients: [
      "250g paneer, cubed",
      "2 tbsp butter",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "1 tsp ginger-garlic paste",
      "1/2 cup cream",
      "Spices: turmeric, chili powder, garam masala"
    ],
    instructions: [
      "Heat butter in a pan. Sauté onions until translucent.",
      "Add ginger-garlic paste and cook for a minute.",
      "Add tomato puree and spices. Cook until oil separates.",
      "Add paneer cubes and cook for 5 minutes.",
      "Stir in cream and simmer for 2 more minutes.",
      "Serve hot with naan or rice."
    ]
  },
  "8":{
  title: "Creamy Mushroom Pasta",
  description: "A rich and creamy pasta dish with sautéed mushrooms.",
  ingredients: [
    "200g fettuccine",
    "1 cup mushrooms, sliced",
    "2 tbsp butter",
    "2 garlic cloves, minced",
    "1/2 cup heavy cream",
    "Salt and black pepper to taste",
    "Parsley for garnish"
  ],
  instructions: [
    "Cook the pasta according to package instructions.",
    "Melt butter in a pan and sauté garlic and mushrooms until soft.",
    "Add cream, salt, and pepper. Simmer for 3 minutes.",
    "Toss the pasta in the sauce and cook for another 2 minutes.",
    "Garnish with parsley and serve warm."
  ]
},
"9":{
  title: "Classic Margherita Pizza",
  description: "Italian pizza topped with tomato, mozzarella, and basil.",
  ingredients: [
    "1 pizza base",
    "1/2 cup pizza sauce",
    "1 cup mozzarella cheese, shredded",
    "Fresh basil leaves",
    "1 tbsp olive oil"
  ],
  instructions: [
    "Preheat oven to 220°C (430°F).",
    "Spread pizza sauce evenly on the base.",
    "Sprinkle mozzarella cheese on top.",
    "Add fresh basil leaves and drizzle with olive oil.",
    "Bake for 10-12 minutes until crust is golden and cheese is bubbly."
  ]
},
"10":{
  title: "Chana Masala",
  description: "Spicy and tangy chickpea curry from North India.",
  ingredients: [
    "1 can chickpeas (400g), drained",
    "1 onion, chopped",
    "2 tomatoes, chopped",
    "1 tsp ginger-garlic paste",
    "1 tsp cumin seeds",
    "1 tsp garam masala",
    "Salt to taste",
    "Fresh coriander leaves"
  ],
  instructions: [
    "Heat oil in a pan and sauté cumin seeds and onions.",
    "Add ginger-garlic paste and cook for 1 minute.",
    "Add tomatoes and cook until soft.",
    "Add chickpeas, garam masala, and salt. Simmer for 10 minutes.",
    "Garnish with coriander and serve with rice or roti."
  ]
},
"11":{
  title: "Berry Smoothie Bowl",
  description: "A refreshing breakfast bowl made with blended berries.",
  ingredients: [
    "1 banana",
    "1/2 cup frozen berries",
    "1/4 cup yogurt or plant-based milk",
    "Toppings: granola, chia seeds, sliced fruits"
  ],
  instructions: [
    "Blend banana, berries, and yogurt until smooth.",
    "Pour into a bowl and add toppings as desired.",
    "Serve immediately for a chilled, nutritious start to your day."
  ]
},
"12":{
  title: "Garlic Butter Shrimp",
  description: "Juicy shrimp tossed in garlic butter sauce.",
  ingredients: [
    "250g shrimp, peeled and deveined",
    "3 tbsp butter",
    "4 garlic cloves, minced",
    "1 tbsp lemon juice",
    "Salt and pepper to taste",
    "Fresh parsley"
  ],
  instructions: [
    "Melt butter in a pan and sauté garlic until fragrant.",
    "Add shrimp, season with salt and pepper, and cook until pink.",
    "Add lemon juice and parsley. Toss well.",
    "Serve hot with pasta, rice, or crusty bread."
  ]
},
"13": {
  title: "Butter Chicken",
  description: "A creamy, mildly spiced North Indian chicken curry.",
  ingredients: [
    "500g boneless chicken",
    "1 cup yogurt",
    "2 tbsp ginger-garlic paste",
    "1 tsp red chili powder",
    "1/2 cup cream",
    "2 tbsp butter",
    "2 tomatoes, pureed",
    "Salt, garam masala"
  ],
  instructions: [
    "Marinate chicken in yogurt, ginger-garlic paste, chili, and salt.",
    "Cook the chicken until lightly browned.",
    "In a pan, heat butter and add tomato puree. Cook till thick.",
    "Add cooked chicken and cream. Simmer for 10 mins.",
    "Sprinkle garam masala and serve with naan or rice."
  ]
},
"14":{
  title: "Aloo Gobi",
  description: "A dry curry made with potatoes and cauliflower.",
  ingredients: [
    "2 potatoes, diced",
    "1 small cauliflower, cut into florets",
    "1 onion, chopped",
    "1 tsp turmeric",
    "1 tsp cumin seeds",
    "1 tsp coriander powder",
    "2 tbsp oil",
    "Salt and chili powder"
  ],
  instructions: [
    "Heat oil and add cumin seeds.",
    "Sauté onions, then add turmeric and chili powder.",
    "Add potatoes and cauliflower. Mix well.",
    "Cover and cook on low heat until tender.",
    "Sprinkle coriander powder and serve hot."
  ]
},
"15":{
  title: "Palak Paneer",
  description: "Spinach and cottage cheese curry, healthy and creamy.",
  ingredients: [
    "200g paneer, cubed",
    "2 cups spinach leaves",
    "1 onion",
    "2 garlic cloves",
    "1 green chili",
    "2 tbsp cream",
    "Salt, garam masala"
  ],
  instructions: [
    "Blanch spinach and blend with garlic, onion, and chili.",
    "Sauté the puree in a pan with oil and cook for 5 mins.",
    "Add paneer cubes and cook for 2 mins.",
    "Stir in cream, sprinkle garam masala, and serve with roti."
  ]
},
"16":{
  title: "Chole (Chickpea Curry)",
  description: "A hearty North Indian chickpea curry.",
  ingredients: [
    "2 cups boiled chickpeas",
    "2 onions, chopped",
    "2 tomatoes, pureed",
    "1 tsp ginger-garlic paste",
    "1 tsp cumin, garam masala",
    "Salt, chili powder, turmeric",
    "2 tbsp oil"
  ],
  instructions: [
    "Sauté onions and ginger-garlic paste in oil.",
    "Add tomato puree and spices. Cook until thick.",
    "Add boiled chickpeas and a bit of water.",
    "Simmer for 10-15 minutes. Serve with rice or bhature."
  ]
},
"17":{
  title: "Masala Dosa",
  description: "Crispy rice crepes filled with spiced potato filling.",
  ingredients: [
    "2 cups dosa batter",
    "2 potatoes, boiled and mashed",
    "1 onion, sliced",
    "1 green chili",
    "1/2 tsp mustard seeds",
    "Curry leaves, turmeric, salt",
    "Oil for cooking"
  ],
  instructions: [
    "Prepare potato filling by sautéing onions, chili, and mustard seeds.",
    "Add mashed potatoes, turmeric, and salt. Mix well.",
    "Spread dosa batter on a hot tawa. Cook one side.",
    "Place potato filling inside, fold, and serve hot with chutney."
  ]
},
"18":{
  title: "Banana Pancakes",
  description: "Fluffy pancakes made with ripe bananas and a hint of vanilla.",
  ingredients: [
    "2 ripe bananas",
    "1 cup flour",
    "1 egg",
    "1 tsp baking powder",
    "1/2 cup milk",
    "1 tsp vanilla extract",
    "Butter for cooking"
  ],
  instructions: [
    "Mash bananas in a bowl.",
    "Add egg, milk, and vanilla; mix well.",
    "Stir in flour and baking powder to make a batter.",
    "Heat butter in a pan and pour batter to form pancakes.",
    "Cook both sides until golden brown. Serve with syrup or fruits."
  ]
},
"19":{
  title: "Greek Salad",
  description: "A refreshing salad with feta cheese, olives, and veggies.",
  ingredients: [
    "1 cucumber, chopped",
    "2 tomatoes, chopped",
    "1/2 red onion, sliced",
    "1/4 cup olives",
    "1/4 cup feta cheese, crumbled",
    "2 tbsp olive oil",
    "1 tbsp lemon juice",
    "Salt and oregano"
  ],
  instructions: [
    "Mix cucumber, tomatoes, onion, and olives in a bowl.",
    "Top with feta cheese.",
    "Drizzle olive oil and lemon juice.",
    "Season with salt and oregano. Toss and serve chilled."
  ]
},
"20":{
  title: "Mac and Cheese",
  description: "Classic creamy macaroni with cheesy sauce.",
  ingredients: [
    "1 cup macaroni",
    "1 tbsp butter",
    "1 tbsp flour",
    "1 cup milk",
    "1 cup cheddar cheese, grated",
    "Salt and pepper"
  ],
  instructions: [
    "Boil macaroni as per instructions.",
    "In a separate pan, melt butter and stir in flour.",
    "Gradually add milk, stirring to avoid lumps.",
    "Add cheese, stir till melted, then add salt and pepper.",
    "Mix cooked macaroni with the cheese sauce and serve."
  ]
},
"21":{
  title: "Lemonade",
  description: "Cool and tangy homemade lemonade.",
  ingredients: [
    "1/2 cup lemon juice (about 3 lemons)",
    "1/2 cup sugar",
    "2.5 cups water",
    "Ice cubes",
    "Mint leaves (optional)"
  ],
  instructions: [
    "Mix lemon juice and sugar in a pitcher until sugar dissolves.",
    "Add water and stir well.",
    "Serve with ice cubes and mint leaves if desired."
  ]
},
"22":{
  title: "Chocolate Mug Cake",
  description: "Quick microwave mug cake for a chocolate craving fix.",
  ingredients: [
    "4 tbsp flour",
    "2 tbsp cocoa powder",
    "2 tbsp sugar",
    "1/4 tsp baking powder",
    "3 tbsp milk",
    "2 tbsp oil",
    "1/4 tsp vanilla extract"
  ],
  instructions: [
    "Mix all dry ingredients in a microwave-safe mug.",
    "Add milk, oil, and vanilla. Mix until smooth.",
    "Microwave on high for 1-1.5 minutes.",
    "Let cool slightly and enjoy directly from the mug!"
  ]
},
"23":{
  title: "Chicken Quesadillas",
  description: "Crispy tortillas filled with cheesy, spicy chicken.",
  ingredients: [
    "2 flour tortillas",
    "1 cup cooked, shredded chicken",
    "1/2 cup grated cheese",
    "1/4 cup onions and bell peppers, sautéed",
    "1/2 tsp taco seasoning",
    "Butter or oil for grilling"
  ],
  instructions: [
    "Mix chicken with veggies and seasoning.",
    "Spread the filling and cheese between two tortillas.",
    "Grill on a skillet until golden and cheese melts.",
    "Cut into wedges and serve with salsa or sour cream."
  ]
},
"24":{
  title: "Tacos al Pastor",
  description: "Marinated pork tacos with pineapple and onion.",
  ingredients: [
    "500g pork shoulder, sliced",
    "1/2 cup pineapple juice",
    "2 tbsp vinegar",
    "2 garlic cloves, minced",
    "1 tsp chili powder, cumin",
    "Corn tortillas",
    "Diced pineapple and onion"
  ],
  instructions: [
    "Marinate pork with all spices and juices for 4+ hours.",
    "Grill or pan-fry until slightly charred.",
    "Serve on warm tortillas with pineapple and onion.",
    "Add lime juice and fresh coriander if desired."
  ]
},
"25":{
  title: "Guacamole",
  description: "Classic avocado dip with lime and onion.",
  ingredients: [
    "2 ripe avocados",
    "1/4 onion, finely chopped",
    "1 small tomato, chopped",
    "1 tbsp lime juice",
    "Salt and pepper",
    "Coriander (optional)"
  ],
  instructions: [
    "Scoop out avocado and mash to preferred texture.",
    "Mix in onion, tomato, lime juice, salt, and pepper.",
    "Stir gently and serve with nachos or tacos."
  ]
},
"26":{
  title: "Mexican Rice",
  description: "Fluffy rice cooked with tomatoes, garlic, and spices.",
  ingredients: [
    "1 cup long-grain rice",
    "1 tomato, pureed",
    "1 garlic clove, minced",
    "1/2 onion, chopped",
    "1.5 cups vegetable broth",
    "1 tsp cumin, salt"
  ],
  instructions: [
    "Sauté onion and garlic in oil until soft.",
    "Add rice and toast until slightly golden.",
    "Pour in tomato puree and broth, add cumin and salt.",
    "Cover and simmer on low until rice is cooked.",
    "Fluff and serve as a side with beans or tacos."
  ]
},
"27":{
  title: "Churros",
  description: "Fried dough pastries coated with cinnamon sugar.",
  ingredients: [
    "1 cup water",
    "2 tbsp sugar",
    "2 tbsp butter",
    "1 cup flour",
    "1 egg",
    "1 tsp vanilla",
    "Oil for frying",
    "Cinnamon sugar for coating"
  ],
  instructions: [
    "Boil water, sugar, and butter. Add flour and stir until dough forms.",
    "Cool slightly, then mix in egg and vanilla.",
    "Pipe dough into hot oil and fry until golden.",
    "Roll in cinnamon sugar and serve with chocolate sauce."
  ]
}
};

export default function RecipeDetail() {
  const { id = "1" } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return (
      <div className="container">
        <h2>Recipe Not Found</h2>
        <Link to="/">← Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">← Back to Recipes</Link>
    </div>
  );
}
