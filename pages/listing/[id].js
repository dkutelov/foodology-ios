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
            <div className='bg-backgroundColor'>
                <div className='container  mx-auto'>
                    <div className='pt-16'>
                        <h2 className='text-center text-4xl text-gray-900 text-semibold mb-12'>
                            Specialists in {category.name}
                        </h2>

                        <ListingPreview
                            category={category}
                            professionalsData={professionalsData}
                        />
                    </div>
                </div>
            </div>
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
