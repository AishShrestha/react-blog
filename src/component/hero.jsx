// component/Hero.jsx
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import { Container } from "../component/index";

export default function Hero() {
  return (
    <section className="w-full py-16 bg-opacity-75">
      <Container>
        <div className="flex flex-wrap items-center justify-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:pr-12 mb-8 md:mb-0 text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              Share Your Story with the World
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Unleash your creativity and voice your thoughts! Start writing and
              sharing blogs effortlessly. Whether it's ideas, experiences, or
              expertise, our platform empowers you to create, connect, and
              inspire.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 h transition"
            >
              Start Blogging Today!
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="Hero Visual"
              className="min-w-fit mx-auto opacity-95 animate-float"
              style={{
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
                width: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
