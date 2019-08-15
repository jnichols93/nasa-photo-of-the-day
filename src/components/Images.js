import React from "react";




const Images = props => {
    console.log(props);
    return (
      
       <div>

        <img className="Moon-image" alt="Moon and saturn" src={props.test.hdurl}  />
             

       </div>
       

      
    );
  };

 export default Images
