"use client"

import React, {useState} from 'react'
import Input from '@/component/input';
import toast from 'react-hot-toast';
import { handlesubmission } from '@/libs/actions';

const page = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const [message,setMessage]=useState("");
 

  const handleSubmit = (e: { preventDefault: any; })=>{
    e.preventDefault();

    const NamePattern= /^.{4,40}$/
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const numberPattern= /^\d{10}$/

    const ValidName=NamePattern.test(name)
    const ValidEmail=emailPattern.test(email)
    const ValidNumber=numberPattern.test(number)

    if(!ValidName){
      toast.error("Name Length should be 4 to 40");
    }
    if(!ValidEmail){
      toast.error("Invalid Email");
    }
    if(!ValidNumber){
      toast.error("Number Should Consist 10 digits")
    }

    if((ValidEmail && ValidName && ValidNumber)){
      handlesubmission(name,email,number,message)
      .then(()=>{
        toast.success("Data Stored");
        setMessage("");
        setEmail("");
        setName("");
        setNumber("");
      })
      
    }
    
  };
    

  return (
    <>

      <div className="fixed left-2 right-2 top-0  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" rounded border-solid border-2 border-black bg-black  mt-1 mb-3 text-center text-2xl font-bold leading-9 tracking-tight text-[#E384FF]">
              CONTACT FORM
            </h2>
          </div>  
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <form className="space-y-6" onSubmit={handleSubmit} >
            <Input 
                id={'name'} 
                name={'name'} 
                type={'text'} 
                placeholder={'Name'} 
                value={name} 
                onChange={(e)=> setName(e.target.value)}
            />

            
            <Input 
                id={'email'} 
                name={'email'} 
                type={'text'} 
                placeholder={'Email Address'} 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
            />

         

            <Input 
                id={'number'} 
                name={'number'} 
                type={'number'} 
                placeholder={'Phone Number'} 
                value={number} 
                onChange={(e)=> setNumber(e.target.value)}
            />
           
            <div>
              <div className="mt-0">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  required
                  className="block pl-2 text-start text-white bg-[black] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 h-20 "   
                  onChange={(e)=> setMessage(e.target.value)}
               />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm border-2 border-black border-solid bg-[#E384FF] text-black hover:bg-black hover:text-white mt-5"
                >
                SEND
              </button>
            </div>
          </form> 
        </div>
      </div>
    </>
  )
}


export default page