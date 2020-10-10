import Head from 'next/head';
import layoutStyles from './layout.module.css';
import styles from '../../styles/Home.module.css';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

export default function Layout({ children, home }) {
    return (
        <div className='text-primaryText'>
            <Header />
            <main className='bg-backgroundColor pb-64'>{children}</main>
            <Footer />
        </div>
    );
}
