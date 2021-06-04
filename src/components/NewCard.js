import React from 'react'
import "./NewCard.css";

const NewCard = (prop) => {
    return (
        <>
             <div className="flexcontainer">
                 <div className="leftitem">
                       <img className="leftitemimg" src={prop.ssrc} alt="Img Error" />
                 </div>
                 <div className="rightitem">
                 
                        <h1 className="cardheading"> {prop.title}</h1>
                         <h5 className="aboutcard">About :</h5>
                        <p className="cardinformation">{prop.about}</p>
                        <span><h5 className="durationcard">Duration : </h5>
                        <h5  class="days">{prop.duration}</h5></span>
                        
                
                 </div>
                </div>



        </>
    )
}

export default NewCard


//.......................... Card.js data with (prop).............................
{/* <>
<div className="container">
<div className="cards">
    <div className="card">
        <img src={prop.ssrc} alt="my pic" className="card_img" />
        <div className="card_info" >
            <span className="card_category"> {prop.sname} </span>
            <h3 className="card_title"> {prop.title} </h3>
            <a href={prop.links} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>
    </div>
</div>
</div>
   
</> */}
