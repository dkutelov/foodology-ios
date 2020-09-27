import Layout from '../../components/layout/layout.component';
import ProfessionalProfile from '../../components/professional-profile/professional-profile.component';
import {
    getAllProfessionalsIds,
    getProfessionalData,
} from '../../lib/professionals';

export default function ProfessionalPage({ professionalData }) {
    return (
        <Layout>
            <ProfessionalProfile professionalData={professionalData} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllProfessionalsIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = Number(params.id);
    const professionalData = getProfessionalData(id) || {};
    return {
        props: {
            professionalData,
        },
    };
}
