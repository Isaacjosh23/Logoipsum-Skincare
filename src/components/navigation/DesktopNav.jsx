import { useState } from "react";

const DesktopNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggleNav = () => {
    setNavIsOpen((open) => !open);
  };

  const handleOverlay = () => {
    setNavIsOpen(false);
    console.log("clicked");
  };

  // const handleNavClick = (e, callback) => {
  //   e.preventDefault();
  //   setNavIsOpen(false);
  //   callback();
  // };

  return (
    <>
      {navIsOpen && (
        <nav className="main-nav absolute md:flex justify-center top-0 left-[40%] nav-position w-[65%] h-screen invisible opacity-0 pointer-events-none bg-white z-[40] pt-24 hidden">
          <ul className="flex flex-col items-center h-screen pr-[10%]!">
            <li className="p-4">
              <a
                href="#"
                className="text-[1.6rem] text-black font-bold hover:underline smooth-trans"
              >
                Home
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.6rem] text-black font-bold hover:underline smooth-trans"
              >
                Partner
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.6rem] text-black font-bold hover:underline smooth-trans"
              >
                Collections
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-[1.6rem] text-black font-bold hover:underline smooth-trans"
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

      <div className="w-[3rem] h-[3rem] bg-transparent"></div>

      <button
        className={`absolute top-[2rem] left-[82.4%] cursor-pointer z-[40] hidden md:block ${
          navIsOpen ? "text-black!" : "text-white"
        }`}
        onClick={handleToggleNav}
      >
        {navIsOpen ? (
          <ion-icon name="close" className="w-12 h-12"></ion-icon>
        ) : (
          <ion-icon name="menu" className="w-12 h-12"></ion-icon>
        )}
      </button>
    </>
  );
};

export default DesktopNav;
