import Head from 'next/head';
import layoutStyles from './layout.module.css';
import styles from '../../styles/Home.module.css';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

export default function Layout({ children, home }) {
    return (
        <>
            <Header />
            <main className={layoutStyles.main_wrapper}>{children}</main>
            <Footer />
        </>
    );
}
