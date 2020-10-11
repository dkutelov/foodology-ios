import CategoryItem from '../category-item/category-item.component';
import styles from './categories-list.module.css';

const CategoriesList = ({ categories }) => {
    const mainCategories = new Set(categories.map((category) => category.main));

    return (
        <div className={styles.category_list}>
            {Array.from(mainCategories).map((mainCategory) => {
                const subCategories = categories.filter(
                    (category) => category.main === mainCategory
                );
                return (
                    <div
                        className={styles.category_list__item}
                        key={mainCategory}
                    >
                        <div>
                            <h3 className='text-center uppercase text-2xl text-semibold pt-6 pb-3'>
                                {mainCategory}
                            </h3>
                            <div className={styles.subcategory_list__wrap}>
                                {subCategories.map((subcategory) => (
                                    <CategoryItem
                                        subcategory={subcategory}
                                        key={subcategory.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoriesList;
