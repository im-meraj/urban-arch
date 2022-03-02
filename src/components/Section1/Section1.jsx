import './section1.css';

const Section1 = () => {
    return (
      <>
        <section className="section1">
          <div className="img__container">
            <img
              src="https://images.unsplash.com/photo-1519778119555-47f8a0929968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="right__container">
            <div className="text__container">
              <h2>We Are The Leader in The Architecture</h2>
              <p>
                For each project we establish relationships with partners who we
                know will help us create added value for your project. As well
                as bringing together the public and private sectors, we make
                sector-overarching links to gather knowledge and to learn from
                each other.
              </p>
              <div className="section1__info">
                <div className="section1__info__item">
                  <h5>850</h5>
                  <p>
                    Properties
                    <br />
                    Built
                  </p>
                </div>
                <div className="section1__info__item">
                  <h5>24</h5>
                  <p>
                    Awards
                    <br />
                    Won
                  </p>
                </div>
                <div className="section1__info__item">
                  <h5>12</h5>
                  <p>
                    Years
                    <br />
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Section1;
