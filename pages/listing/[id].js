import Layout from '../../components/layout/layout.component';
import ListingPreview from '../../components/listing-preview/listing-preview.component';
import {
    getAllCategoriesIds,
    getCategory,
    getProfessionalsForCategory,
} from '../../lib/categories';

export default function ListingPage({ category, professionalsData }) {
    return (
        <Layout>
            <ListingPreview
                category={category}
                professionalsData={professionalsData}
            />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllCategoriesIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = Number(params.id);
    const category = getCategory(id);
    const professionalsData = getProfessionalsForCategory(id) || [];
    return {
        props: {
            category,
            professionalsData,
        },
    };
}
