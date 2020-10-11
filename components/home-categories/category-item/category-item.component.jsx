import Link from 'next/link';
import styles from './category-item.module.css';
const CategoryItem = ({ subcategory }) => {
    return (
        <div className={styles.subcategory_list__item}>
            <Link
                href={`/listing/${subcategory.id}`}
                className={styles.subcategory_list__link}
            >
                <a>{subcategory.name}</a>
            </Link>
        </div>
    );
};

export default CategoryItem;
