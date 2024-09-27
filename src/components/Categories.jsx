import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { ListGroup } from 'reactstrap'
import { allCategories } from '../utils'

export const Categories = ({selectedCateg,setSelectedCateg}) => {
  return (
    <div className="d-flex justify-content-center">
      <ListGroup horizontal>
        {allCategories().map((item)=>
          <ListGroupItem className={selectedCateg==item?'categ bg-warning text-light':"categ bg-light text-warning"} key={item} onClick={()=>setSelectedCateg(item)} >
            {item}
          </ListGroupItem>)}
      </ListGroup>
    </div>
  )
}
