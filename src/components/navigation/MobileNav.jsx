import { useState } from "react";

const MobileNav = ({
  onHomeClick,
  onPartnerClick,
  onCollectionClick,
  onReachClick,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggleNav = () => {
    setNavIsOpen((open) => !open);
  };

  const handleOverlay = () => {
    setNavIsOpen(false);
    console.log("clicked");
  };

  const handleNavClick = (e, callback) => {
    e.preventDefault();
    setNavIsOpen(false);
    callback();
  };

  return (
    <>
      {navIsOpen && (
        <nav className="main-nav absolute flex justify-center top-0 left-[40%] nav-position w-full h-screen invisible opacity-0 pointer-events-none bg-white z-[40] pt-24 md:hidden">
          <ul className="flex flex-col items-center h-screen">
            <li className="p-4">
              <a
                href="#"
                className="text-[1.5rem] text-black font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onHomeClick)}
              >
                Home
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.5rem] text-black font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onPartnerClick)}
              >
                Partner
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.5rem] text-black font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onCollectionClick)}
              >
                Collections
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.5rem] text-black font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onReachClick)}
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
      )}

      {navIsOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-[35] backdrop-blur-[3px]"
          onClick={handleOverlay}
        ></div>
      )}

      <button
        className="cursor-pointer z-[40] md:hidden"
        onClick={handleToggleNav}
      >
        {navIsOpen ? (
          <ion-icon name="close" className="w-12 h-12 text-black"></ion-icon>
        ) : (
          <ion-icon name="menu" className="w-12 h-12 text-black"></ion-icon>
        )}
      </button>
    </>
  );
};

export default MobileNav;
