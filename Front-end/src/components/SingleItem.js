import { isDate } from "moment";
import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function SingleItem(props) {


  const searchItemWithTags = ((props) => {
    let idArray = [];
    let finalFiltered = [];
    if (props.searchThem === undefined) {
    } else {
      let searchIt = props.searchThem.search;
      let productList = props.list;
      productList.map(item => {
        for (let i = 0; i < item.tags.length; i++) {
          if (item.tags[i] == searchIt) {
            idArray.push(item.id)
          }
        }
      })

      if (idArray.length > 0) {
        for (let i = 0; i < idArray.length; i++) {
          let fi = props.list.find(item => {
            return item.id === idArray[i];
          })
          finalFiltered.push(fi);
        }
      }


      return finalFiltered;

    }

  })(props);
  if (searchItemWithTags && searchItemWithTags != "") {
    return (
      searchItemWithTags.map((item, index) => {
        return (
          <div className="container SingleItemContainer" key={item.id}>
            <div className="row">
              <div className="col-md-4 col-sm-4 leftCol">
                <h6>{item.time}</h6>
              </div>
              <div className="col-md-4 col-sm-4 "></div>
              <div className="col-md-4 col-sm-4  rightCol">
                <h6>
                  <span className="">{item.date}</span>
                </h6>
              </div>
            </div>
            <div className="row content-para">
              <p>
                {item.description.substring(0, 80) + "..."}
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 py3">
                <ul className="tagList">
                  {
                    item.tags.map(tag => {
                      return (
                        <li className="tagCloud" id={tag}>{tag}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-info" onClick={() => props.handle(item.id)}>View More</button>
          </div>
        )
      })
    );
  }
  else {

    return (
      props.list.map((item, index) => {
        return (
          <div className="container SingleItemContainer" key={item.id}>
            <div className="row">
              <div className="col-md-4 col-sm-4 leftCol">
                <h6>{item.time}</h6>
              </div>
              <div className="col-md-4 col-sm-4 "></div>
              <div className="col-md-4 col-sm-4  rightCol">
                <h6>
                  <span className="">{item.date}</span>
                </h6>
              </div>
            </div>
            <div className="row content-para">
              <p>
                {item.description.substring(0, 80) + "..."}
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 py3">
                <ul className="tagList">
                  {
                    item.tags.map(tag => {
                      return (
                        <li className="tagCloud" id={tag}>{tag}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-info" onClick={() => props.handle(item.id)}>View More</button>
          </div>
        )
      })
    );
  }
}
