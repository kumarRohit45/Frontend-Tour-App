import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
 const[readmore,setReadmore] = useState(false);


const description =readmore ? info: `${info.substring(0,200)}....`;

function readmoreHandler(){
    setReadmore(!readmore);
}

    return(
        <div className="card">
            <img className="image" src={image} alt="" />
            <div>
            <div className="tour-details">
            <h3 className="tour-price">$ {price}</h3>
            <h4 className="tour-name">{name}</h4>

         </div>
         <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>{readmore? `Show less` : `Read more`}</span>

         </div>
            </div>
            <button className="remove-btn" onClick={()=> removeTour(id)}>Not Intersted</button>
     

        </div>
    )
}
export default Card;