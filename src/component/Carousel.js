import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image/1.jpg" alt="Los Angeles"  height="600px" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="image/2.jpg" alt="Chicago" height="600px" width="100%" />
            </div>
            <div className="carousel-item">
              <img src="image/3.jpg" alt="New York"   height="600px" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
