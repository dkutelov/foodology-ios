import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './home-search.module.css';

const searchData = [
    { id: 1, text: 'panic attack', subcategoryId: 12 },
    { id: 2, text: 'panic attack type 1', subcategoryId: 13 },
    { id: 3, text: 'panic attack type 2', subcategoryId: 14 },
    { id: 4, text: 'panic attack type 3', subcategoryId: 15 },
    { id: 5, text: 'life coaching', subcategoryId: 1 },
    { id: 6, text: 'life coaching 1', subcategoryId: 2 },
    { id: 7, text: 'life coaching 2', subcategoryId: 3 },
];

const HomeSearch = () => {
    let [searchTerm, setsSarchTerm] = useState('');
    let [predefSearches, setPredefSearches] = useState([]);

    useEffect(() => {
        const currentSearches = searchData.filter(
            ({ text }) =>
                searchTerm && text.startsWith(searchTerm.toLowerCase())
        );
        setPredefSearches(currentSearches);
        return () => {
            setPredefSearches([]);
        };
    }, [searchTerm]);

    const handleInputChange = (e) => setsSarchTerm(e.target.value);

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchWrapperInner}>
                <input
                    className={styles.searchInput}
                    type='text'
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder='What bothers you?'
                />
                <button className='bg-primary hover:bg-secondary text-white py-2 px-2 mr-2 text-sm'>
                    Explore
                </button>
            </div>
            {predefSearches.length > 0 && (
                <div>
                    <ul class={styles.predefDropdown}>
                        {predefSearches.map(({ id, text, subcategoryId }) => (
                            <li key={id} className={styles.searchLink}>
                                <Link
                                    href={`/listing/${subcategoryId}`}
                                    className={styles.searchLink}
                                >
                                    <a>{text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomeSearch;
