//
//  HomeViewController.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import UIKit

class HomeViewController: UIViewController {
    var meals = [Meal]()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        meals = mockData
    }
    
}
