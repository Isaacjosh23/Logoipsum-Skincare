import Container from "./reusables/Container";
import Section from "./reusables/Section";

const Collection = () => {
  return (
    <Section className="pt-14 pb-20">
      <Container className="flex flex-col gap-24 lg:grid lg:grid-cols-1">
        <div className="flex flex-col gap-12 md:gap-20 items-center md:flex-row">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl text-black font-semibold md:text-3xl">
              The Skin Care Collection
            </h3>

            <p className="flex flex-col gap-6 md:text-[1.2rem]">
              <span className="inline-block">
                Partner with skincare brands and agencies to achieve remarkable
                outcomes. By building strong collaborations, we can utilize
                exclusive insights and resources that elevate our joint
                initiatives. This teamwork not only broadens our audience but
                also guarantees that our strategies align with the latest
                skincare trends and consumer preferences.
              </span>

              <span className="inline-block">
                Alongside our collaborations with skincare brands, we also
                connect with various agencies that excel in areas like digital
                marketing, public relations, and creative design. These
                alliances provide us with a treasure trove of expertise,
                allowing us to develop campaigns that truly resonate with our
                target demographic. Together, we can innovate and redefine the
                possibilities, ultimately driving success for everyone involved.
              </span>
            </p>
          </div>

          <div>
            <img
              src="../images/collection/collection-1.png"
              alt="collection display"
              className="xl:w-[180rem]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-12 md:gap-20 items-center md:flex-row-reverse">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl text-black font-semibold md:text-3xl">
              The Skin Elixir
            </h3>

            <p className="flex flex-col gap-6 md:text-[1.2rem] ">
              <span className="inline-block">
                Join forces with skincare brands and agencies to achieve
                remarkable outcomes. By building strong collaborations, we can
                utilize unique insights and resources that elevate our combined
                efforts. This partnership not only broadens our reach but also
                ensures our strategies are in tune with the latest beauty trends
                and consumer preferences.
              </span>

              <span className="inline-block">
                Alongside our work with skincare brands, we also collaborate
                with agencies that excel in areas like digital marketing, public
                relations, and creative design. These alliances provide us with
                a treasure trove of expertise, allowing us to develop campaigns
                that truly connect with our audience. Together, we can innovate
                and redefine the possibilities, ultimately driving success for
                everyone involved.
              </span>
            </p>
          </div>

          <div>
            <img
              src="../images/collection/collection-2.png"
              alt="collection display"
              className="xl:w-[180rem]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Collection;
