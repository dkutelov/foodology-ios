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
    
    // MARK: - Properties
    
    var meals = [Meal]()
    
    // MARK: - Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Today's Meals"
        meals = mockData
        
        setUI()
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

extension HomeViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return meals.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        return UITableViewCell()
    }
    
    
}
