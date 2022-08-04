import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="w-screen">
      <nav className="flex justify-between items-center flex-wrap bg-teal-500 p-4">
        <Logo />
        <Nav />
      </nav>
    </header>
  );
}

export default Header;
