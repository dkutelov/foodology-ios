import Link from 'next/link';

const CategoryItem = ({ subcategory }) => {
    return (
        <div className='w-1/3 mb-2'>
            <Link href={`/listing/${subcategory.id}`}>
                <a>
                    <div className='mx-1 border border-sectionBorderColor rounded overflow-hidden shadow-sm hover:border-primary hover:shadow-lg'>
                        <div className='px-12 pt-6 pb-6'>
                            <div className='font-bold text-center'>
                                {subcategory.name}
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default CategoryItem;
