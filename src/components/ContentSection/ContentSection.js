import React from 'react';
import rightImage from "../../images/carring.jpg";
import leftImage from "../../images/Jar.jpg"

function ContentSection() {
  return (
    <section className="container-fluid my-2">
      <div className="row">
       
        <div className="col-md-8">
        <h1 style={{ display: "flex", alignItems: "center", color:"#B55246" }}>
          What is Lorem Ipsum?
        </h1>
        <p className="text-start">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <ul  style={{ paddingLeft: "2rem" }} className="list-unstyled text-start" >
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
          </ul>
        </div>

      
        <div className="col-md-4 d-flex justify-content-end">
          <img 
            src={rightImage}
            alt="RightImage" 
            className="img-fluid" 
            style={{ maxWidth: "100%", height: "70%" }} 
          />
        </div>
      </div>
      <div className="row">
      
        <div className="col-md-4">
          <img 
            src={leftImage}
            alt="LeftImage" 
            className="img-fluid" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
        </div>

        <div className="col-md-8">
          <h1 style={{ display: "flex", alignItems: "center", color:"#B55246" }}>
            What is Lorem Ipsum?
          </h1>
          <p className="text-start">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <ul className="list-unstyled text-start" style={{ paddingLeft: "2rem" }}>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
            <li>&#8226; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;

