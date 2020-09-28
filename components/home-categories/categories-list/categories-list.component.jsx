import CategoryItem from '../category-item/category-item.component';

const CategoriesList = ({ categories }) => {
    return (
        <section className='container mx-auto'>
            <h3 className='text-center text-lg text-bold my-5'>Категории</h3>
            <div className='flex flex-wrap my-4'>
                {categories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </div>
        </section>
    );
};

export default CategoriesList;
