import Layout from '../../components/layout/layout.component';
import ProfessionalProfile from '../../components/professional-profile/professional-profile.component';
import Calendar from '../../components/calendar/calendar/calendar.component';

import {
    getAllProfessionalsIds,
    getProfessionalData,
} from '../../lib/professionals';
import styles from './professional-pages.module.css';

export default function ProfessionalPage({ professionalData }) {
    return (
        <Layout>
            <div className='bg-backgroundColor'>
                <section className='container mx-auto'>
                    <div className='flex' style={{ marginTop: '340px' }}>
                        <div className={styles.content_top_offset}>
                            <div className='w-2/3'>
                                <ProfessionalProfile
                                    professionalData={professionalData}
                                />

                                <div className='border border border-sectionBorderColor bg-sectionBackgroundColor rounded shadow-sm my-5 p-8 bg-white'>
                                    <h2 className='text-2xl mb-4 trackling-wider'>
                                        Schedule
                                    </h2>
                                    <Calendar
                                        timeTable={professionalData.timeTable}
                                    />
                                </div>
                            </div>
                            <div className='w-1/3 bg-gray-100 p-12 rounded'>
                                schedule
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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
