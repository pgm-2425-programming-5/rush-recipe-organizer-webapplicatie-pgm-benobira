import styles from './styles/Header.module.css';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={`${styles.header} py-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <h1 className="text-3xl font-bold text-gray-900 cursor-pointer">
            Mijn Recepten
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
}