import React from "react";
import {Image} from 'semantic-ui-react'



const Images = props => {
    console.log(props);
    return (
      
       <div>

        <Image className="Moon-image" alt="Moon and saturn" src={props.test.hdurl} fluid  />
             

       </div>
       

      
    );
  };

 export default Images
