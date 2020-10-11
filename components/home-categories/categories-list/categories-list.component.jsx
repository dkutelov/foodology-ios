import CategoryItem from '../category-item/category-item.component';

const CategoriesList = ({ categories }) => {
    const mainCategories = new Set(categories.map((category) => category.main));

    return Array.from(mainCategories).map((mainCategory) => {
        const subCategories = categories.filter(
            (category) => category.main === mainCategory
        );
        return (
            <div
                className='text-primaryText antialiased pt-6'
                key={mainCategory}
            >
                <h3 className='text-center uppercase text-2xl text-semibold pt-6 pb-3'>
                    {mainCategory}
                </h3>
                <div className='flex flex-wrap my-4'>
                    {subCategories.map((subcategory) => (
                        <CategoryItem
                            subcategory={subcategory}
                            key={subcategory.id}
                        />
                    ))}
                </div>
            </div>
        );
    });
};

export default CategoriesList;
