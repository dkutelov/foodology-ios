import Link from 'next/link';

const CategoryItem = ({ category }) => {
    return (
        <div className='w-1/3 my-2'>
            <Link href={`/listing/${category.id}`}>
                <a>
                    <div className='mx-1 border border-primary rounded overflow-hidden shadow hover:bg-primary'>
                        <div className='px-12 py-8'>
                            <div className='font-bold text-center'>
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
