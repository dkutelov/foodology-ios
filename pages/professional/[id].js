import Layout from '../../components/layout/layout.component';
import ProfessionalProfile from '../../components/professional-profile/professional-profile.component';
import {
    getAllProfessionalsIds,
    getProfessionalData,
} from '../../lib/professionals';
import styles from './professional-pages.module.css';

export default function ProfessionalPage({ professionalData }) {
    return (
        <Layout>
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
                                <div>Schedule comes here</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iste error saepe eum
                                    numquam? Deleniti quidem voluptas nisi
                                    accusantium sit ducimus dolore neque
                                    perspiciatis commodi, vel doloremque quasi
                                    molestias, consectetur veritatis! Veritatis,
                                    id libero sunt earum voluptas suscipit nisi
                                    laboriosam maxime nobis repellat voluptates
                                    tempore! Eius explicabo quo temporibus
                                    reprehenderit in mollitia architecto sunt
                                    velit recusandae odio veniam, nemo quidem.
                                    Itaque? Voluptas et nostrum natus, magnam
                                    cupiditate amet impedit ipsum excepturi
                                    praesentium non, aspernatur culpa sed
                                    dignissimos blanditiis eligendi tempora
                                    harum corporis ipsam expedita laudantium
                                    doloribus suscipit minima pariatur. Sunt,
                                    incidunt. Autem totam consectetur quae
                                    temporibus eaque odio nisi voluptatem enim
                                    voluptatibus impedit eum ab eius cupiditate
                                    quia provident dolores officiis, sit
                                    incidunt! Repellat velit accusantium
                                    voluptatem quo harum, ut aspernatur.
                                    Exercitationem, iure quibusdam veritatis
                                    commodi quaerat alias quod eligendi
                                    delectus, ab doloremque aperiam, veniam
                                    laboriosam. Cupiditate quos soluta, pariatur
                                    quae harum tenetur tempore accusantium culpa
                                    aut sed quibusdam alias aliquid?
                                </p>
                            </div>
                        </div>
                        <div className='w-1/3 bg-gray-100 p-12 rounded'>
                            schedule
                        </div>
                    </div>
                </div>
            </section>
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
