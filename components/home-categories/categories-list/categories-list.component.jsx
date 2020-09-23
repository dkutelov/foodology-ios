import CategoryItem from '../category-item/category-item.component';

const CategoriesList = ({ categories }) => {
    return (
        <div className='flex flex-wrap my-4'>
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

export default CategoriesList;
