"use server"

import { SHEETDB_ENDPOINT } from "./constants"

export const handlesubmission = async(name:string,email:string,number:string,message:string)=>{
    
    console.log("called ",SHEETDB_ENDPOINT);
    fetch(SHEETDB_ENDPOINT, {
       
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              {
                  'NAME': name,
                  'EMAIL': email,
                  'PHONE': number,
                  'MESSAGE':message
              }
          ]
      })
    
  })
    .then((response) => response.json())
    .then((data) => {
          console.log(data);
     })
}
