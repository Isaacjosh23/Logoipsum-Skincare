import Header from "./components/Header";
import Hero from "./components/Hero";
import DesktopNav from "./components/navigation/DesktopNav";

const Logoipsum = () => {
  return (
    <div className="md:grid md:grid-cols-[40rem_40rem] xl:grid-cols-[60rem_50rem] lg:grid-cols-[60rem_50rem] md:justify-between nav-open">
      <div className="md:bg-white md:flex md:flex-col">
        <Header />
        <Hero />
      </div>

      <div className="bg-[#121212] hidden px-16 pt-8 pb-28 md:flex flex-col items-center justify-start gap-8 relative overflow-x-hidden">
        <div className="place-self-end">
          <DesktopNav />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/images/Hero-Desktop-img.png"
            alt="Hero image"
            className="hidden md:block md:w-[35rem] lg:w-[40rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Logoipsum;
