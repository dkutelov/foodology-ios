import styles from './professional-profile.module.css';

const ProfessionalProfile = ({ professionalData }) => {
    const {
        name: { title, first, last },
    } = professionalData;
    return (
        <section className='container mx-auto'>
            <div className='flex my-12'>
                <div className='w-2/3'>
                    <div className='flex'>
                        <div
                            className='w-1/4 h-48 bg-cover rounded text-center overflow-hidden'
                            style={{
                                backgroundImage: `url('${professionalData.picture.large}')`,
                            }}
                        ></div>
                        <div className='w-3/4 p-5'>
                            <h2>{`${title} ${first} ${last}`}</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tenetur quam eligendi nemo
                                deleniti accusantium est ipsum corrupti itaque
                                maxime, recusandae repellendus cupiditate
                                molestiae animi numquam inventore suscipit, iste
                                illum id?
                            </p>
                        </div>
                    </div>
                    <div className='border-solid border-2 border-gray-100 rounded my-5 p-5'>
                        <h2 className='text-center'>За специалиста</h2>
                        <div>
                            <p className='my-5'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam earum iusto ad velit,
                                doloribus illum veniam quaerat optio nemo
                                reiciendis saepe rem ex assumenda nihil culpa,
                                eos tempore dolorum eligendi.
                            </p>
                            <p className='my-5'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam earum iusto ad velit,
                                doloribus illum veniam quaerat optio nemo
                                reiciendis saepe rem ex assumenda nihil culpa,
                                eos tempore dolorum eligendi.
                            </p>
                            <p className='my-5'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam earum iusto ad velit,
                                doloribus illum veniam quaerat optio nemo
                                reiciendis saepe rem ex assumenda nihil culpa,
                                eos tempore dolorum eligendi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 bg-gray-100'>schedule</div>
            </div>
        </section>
    );
};

export default ProfessionalProfile;
