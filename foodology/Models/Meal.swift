//
//  Meal.swift
//  foodology
//
//  Created by Dariy Kutelov on 4.02.22.
//

import Foundation

struct Meal {
    let price: Int
    let title: String
    let description: String
    let images: [String]
    let calories: [String]
    let ingredients: [String]
    var mealType: String
    var mealCategory: String
    
    
    init(price: Int,
         description: String,
         title: String,
         images: [String],
         calories: [String],
         ingredients: [String],
         mealType: String,
         mealCategory: String) {
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
        self.mealType =  data["mealType"] as? String ?? ""
        self.mealCategory =  data["mealCategory"] as? String ?? ""
    }
}

extension Meal {
    enum MealType: String {
        case Starter
        case Main
        case Dessert
        case unknown
    }
    
    var eMealType: MealType {
        get {
            return Meal.MealType(rawValue: self.mealType) ?? .unknown
        }
    }
}

extension Meal {
    enum Category: String {
        case MeatDishes = "Meat Dishes"
        case ChickenDishes = "Chicken dishes"
        case SeaFood = "Sea Food"
        case unknown
    }
    
    var eCategory: Category {
        get {
            return Meal.Category(rawValue: self.mealCategory) ?? .unknown
        }
    }
}
