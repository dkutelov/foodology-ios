//
//  MockData.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import Foundation

let mockData: [Meal] = [
    Meal(price: 1000,
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         title: "Chicken Parmesan",
         images: ["https://www.thespruceeats.com/thmb/O5C7qM1tGedpRAa3dRN59UHjyz0=/2560x1920/smart/filters:no_upscale()/easy-chicken-fried-rice-recipe-2098604-hero-01-4cc4085b544e45d4a293c4f05e0c985d.jpg", "https://www.cubesnjuliennes.com/wp-content/uploads/2019/02/Best-Chicken-Fried-Rice-Recipe-500x500.jpg", "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/05/04111234/chicken-fried-rice-low-res-2.png", "https://www.funfoodfrolic.com/wp-content/uploads/2021/10/Fried-Rice-Blog-Thumbnail.jpg"],
         calories: ["70g chicken, 150g rice"],
         ingredients: ["Chicken", "Rice", "Vegetables", "Salt"],
         mealType: "Main",
         mealCategory: "Chicken dishes"),
    Meal(price: 800,
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         title: "Prawn Cocktail",
         images: ["https://realfood.tesco.com/media/images/RFO-1400x919-PrawnCocktail-e1b7d9be-cc59-4f9d-a10e-dbf495ac6e2f-0-1400x919.jpg", "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2011/12/seafood-cocktail.jpg", "https://static.toiimg.com/thumb/54807119.cms?width=1200&height=900", "https://img.taste.com.au/NDoI3i5h/taste/2018/10/proscuitto-prawn-cocktail-with-spicy-sauce_1980x1320-142189-1.jpg"],
         calories: ["50g prawn, 30g bacon", "40g shallots"],
         ingredients: ["100g streaky bacon rashers, cut into strips",
                       "2 avocados, finely chopped",
                       "2 tbsp pickled jalapenos, finely chopped",
                       "2 French shallots, finely chopped",
                       "1 tbsp olive oil"],
         mealType: "Starter",
         mealCategory: "Sea Food"),
    Meal(price: 1500,
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         title: "Lemon Garlic Herb Grilled Salmon",
         images: ["https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-lemon-herb-salmon-7.jpg", "https://www.spendwithpennies.com/wp-content/uploads/2019/05/Grilled-Salmon-SpendWithPennies-6.jpg", "https://fitfoodiefinds.com/wp-content/uploads/2021/04/grilled-salmon-11-sq.jpg", "https://healthyrecipesblogs.com/wp-content/uploads/2019/07/grilled-salmon-featured-2021.jpg"],
         calories: ["50g prawn, 30g bacon", "40g shallots"],
         ingredients: ["100g streaky bacon rashers, cut into strips",
                       "2 avocados, finely chopped",
                       "2 tbsp pickled jalapenos, finely chopped",
                       "2 French shallots, finely chopped",
                       "1 tbsp olive oil"],
         mealType: "Main",
         mealCategory: "Fish")
    
]
