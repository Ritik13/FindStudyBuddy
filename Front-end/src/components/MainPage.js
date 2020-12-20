import React from "react";
import SingleItem from "./SingleItem";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import demoData from '../modules/demoData'
import { useState } from "react"


export default function MainPage() {


  const [view, setview] = useState({});
  const [search, setsearchFor] = useState();

  const filterByCus = (e) => {
    e.preventDefault();
    let k = document.getElementById('searchFor').value;
    setsearchFor({
      search : k
    })
  }


  const handleView = (id) => {
    let out = demoData.filter(item => {
      return item.id == id;
    })
    setview({
      product: out
    })
  }



  return (
    <div className="container-fluid main-app-container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar filterByCus={filterByCus} />
        </div>
        <div className="col-md-4">
          <SingleItem list={demoData} handle={handleView} searchThem={search} />{" "}
        </div>
        <div className="col-md-6">
          {
            (view.product) ? <Detail product={view.product[0]} /> : <div class="alert alert-info" role="alert">
            Select any Add
          </div>

            // (view.product.length > 0) ? <Detail /> : "No product" 
          }
        </div>
      </div>
    </div>
  );
}
