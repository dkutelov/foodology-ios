//
//  MealTableViewCell.swift
//  foodology
//
//  Created by Dariy Kutelov on 5.02.22.
//

import UIKit
import SDWebImage

class MealTableViewCell: UITableViewCell {
    
    //Mark: - IBOutlets
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var mealImageView: UIImageView!
    @IBOutlet weak var priceLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        mealImageView.layer.cornerRadius = 14
        mealImageView.layer.masksToBounds = true
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func configureCell(meal: Meal) {
            titleLabel.text = meal.title
            priceLabel.text = meal.price.formatToCurrencyString()
        
           if let imageUrl = meal.images.first,
               let url = URL(string: imageUrl) {
                   mealImageView.sd_imageIndicator = SDWebImageActivityIndicator.medium
                   mealImageView.sd_setImage(with: url, placeholderImage: UIImage(named: ImageName.placehoderImage))
            }
        }

}
