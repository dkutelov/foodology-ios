//
//  HomeViewController.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import UIKit

class HomeViewController: UIViewController {
    
    // MARK: - IBOutlets
    
    @IBOutlet weak var menuSegmentControl: UISegmentedControl!
    @IBOutlet weak var tableView: UITableView!
    
    // MARK: - Properties
    
    var meals = [Meal]()
    var selectedMeal: Meal?
    
    // MARK: - Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Today's Meals"
        meals = MealManager.shared.getMealsByType(mealType: .Starter)
        
        setUI()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let mealDetailViewController = segue.destination as? MealDetailViewController,
           let meal = selectedMeal {
            mealDetailViewController.meal = meal
        }
    }
    
    // MARK: - IBActions
    
    @IBAction func menuSegmentControlTapped(_ sender: Any) {
        var selectedMealType: Meal.MealType
        
        switch menuSegmentControl.selectedSegmentIndex {
        case 0:
            selectedMealType = .Starter
        case 1:
            selectedMealType = .Main
        case 2:
            selectedMealType = .Dessert
        default:
            selectedMealType = .Starter
            break
        }
        
        meals = MealManager.shared.getMealsByType(mealType: selectedMealType)
        tableView.reloadData()
    }
    
    // MARK: - Private methods
    
    private func setUI() {
        if let font = UIFont(name: "Poppins-Light", size: 16){
            menuSegmentControl.setTitleTextAttributes(
                [NSAttributedString.Key.font: font], for: .normal)
            menuSegmentControl.setTitleTextAttributes(
                [NSAttributedString.Key.foregroundColor: UIColor.white], for: .selected)
        }
 
         //Family: Poppins Font names: ["Poppins-Regular", "Poppins-Light", "Poppins-Bold", "Poppins-ExtraBold"]
    }
}

// MARK: - Table View Data Source

extension HomeViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return meals.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: CellId.MealTableCell, for: indexPath) as? MealTableViewCell else {
            return UITableViewCell()
        }
        
        cell.configureCell(meal: meals[indexPath.row])
        return cell
    }
}

// MARK: - Table View Delegate

extension HomeViewController: UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        selectedMeal = meals[indexPath.row]
        performSegue(withIdentifier: SegueId.MealDetails, sender: self)
    }
}
