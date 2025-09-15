import Button from "./reusables/Button";
import Container from "./reusables/Container";
import Section from "./reusables/Section";

const Hero = () => {
  return (
    <Section className="py-20">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:items-start gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-[2.5rem] leading-[3rem] font-bold text-[#121212] lg:text-[3rem] lg:leading-[3.8rem]">
                Achieve glowing skin with innovative products and trusted
                brands.
              </h1>

              <p className="text-[1.2rem] lg:text-[1.4rem]">
                Crafting exceptional skincare solutions, enhancing your beauty
                and well-being.
              </p>
            </div>

            <Button className="underline hover:no-underline active:no-underline py-4 px-8 cursor-pointer text-[#121212] font-bold text-xl lg:text-[1.4rem]">
              Shop Now
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <div>
              <img
                src="../images/sponsors/macos.png"
                alt="sponsors logo"
                className="w-20"
              />
            </div>

            <div>
              <img
                src="../images/sponsors/sky-q.png"
                alt="sponsors logo"
                className="w-20"
              />
            </div>

            <div>
              <img
                src="../images/sponsors/g-pay.png"
                alt="sponsors logo"
                className="w-20"
              />
            </div>

            <div>
              <img
                src="../images/sponsors/disc.png"
                alt="sponsors logo"
                className="w-20"
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src="../images/Hero-img.png"
            alt="Hero Image"
            className="md:hidden"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
