import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} py-4`}>
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500">© 2024 Mijn Recepten. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
