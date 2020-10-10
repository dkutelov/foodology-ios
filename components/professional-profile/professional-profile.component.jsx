import { useState } from 'react';
import styles from './professional-profile.module.css';

const ProfessionalProfile = ({ professionalData }) => {
    const {
        name: { title, first, last },
    } = professionalData;
    const [isMoreVisible, setIsMoreVisible] = useState(false);
    return (
        <div>
            <div className='flex'>
                <div className='w-1/4'>
                    <div
                        className='mt-1 h-48 bg-cover rounded-lg text-center overflow-hidden'
                        style={{
                            backgroundImage: `url('${professionalData.picture.large}')`,
                        }}
                    ></div>
                </div>
                <div className='w-2/4 px-5'>
                    <h2>
                        <span className='text-2xl text-gray-900 text-semibold'>{`${title} ${first} ${last}`}</span>
                        <span className={styles.flag__wrap}>
                            <i
                                className={`${styles.country__flag} ${styles.country_big} rounded-sm`}
                                style={{
                                    backgroundImage: `url('/flags/nl-flag.svg')`,
                                }}
                            ></i>
                        </span>
                        <span>ico</span>
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                    <p className='text-gray-700 text-sm'>
                        Location:
                        {` ${professionalData.location.city}, ${professionalData.location.state}, ${professionalData.location.country}`}
                    </p>
                </div>
                <div className='w1/4'>
                    <button className='bg-accentLight hover:bg-accentDark text-white font-semibold py-2 px-4 rounded w-full mb-2'>
                        Book
                    </button>
                    <button className='bg-transparent text-grayDark font-semibold border-grayDark hover:text-white hover:bg-greyLight py-2 px-4 border hover:border-greyLight rounded w-full'>
                        Message
                    </button>
                </div>
            </div>
            <div className='border border-sectionBorderColor bg-sectionBackgroundColor rounded shadow-sm my-5 p-8 bg-white'>
                <h2 className='text-2xl mb-4 trackling-wider'>
                    About the specialist
                </h2>
                <div
                    className={isMoreVisible ? styles.extended : styles.cropped}
                >
                    <p className='mb-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam earum iusto ad velit, doloribus illum veniam
                        quaerat optio nemo reiciendis saepe rem ex assumenda
                        nihil culpa, eos tempore dolorum eligendi.
                    </p>
                    <p className='mb-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam earum iusto ad velit, doloribus illum veniam
                        quaerat optio nemo reiciendis saepe rem ex assumenda
                        nihil culpa, eos tempore dolorum eligendi.
                    </p>
                    <p className='mb-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam earum iusto ad velit, doloribus illum veniam
                        quaerat optio nemo reiciendis saepe rem ex assumenda
                        nihil culpa, eos tempore dolorum eligendi.
                    </p>
                    <p className='mb-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam earum iusto ad velit, doloribus illum veniam
                        quaerat optio nemo reiciendis saepe rem ex assumenda
                        nihil culpa, eos tempore dolorum eligendi.
                    </p>
                </div>
                <div className='pt-3'>
                    <span
                        className='text-primary'
                        style={{ cursor: 'pointer' }}
                        onClick={() => setIsMoreVisible(!isMoreVisible)}
                    >
                        {isMoreVisible ? 'Hide' : 'Read more'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalProfile;
