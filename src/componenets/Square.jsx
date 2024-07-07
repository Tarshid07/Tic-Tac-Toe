import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} style={{cursor:"pointer",border:"1px solid",height:"100px",width:"100%",justifyContent:"center",alignItems:"center",display:"flex"}} 
    className='square-box'>
       <h5>{props.val}</h5>
    </div>
  )
}

export default Square