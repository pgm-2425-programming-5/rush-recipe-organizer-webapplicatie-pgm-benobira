import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">Organiseer je favoriete recepten!</h1>
          <p className="text-xl text-gray-700 mt-4">
            Maak eenvoudig een overzicht van je favoriete gerechten en deel ze met anderen.
          </p>
        </div>
      </div>
    </section>
  );
}