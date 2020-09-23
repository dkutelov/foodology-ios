import Layout from '../components/layout/layout.component';
import CategoriesList from '../components/home-categories/categories-list/categories-list.component';
import { getCategoriesData } from '../lib/categories';

export default function Home({ categories }) {
    return (
        <Layout>
            <section className='container mx-auto'>
                <h3 className='text-center my-5'>Категории</h3>
                <CategoriesList categories={categories} />
            </section>
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
