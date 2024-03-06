
import React, { ChangeEventHandler } from 'react'

interface prop{
    id:string,
    name:string,
    type:string,
    placeholder:string,
    value: number | string,
    onChange:ChangeEventHandler<HTMLInputElement>
}

const input = ({id,name,type,placeholder,value,onChange}:prop) => {
  return (
    <div>
    <div className="mt-0">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="block pl-2 text-white bg-[black] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"   
     />
    </div>
  </div>
  )
}

export default input