import React from "react";

const Food = () => {
  return (
    <>
      <section id="food">
        <h2>Types of food</h2>
        <div className="food-container container">
          <div className="food-type fruite">
            <div className="img-container">
              <img
                decoding="async"
                src="https://i.postimg.cc/yxThVPXk/food1.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>fruite</h3>
                <a
                  href="#"
                  className="btn btn-primary"
                  target="blank"
                  rel="nofollow noopener"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type vegetable">
            <div className="img-container">
              <img
                decoding="async"
                src="https://i.postimg.cc/Nffm6Rkk/food2.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>vegetable</h3>
                <a
                  href="#"
                  className="btn btn-primary"
                  target="blank"
                  rel="nofollow noopener"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img
                decoding="async"
                src="https://i.postimg.cc/76ZwsPsd/food3.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>grin</h3>
                <a
                  href="#"
                  className="btn btn-primary"
                  target="blank"
                  rel="nofollow noopener"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
