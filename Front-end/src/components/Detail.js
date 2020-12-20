import React from "react";

export default function Detail(props) {
  // console.log("props of deatak", props);
  return (
    <div className="container from-left">
      <h1>{props.product.heading}</h1>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          {props.product.date}
        </div>
        <div className="col-md-6 col-sm-6">
          {props.product.time}
        </div>
      </div>
      <p>{props.product.description} </p>
      <div>
        <ul className="tagList">
          {
            props.product.tags.map(tag => {
              return (
                <li className="tagCloud" id={tag}>{tag}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <i class="far fa-bookmark"></i>
          <i class="fas fa-bookmark"></i>
        </div>
        <div className="col-sm-6">
          <span>Send Message :        </span>
          <button className="btn btn-success cn"><i class="fab fa-whatsapp "></i></button>
          <button className="btn btn-danger cn"><i class="fas fa-envelope "></i></button>
          <button className="btn btn-danger cn"><i class="far fa-calendar-alt"></i></button>
        </div>
      </div>
    </div>
  );
}
