import "./section1.css";

const Section1 = () => {
  return (
    <div className="white__container">
      <div className="section1__container">
        <div className="section1__left">
          <div className="left__img">
            <img
              className="section1__img"
              src="https://images.unsplash.com/photo-1519778119555-47f8a0929968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="img"
            />
          </div>
        </div>
        <div className="section1__right">
          <div className="right__text__container">
            <h2 className="section1__head">
              We Are The Leader
              <br /> in The Architecture
            </h2>
            <p className="section1__text">
              For each project we establish relationships with partners who we
              know
              <br />
              will help us create added value for your project. As well as
              bringing
              <br />
              together the public and private sectors, we make
              sector-overarching
              <br />
              links to gather knowledge and to learn from each other.
            </p>
            <div className="section1__info">
              <div className="info__item">
                <h2 className="lgText">850</h2>
                <span className="smText">
                  Property
                  <br />
                  Build
                </span>
              </div>
              <div className="info__item">
                <h2 className="lgText">24</h2>
                <span className="smText">
                  Awards
                  <br />
                  Gained
                </span>
              </div>
              <div className="info__item">
                <h2 className="lgText">15</h2>
                <span className="smText">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
