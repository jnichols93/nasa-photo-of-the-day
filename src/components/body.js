import React, {useEffect, useState} from "react";

import axios from "axios";

import Image from "./Images";

 


export default function  Body() {
    const [spaceImage, setSpaceImage] = useState([]);


// use Effect

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=zocLXAmxDhk20goWCEhlCKeS5j14SRcqdEzYt6wi`)
      .then(response => {
        const test = response.data;
        console.log("Response", test);
        setSpaceImage(test);
      })
  }, []);


  
  return (
    <div className="container">

    <h1>{spaceImage.title}</h1>
    <div> {spaceImage.date}</div>

    <Image test = {spaceImage}/> 
    <section className ="bottom-content">
     <p> {spaceImage.explanation}</p> 
    <div> {spaceImage.media_type}</div> 
    <div> {spaceImage.service_version}</div> 
    </section>
  </div>
  );
}