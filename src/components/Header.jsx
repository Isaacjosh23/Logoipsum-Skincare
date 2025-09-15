import MobileNav from "./navigation/MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between container relative nav-open py-8!">
      <div>
        <a href="#">
          <img src="../images/Logo.png" alt="Company Logo" className="w-48" />
        </a>
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
