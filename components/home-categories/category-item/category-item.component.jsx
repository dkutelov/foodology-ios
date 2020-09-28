import Link from 'next/link';

const CategoryItem = ({ category }) => {
    return (
        <div className='w-1/3 my-2'>
            <Link href={`/listing/${category.id}`}>
                <a>
                    <div className='mx-1 border border-indigo-300 rounded overflow-hidden shadow'>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-center mb-2'>
                                {category.name}
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default CategoryItem;
