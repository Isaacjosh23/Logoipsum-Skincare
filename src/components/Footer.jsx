import { forwardRef } from "react";
import Button from "./reusables/Button";
import Container from "./reusables/Container";
import Section from "./reusables/Section";

const Footer = forwardRef((_, externalRef) => {
  return (
    <Section ref={externalRef} className="py-20">
      <Container className="flex flex-col gap-11">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-black text-3xl font-semibold">Newsletter</h3>

            <p className="text-xl">
              Connect with like-minded designers. Access free Q&A’s and
              resources.
            </p>
          </div>

          <form className="flex items-end justify-between gap-4">
            <div className="flex flex-col items-stretch gap-8">
              <input
                type="text"
                placeholder="Email"
                className="py-4 border! border-black rounded-2xl px-12 w-full lg:w-[36rem] text-[1.2rem] text-black"
              />
              <input
                type="text"
                placeholder="Name"
                className="py-4 border! border-black rounded-2xl px-12 w-full lg:w-[36rem] text-[1.2rem] text-black"
              />
            </div>

            <Button className="bg-black smooth-trans text-white py-4 px-8 rounded-2xl font-bold text-[1.2rem] news-cta cursor-pointer">
              Send
            </Button>
          </form>
        </div>

        <footer className="flex justify-between">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-7">
            <li>
              <a href="#" className="md:text-xl hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="md:text-xl hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="flex flex-col md:flex-row gap-3 md:gap-7">
            <li>
              <a href="#" className="md:text-xl hover:underline">
                Newsletter
              </a>
            </li>

            <li>
              <a href="#" className="md:text-xl hover:underline">
                Menu
              </a>
            </li>

            <li>
              <a href="#" className="md:text-xl hover:underline">
                Tag
              </a>
            </li>

            <li>
              <a href="#" className="md:text-xl hover:underline">
                Blogs
              </a>
            </li>
          </ul>

          <ul className="flex flex-col md:flex-row gap-3 md:gap-7">
            <li>
              <a href="#" className="md:text-xl hover:underline">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="#" className="md:text-xl hover:underline">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="md:text-xl hover:underline">
                X
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </Section>
  );
});

export default Footer;
