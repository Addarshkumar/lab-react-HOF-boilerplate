import React, { Component } from 'react'

export default class Progression2 extends Component {
    render() {
      const {data}=this.props
    return (
      <div
      style={{
        border:"1px dashed black"
      }}>
     <h1>Progression 2</h1>
     {data.map((item) => (
          <p key={item.id}>

           <div style={{display:"flex",justifyContent:"center"}}>  
            <div style={{width:"100px"}}>
            <span>id: {item.id}</span>
            </div >
            <div style={{width:"100px"}}>
            <span>name: {item.name}</span> 
            </div>
            <div style={{width:"200px"}}>
            <span>user_type: {item.user_type}</span> 
            </div></div>
         
          </p>
        ))}
      </div>
    )
  }
}
