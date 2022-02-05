//
//  MealManager.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import Foundation

class MealManager {
    static let shared = MealManager()
    let meals: [Meal]
    
    private init() {
        meals = mockData
    }
    
    func getMealsByType(mealType: Meal.MealType ) -> [Meal] {
        return meals.filter {
            $0.eMealType == mealType
        }
    }
}
