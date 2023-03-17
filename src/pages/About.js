/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-100 h-full flex flex-col px-10 md:px-40 
            py-40 space-y-6"
      >
        <div>
          <h1 className="font-bold text-[24px] text-center">Our Mission</h1>
          <p>
            Cape Estates Plumbing mission is to provide a professional plumbing
            service. Our team of experienced and skilled plumbers is dedicated
            to providing the highest quality plumbing services to our clients.
            We take pride in our ability to deliver fast and reliable plumbing
            solutions to our customers, ensuring their complete satisfaction.
            Our services include: Residential plumbing Commercial plumbing Leak
            detection Drain cleaning Water heater repair and replacement Faucet
            and toilet repair Sump pump installation and repair And many more!
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[24px] text-center">Our Story</h1>
          <p>
            At Cape Estates Plumbing, we understand the importance of timely and
            efficient service. That's why we are always available 24/7 for
            emergency plumbing services. Our plumbers are equipped with the
            latest tools and technology to quickly diagnose and fix any plumbing
            issue. We believe in providing affordable plumbing services without
            compromising on the quality of our work. Our pricing is transparent
            and reasonable, and we provide free estimates for all of our
            services. At Noel's Plumbing, customer satisfaction is our top
            priority. We work tirelessly to ensure that our clients receive the
            best possible plumbing services and support. If you're in need of a
            reliable plumbing service provider, look no further than Noel's
            Plumbing. Contact us today to schedule a service appointment or to
            receive a free estimate!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
