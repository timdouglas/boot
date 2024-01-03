import Image from 'next/image';
import styles from '~/styles/Home.module.scss';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useAppDispatch, useAppStore } from '~/logic/hooks/state';
import { setLoading } from '~/logic/slices/app';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p>Stuff goes here...</p>
    </main>
  );
};

export default Home;
