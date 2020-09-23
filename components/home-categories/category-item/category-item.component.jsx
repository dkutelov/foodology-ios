import Link from 'next/link';

const CategoryItem = ({ category }) => {
    return (
        <div className='w-1/3 my-2'>
            <Link href={`/listing/${category.id}`}>
                <a>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
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
