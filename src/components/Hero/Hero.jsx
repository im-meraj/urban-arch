import './hero.css';

const Hero = () => {
    return (
      <section className="hero__container">
        <div className="hero__text__container">
          <h1 className="hero__heading-primary">
            We Believe in <br />
            Great Architecture
          </h1>
          <p className="hero__heading-secondary">
            One of the most trusted marketplace of
            <br /> Architecture & Design in India
          </p>
          <button className="btn btn-primary">View Project</button>
        </div>
        <div className="hero__image__container">
          <img
            src="https://res.cloudinary.com/immeraj/image/upload/v1645103329/banner_nauaiv.png"
            alt=""
            className="hero__image"
          />
        </div>
      </section>
    );
}

export default Hero;
