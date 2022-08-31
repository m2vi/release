import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a className={pathname === '/' ? 'active' : ''}>Release-Titelgenerator</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
