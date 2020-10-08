import CategoryItem from '../category-item/category-item.component';

const CategoriesList = ({ categories }) => {
    return (
        <section className='container mx-auto text-primaryText antialiased'>
            <h3 className='text-center uppercase text-4xl text-semibold pt-16 pb-6'>
                Categories
            </h3>
            <div className='flex flex-wrap my-4'>
                {categories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </div>
        </section>
    );
};

export default CategoriesList;
