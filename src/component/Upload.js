import React from "react";

import axios from "axios";

class Upload extends React.Component {
  state = {
    heading: "",
    content: "",
    imgPrew: null,
    imgPath: null
  };

  subBtn = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatar", this.state.imgPath);
    formData.set("heading", this.state.heading);
    formData.set("content", this.state.content);

    axios
      .post("/api", formData)
      .then(res => console.log("Sucess"))
      .catch(err => console.log(err));
  };

  //Checking Image
  checkMe = e => {
    this.setState({
      imgPath: e.target.files[0],
      imgPrew: URL.createObjectURL(e.target.files[0])
    });
  };

  render() {
    return (
      <div className="bg1">
        <div className="bgline">
          <div className="login">
            <div className="login-wrap">
              <div id="signinbox">
                <form id="signinform">
                  <div className="form-group">
                    <label
                      className="text-white"
                      htmlFor="formGroupExampleInput"
                    >
                      Blog Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={this.state.heading}
                      onChange={this.subBtn}
                      className="form-control"
                      placeholder="Heading input"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="text-white"
                      htmlFor="formGroupExampleInput"
                    >
                      Blog Content
                    </label>
                    <input
                      type="text"
                      name="content"
                      value={this.state.content}
                      onChange={this.subBtn}
                      className="form-control"
                      placeholder="Content input"
                    />
                  </div>
                  <div>
                    <img src={this.state.imgPrew} alt="Alt" />
                    <input type="file" name="avatar" onChange={this.checkMe} />
                  </div>
                  <button
                    type="submit"
                    className="btn submit"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <svg
            width="0"
            height="0"
            display="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <symbol id="logo" viewBox="0 0 138 26" fill="none" stroke="#fff">
              <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z" />
            </symbol>
          </svg>
        </div>
      </div>
    );
  }
}

export default Upload;
