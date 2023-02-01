import { SiBurgerking } from "react-icons/si";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <SiBurgerking />
        </Link>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Customer Reviews</Link>
        <Link href="/burgers">Burgers</Link>
      </nav>
    </header>
  );
};

export default Header;
