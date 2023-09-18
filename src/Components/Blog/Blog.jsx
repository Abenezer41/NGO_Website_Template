import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog_container">
      <div className="blog_top">
        <h2>Our Blog</h2>
        <p>Take a look at what people say about US</p>
      </div>
      <div className="blog_bottom">
        <div className="blog_left">
            <div className="blog_imgs1"></div>
          <span>By Admin | August 10 2018</span>
          <h4>Methods of Recuirtments</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            justo neque, aliquet sit amet elementum vel, vehicula eget eros.
            Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            Praesent.
          </p>
          <span>Read more </span>
        </div>
        <div className="blog_center">
        <div className="blog_imgs2"></div>
          <span>By Admin | August 10 2018</span>
          <h4>Methods of Recuirtments</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            justo neque, aliquet sit amet elementum vel, vehicula eget eros.
            Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            Praesent.
          </p>
          <span>Read more </span>
        </div>
        <div className="blog_right">
        <div className="blog_imgs3"></div>
          <span>By Admin | August 10 2018</span>
          <h4>Methods of Recuirtments</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            justo neque, aliquet sit amet elementum vel, vehicula eget eros.
            Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            Praesent.
          </p>
          <span>Read more </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
