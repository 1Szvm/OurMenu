import React, {useEffect} from 'react'
import { useState } from 'react'
import { data } from '../data'

export const Menus = ({selectedCateg}) => {
  const [menus,setMenus]=useState(null)
  useEffect(()=>{
    setMenus(selectedCateg=="all"? data:data.filter(obj=>obj.category==selectedCateg))
  },[selectedCateg])
  
  return (
    <div className='row d-flex justify-content-center'>
      {menus && menus.map((obj)=>
      <div className='col-md-6' key={obj.id}>
        <div className='row m-2 p-2 rounded border border-3 border-warning'>
          <div className='col'>
              <img className='img-thumbnail' src={"images/"+obj.img} alt="" />
            </div>
            <div className='col'>
              <h5 className='fs-2 text-warning'>{obj.title}</h5>
              <div>{obj.desc}</div>
              <div className='fw-bold fs-4 text-end'>Price:{obj.price}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
