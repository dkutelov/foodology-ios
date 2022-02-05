//
//  ViewController.swift
//  foodology
//
//  Created by Dariy Kutelov on 4.02.22.
//

import UIKit

class ViewController: UIViewController {

    var meals = [Meal]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        meals = mockData
    }


}

