const db = require('../db')

const seedProducts = () => db.Promise.map([
  {title: 'Hats',category: ['Clothes','Accessories'], current_price: 16, description: 'Fedora with a feather', availability: true, inventory: 100, promo_id: 1},
  {title: 'Ski Suits',category: ['Athletics', 'Clothes'], current_price: 11, description: 'Full body ski suit', availability: false, inventory: 5, promo_id: 1},
  {title: 'Fanny Pack',category: ['Accessories'], current_price: 12, description: 'Bright neon in all colors', availability: true, inventory: 64, promo_id: 1},
  {title: 'Chuck Taylors',category: ['Clothes','Shoes'], current_price: 15, description: 'A variation on a classsic', availability: false, inventory: 35},
  {title: 'Hairspray',category: ['Beauty'], current_price: 41, description: 'Full of CFCs', availability: true, inventory: 22, promo_id: 2},
  {title: 'Socks',category: ['Clothes'], current_price: 51, description: 'Big wooly socks', availability: true, inventory: 21},
  {title: 'Wigs', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Business in the front, party in the back', availability: false, inventory: 100, promo_id: 2},
  {title: 'Chanel', category: ['Beauty'], current_price: 49, description: 'Chanel loose powder', availability: true, inventory: 100, promo_id: 2},
  {title: 'Cosmetics', category: ['Beauty'], current_price: 31, description: 'Revlon violet pink set', availability: true, inventory: 100, promo_id: 2},
  {title: 'Covergirl', category: ['Beauty'], current_price: 21, description: 'Cosmetics for the young generation', availability: false, inventory: 100, promo_id: 2},
  {title: 'Dior', category: ['Beauty'], current_price: 49, description: 'Luxury for your face', availability: true, inventory: 100, promo_id: 2},
  {title: 'Dolls', category: ['Accessories'], current_price: 9, description: 'For your room', availability: false, inventory: 100, promo_id: 2},
  {title: 'HighHeels', category: ['Shoes'], current_price: 27, description: 'Edge on your heel', availability: true, inventory: 100, promo_id: 2},
  {title: 'PinkSuit', category: ['Accessories', 'Clothes'], current_price: 22, description: 'Everything for your pink day', availability: false, inventory: 100, promo_id: 2},
  {title: 'Technicolor', category: ['Accessories', 'Clothes'], current_price: 31, description: 'Freedom', availability: false, inventory: 100, promo_id: 2},
  {title: 'Sneakers', category: ['Shoes', 'Athletics'], current_price: 62, description: 'Comply with your style', availability: false, inventory: 100, promo_id: 2},
  {title: 'FlyWatch', category: ['Accessories'], current_price: 20, description: 'What time is it now? 19: 08 ! ', availability: false, inventory: 100, promo_id: 2},
  {title: 'ThatWig', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Party people', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training set', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training suit for couple', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
], product => db.model('products').create(product));

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",product_id:5},
 {rating: 1, review_text: "if you have too much extra money ",product_id:1},
 {rating: 5, review_text: "the best!",product_id:2},
 {rating: 2, review_text: "waste of money",product_id:3},
 {rating: 3, review_text: "can be better",product_id:4},
 {rating: 3, review_text: "should be better",product_id:6},
 {rating: 4, review_text: "good price",product_id:7},
 {rating: 4, review_text: "just like description",product_id:1},
 ], review => db.model('reviews').create(review));

 //vcbc db seed
 const seedRecipes = () => db.Promise.map([
  {title: "Vegan Potato Curry", tags: "Indian, Mains", source:'Forks Over Knives, page 3',description:"a vegan take on an old classic", cooktime:"15 minutes", yield: 4, img:'Vegan-Chickpea-Curry-2.jpg', user_id: 1, featured: false},
  {title: "Fetuccine Alfredo", tags: "Italian, Pasta, Chicken", source:'Oh She Glows, page 5',description:"a dairy free pasta dish", cooktime:"2 minutes", yield: 8, img:'1394028690291.jpeg', user_id: 1, featured: false},
  {title: "Green Monster Smoothie", tags: "Smoothies, Breakfast", source:'Http://www.nameofsource.com',description:"quick morning breakfast", cooktime:"8 minutes", yield: 1, img:'Green-Monster-Smoothie-1.jpg', user_id: 1, featured: false},
  {title: "Superhero Salad", tags: "Salads, Mains", source:'https://my.forksmealplanner.com/#!/recipe/1046/superhero-salad',description:"With orange walnut dressing", cooktime:"20 minutes", yield: 4, img:'0628_superfood_salad_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Garbanzo Bolognese", tags: "Pasta, Italian", source:'Forks Over Knives',description:"With linguine pasta", cooktime:"30 minutes", yield: 4, img:'0624_garbanzo_bolognese_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Taco Chili", tags: "Mexican", source:'Forks Over Knives',description:"With potatos", cooktime:"30 minutes", yield: 40, img:'0625_taco_chili_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Quick Three-Fruit Salad", tags: "Dessert", source:'Forks Over Knives',description:"With sliced pears and berries", cooktime:"8 minutes", yield: 4, img:'fruit-salad_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Hearts of Palm \"Crab\" Cakes", tags: "Entree", source:'Forks Over Knives',description:"with steamed potatoes and rémoulade sauce", cooktime:"40 minutes", yield: 4, img:'crab_cakes_03_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Dreamy Chocolate Pudding", tags: "Dessert", source:'Forks Over Knives',description:"a quick, delicious dessert", cooktime:"10 minutes", yield: 4, img:'dreamy_chocolate_gelato_01_thumbnail_xlarge.jpg', user_id: 1, featured: true},
  {title: "Curried Cauliflower Rice Bowl", tags: "Entree", source:'Forks Over Knives',description:"with chickpeas", cooktime:"8 minutes", yield: 1, img:'0626_curried_cauliflower_rice_bowl_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Vegan Potato Curry", tags: "Indian, Mains", source:'Forks Over Knives, page 3',description:"a vegan take on an old classic", cooktime:"15 minutes", yield: 4, img:'Vegan-Chickpea-Curry-2.jpg', user_id: 1, featured: false},
  {title: "Fetuccine Alfredo", tags: "Italian, Pasta, Chicken", source:'Oh She Glows, page 5',description:"a dairy free pasta dish", cooktime:"2 minutes", yield: 8, img:'1394028690291.jpeg', user_id: 1, featured: false},
  {title: "Green Monster Smoothie", tags: "Smoothies, Breakfast", source:'Http://www.nameofsource.com',description:"quick morning breakfast", cooktime:"8 minutes", yield: 1, img:'Green-Monster-Smoothie-1.jpg', user_id: 1, featured: false},
  {title: "Superhero Salad", tags: "Salads, Mains", source:'https://my.forksmealplanner.com/#!/recipe/1046/superhero-salad',description:"With orange walnut dressing", cooktime:"20 minutes", yield: 4, img:'0628_superfood_salad_01_thumbnail_xlarge.jpg', user_id: 1, featured: true},
  {title: "Garbanzo Bolognese", tags: "Pasta, Italian", source:'Forks Over Knives',description:"With linguine pasta", cooktime:"30 minutes", yield: 4, img:'0624_garbanzo_bolognese_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Taco Chili", tags: "Mexican", source:'Forks Over Knives',description:"With potatos", cooktime:"30 minutes", yield: 40, img:'0625_taco_chili_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Quick Three-Fruit Salad", tags: "Dessert", source:'Forks Over Knives',description:"With sliced pears and berries", cooktime:"8 minutes", yield: 4, img:'fruit-salad_thumbnail_xlarge.jpg', user_id: 1, featured: true},
  {title: "Hearts of Palm \"Crab\" Cakes", tags: "Entree", source:'Forks Over Knives',description:"with steamed potatoes and rémoulade sauce", cooktime:"40 minutes", yield: 4, img:'crab_cakes_03_thumbnail_xlarge.jpg', user_id: 1, featured: false},
  {title: "Dreamy Chocolate Pudding", tags: "Dessert", source:'Forks Over Knives',description:"a quick, delicious dessert", cooktime:"10 minutes", yield: 4, img:'dreamy_chocolate_gelato_01_thumbnail_xlarge.jpg', user_id: 1, featured: true},
  {title: "Curried Cauliflower Rice Bowl", tags: "Entree", source:'Forks Over Knives',description:"with chickpeas", cooktime:"8 minutes", yield: 1, img:'0626_curried_cauliflower_rice_bowl_01_thumbnail_xlarge.jpg', user_id: 1, featured: false},

], recipe => db.model('recipes').create(recipe));

const seedIngredients = () => db.Promise.map([
 {quantity: 4, measure: "pc", item: "potatoes", prep: "diced", recipe_id:1},
 {quantity: 1, measure: "pc", item: "yellow onion", prep: "chopped", recipe_id:1},
 {quantity: 3, measure: "cloves", item: "garlic", prep: "minced", recipe_id:1},
 {quantity: 1, measure: "can", item: "diced tomatoes", prep: "none", recipe_id:1}
], ingredient => db.model('ingredients').create(ingredient));

const seedUsers = () => db.Promise.map([
 {firstname: 'Joven', lastname: 'Macaldo', username: 'jmacaldo', password: 'secret', img:'defaultavatar.png'},
 {firstname: 'Martina', lastname: 'Macaldo', username: 'martina', password: 'secret', img:'defaultavatar.png'},
 {firstname: 'Yanek', lastname: 'user', username: 'yanekTheCat', password: 'secret', img:'defaultavatar.png'}

], user => db.model('users').create(user));

const seedComments = () => db.Promise.map([
 {comment: 'this is a test comment', cooktime: 10, recipe_id: 1, user_id: 1},
 {comment: 'Another comment', cooktime: 3, recipe_id: 1, user_id: 1},
 {comment: 'hahah!!', cooktime: 10, recipe_id: 1, user_id: 1},
 {comment: 'with another comment', cooktime: 2, recipe_id: 2, user_id: 1},
 {comment: 'another comment from a different user', cooktime: 2, recipe_id: 1, user_id: 2}
], comment => db.model('comments').create(comment));


 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedProducts)
   .then(products => console.log(`Seeded ${products.length} products OK`))
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedRecipes)
   .then(recipes => console.log(`Seeded ${recipes.length} recipes OK`))
   .then(seedIngredients)
   .then(ingredients => console.log(`Seeded ${ingredients.length} ingredients OK`))
   .then(seedComments)
   .then(comments => console.log(`Seeded ${comments.length} comments OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
