//
//  IntExtension.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import Foundation

extension Int {
    func formatToCurrencyString() -> String {
        let currencyFormatter = NumberFormatter()
        currencyFormatter.numberStyle = .currency
        currencyFormatter.maximumFractionDigits = 0
        currencyFormatter.locale = Locale(identifier: "bg_BG")
        
        let nsnum = NSNumber(integerLiteral: self / 100)
        return currencyFormatter.string(from: nsnum) ?? "$$$"
    }
}
