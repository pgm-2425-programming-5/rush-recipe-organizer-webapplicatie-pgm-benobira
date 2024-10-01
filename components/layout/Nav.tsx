import Link from 'next/link';
import Button from '../common/Button';

export default function Nav() {
  return (
    <nav className="py-2">
      <Link href="/receptenpagina">
        <Button>Naar Receptenpagina</Button>
      </Link>
    </nav>
  );
}
