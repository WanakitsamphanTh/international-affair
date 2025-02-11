"use client";

import Flag from "react-world-flags"
import PopUp from "./PopUp";
import React, {useState} from "react";


export default function BlogCard({id, title, date, author, country, profile, content}){
    const [visibleState, setVisibility] = useState(false);
    const PopUpContent = () => (<PopUp title={title} date = {date} author={author} country={country} profile={profile} content={content} visibleState={visibleState} setVisibility={setVisibility}/>);
    //const PopUpContent = () => (<PopUp title={title} profile={profile} content={content}/>);
  
    return (
      <>
        <div key={id} className="col-lg-3">
          <div className="card h-100 w-10 shadow-sm" onClick={() => {setVisibility(!visibleState)}}>
            <img className="card-img-top mw-100 object-fit-cover" src={profile} style = {{
              height: "10em"
            }}/>
            <div className="card-body text-center">
              <h4 className="card-title mb-3 fw-bold">{title}</h4>
              <h6 className="lead"> <Flag code={country} height="14"/> {author}</h6>
            </div>
            <PopUpContent/>
          </div>
        </div>
      </>
    );
  }
  