//
//  Meal.swift
//  foodology
//
//  Created by Dariy Kutelov on 4.02.22.
//

import Foundation

enum MealType: String {
    case Starter
    case Main
    case Dessert
    case unknown
}

enum Category: String {
    case MeatDishes = "Meat Dishes"
    case unknown
}

struct Meal {
    let price: Int
    let title: String
    let description: String
    let images: [String]
    let calories: [String]
    let ingredients: [String]
    let mealType: MealType
    let mealCategory: Category
    
    
    init(price: Int,
         description: String,
         title: String,
         images: [String],
         calories: [String],
         ingredients: [String],
         mealType: MealType,
         mealCategory: Category) {
        self.price = price
        self.title = title
        self.description = description
        self.images = images
        self.calories = calories
        self.ingredients = ingredients
        self.mealType = mealType
        self.mealCategory = mealCategory
    }
    
    //For data from Firestore
    init(data: [String: Any]) {
        self.price = data["price"] as? Int ?? 0
        self.title = data["title"] as? String ?? ""
        self.description = data["description"] as? String ?? ""
        self.images = data["images"] as? [String] ?? [String]()
        self.calories = data["calories"] as? [String] ?? [String]()
        self.ingredients = data["ingredients"] as? [String] ?? [String]()
        self.mealType =  MealType(rawValue: data["type"] as? String ?? "unknown") ?? MealType.unknown
        self.mealCategory = Category(rawValue: data["category"] as? String ?? "unknown") ?? Category.unknown
    }
}
