import React from "react";
import mandir from "../assets/mandir.png";
import "./shopShow.css";
import { Text,Flex } from "@chakra-ui/react";
function ImageInstance() {
  return (
    <div>
      <img src={mandir} alt="mandir" />
    </div>
  );  

}

   const shopShow=()=>{
    return (
      <div className="image-container">
        {Array(60)
          .fill()
          .map((_, index) => (
            <div>
              <ImageInstance key={index} />
              <Flex color="white" display="flex" flexDirection="column">
                <Text fontWeight="70" fontSize={20}>
                  jai swaminarayan
                </Text>
                <h2 class="listing-heading">name</h2>
              <p class="listing-location">housingLocation city ,housingLocation.state </p>
              <a href= "#" > Learn More </a> 
              </Flex>
            </div>
          ))}
      </div>
    );
   } 
   export default shopShow;