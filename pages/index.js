import Layout from '../components/layout/layout.component';
import CategoriesList from '../components/home-categories/categories-list/categories-list.component';
import { getCategoriesData } from '../lib/categories';

export default function Home({ categories }) {
    return (
        <Layout>
            <div className='bg-backgroundColor'>
                <div
                    className='bg-white container mx-auto rounded p-4'
                    style={{
                        position: 'relative',
                        top: '-64px',
                    }}
                >
                    <CategoriesList categories={categories} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const categories = getCategoriesData();
    return {
        props: {
            categories,
        },
    };
}
