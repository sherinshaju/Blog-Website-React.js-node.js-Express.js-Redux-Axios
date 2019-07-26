import React from "react";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.blogData);
    axios("/api")
      .then(res => {
        this.props.dispatch({
          type: "blogData",
          payload: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Carousel />
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-4 text-center">
              <h2>My Blog</h2>
            </div>
            <div className="col col-xs-12">
              <div className="blog-grids">
                {this.props.blogData.map((blog, index) => (
                  <div className="grid" key={blog.id}>
                    <div className="entry-media">
                      <img
                        src={process.env.PUBLIC_URL + "/image/" + blog.image}
                        alt=""
                      />
                    </div>
                    <div className="entry-body">
                      <span className="cat">By Admin</span>
                      <h3>{blog.blogheading}</h3>
                      <p>{blog.blogdata}</p>
                      <div className="read-more-date">
                        <h5>Read More..</h5>

                        <span className="date">3 Hours ago</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function ExporteDefault(state) {
  return {
    blogData: state.blogData
  };
}

export default connect(ExporteDefault)(Home);
