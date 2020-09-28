import Layout from '../components/layout/layout.component';
import CategoriesList from '../components/home-categories/categories-list/categories-list.component';
import { getCategoriesData } from '../lib/categories';

export default function Home({ categories }) {
    return (
        <Layout>
            <CategoriesList categories={categories} />
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
