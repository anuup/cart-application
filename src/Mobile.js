import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {mobData} from "./Data"
function Mobile() {
    const [item, setItem]=useState(mobData)
    const decQty=(id)=>{

alert("Are You Sure...?")
const newItem= item.map((items)=>items.id===id && items.qty>1?{...items,qty:items.qty-1}:items)
setItem(newItem);
    }

    const incQty=(id)=>{

        alert("Are you Sure....?")
        const newItem= item.map((items)=>items.id===id?{...items,qty:items.qty+1}:items)
setItem(newItem);
            }
  return (
    <div>
<h2><b>Premium products only for you....!</b></h2>
{item.map((items)=>(

<div className='d-inline-flex' key={items.id}>

    <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{items.model}</Card.Title>
        <Card.Text>
          {items.desc}
        </Card.Text>
        <h5>{items.Price}</h5>
        <h5>{items.qty}</h5>
        <Button variant="primary">Add To Cart</Button>
        <br></br> <br></br>
        <p>
     QTY: 
     <Button onClick={()=>decQty(items.id)} className='m-1'>-</Button>
     1
     <Button onClick={()=>incQty(items.id)} className='m-1'>+</Button>

        </p>
      </Card.Body>
    </Card>

</div>


))}


    </div>
  )
}

export default Mobile