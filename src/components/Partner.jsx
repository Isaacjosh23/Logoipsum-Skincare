import Container from "./reusables/Container";
import Section from "./reusables/Section";

const Partner = () => {
  return (
    <Section className="py-40">
      <Container className="flex flex-col items-center gap-12 md:flex-row md:relative">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h3 className="text-3xl text-black font-bold lg:text-4xl xl:text-5xl">
            Partner with skincare brands and agencies for transformative beauty
            solutions.
          </h3>

          <p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            Partner with leading skincare brands and agencies to achieve
            transformative results.
          </p>
        </div>

        <div className="hidden md:block md:w-[129rem] xl:w-[160rem] md:h-[25rem] md:bg-transparent"></div>

        <div className="grid grid-cols-2 gap-8 justify-center items-center md:flex md:absolute md:top-0 md:left-[39.5%] lg:left-[41%]">
          <div className="flex flex-col gap-2.5 items-center justify-center bg-black w-[11rem] lg:w-[15rem] xl:w-[20rem] xl:h-[30rem] lg:h-[28rem] h-[24rem] p-8">
            <img
              src="../images/products/product-1.png"
              alt="product images"
              className="w-20 lg:w-28 xl:w-[7.5rem]"
            />
            <p className="text-white">Chiva v1</p>
          </div>

          <div className="flex flex-col gap-2.5 items-center justify-center bg-black w-[11rem] lg:w-[15rem] xl:w-[20rem] xl:h-[30rem] lg:h-[28rem] h-[24rem] p-8">
            <img
              src="../images/products/product-2.png"
              alt="product images"
              className="w-20 lg:w-28 xl:w-[7.5rem]"
            />
            <p className="text-white">Chiva v2</p>
          </div>

          <div className="flex flex-col gap-2.5 items-center justify-center bg-black w-[11rem] lg:w-[15rem] xl:w-[20rem] xl:h-[30rem] lg:h-[28rem] h-[24rem] p-8">
            <img
              src="../images/products/product-4.png"
              alt="product images"
              className="w-20 lg:w-28 xl:w-[7.5rem]"
            />
            <p className="text-white">Chiva v3</p>
          </div>

          <div className="flex flex-col gap-2.5 items-center justify-center bg-black w-[11rem] lg:w-[15rem] xl:w-[20rem] xl:h-[30rem] lg:h-[28rem] h-[24rem] p-8">
            <img
              src="../images/products/product-3.png"
              alt="product images"
              className="w-20 lg:w-28 xl:w-[7.5rem]"
            />
            <p className="text-white">Chiva v4</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Partner;
