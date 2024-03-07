"use server"

import { SHEETDB_ENDPOINT } from "./constants"

export const handlesubmission = async(name:string,email:string,number:string,message:string)=>{
    
   try{ 
    console.log("called ",SHEETDB_ENDPOINT);
    const response = await fetch(SHEETDB_ENDPOINT, {
       
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
    
  });

  if(!response.ok){
    throw new Error("Failed to Store");
  }

  const data = await response.json();
        console.log(data);
        return data;

}
catch (error) {
    console.error('Submission failed:', error);
    throw error;
}

    
}
