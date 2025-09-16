import MobileNav from "./navigation/MobileNav";

const Header = ({
  onHomeClick,
  onPartnerClick,
  onCollectionClick,
  onReachClick,
}) => {
  return (
    <header className="flex items-center justify-between container relative nav-open py-8!">
      <div>
        <a href="#">
          <img src="../images/Logo.png" alt="Company Logo" className="w-48" />
        </a>
      </div>

      <MobileNav
        onHomeClick={onHomeClick}
        onPartnerClick={onPartnerClick}
        onCollectionClick={onCollectionClick}
        onReachClick={onReachClick}
      />
    </header>
  );
};

export default Header;
