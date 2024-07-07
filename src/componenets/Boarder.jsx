import React from 'react'
import Square from './Square'
import { useState } from 'react'

function Boarder() {
  const [data, setdata] = useState(Array(9).fill(null));
  const [state, setstate] = useState(true);
    const iswinner=()=>{
      const container=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
      ]
      for(let i of container){
        const [a,b,c]=i;
        if(data[a]!=null && data[a]===data[b] && data[a]===data[c]){
          return data[a];
        }
      };
      return false;
    }

    const isdraw=()=>{
       for(let i of data){
        if(i==null){
          return false;
        }
       }
       return true;
    }
     
    const reset=()=>{
      const d=Array(9).fill(null);
      setdata(d);
    }

  const handleChange = (index) => {
       const copy=[...data];
       if(state===true){
        copy[index]='x';
        setdata(copy);
        setstate(false);
       }
       else{
        copy[index]='0';
        setdata(copy);
        setstate(true);
       }
  }

  const winner=iswinner();
  const draw=isdraw();
  return (
    <div className='border-container'>
       {draw ? (
        <div className='winner-message'>
        <h2>Oops! game draw</h2>
        <button onClick={reset}>play again</button>
        </div>
       ) : (
        <>
      {winner ? (
        <div className='winner-message'>
        <h2>Congratulations! {winner} won the game!</h2>
        <button onClick={reset}>play again</button>
        </div>
      )  : (
      <>
      <div className='title-container'>Tic-tac-Toe-Game</div>
      <div className='border-row'>
        <Square onClick={() => handleChange(0)} val={data[0]} />
        <Square onClick={() => handleChange(1)} val={data[1]} />
        <Square onClick={() => handleChange(2)} val={data[2]} />
      </div>
      <div className='border-row'>
        <Square onClick={() => handleChange(3)} val={data[3]} />
        <Square onClick={() => handleChange(4)} val={data[4]} />
        <Square onClick={() => handleChange(5)} val={data[5]} />
      </div>
      <div className='border-row'>
        <Square onClick={() => handleChange(6)} val={data[6]} />
        <Square onClick={() => handleChange(7)} val={data[7]} />
        <Square onClick={() => handleChange(8)} val={data[8]} />
      </div>
      </>
     )}
     </>
       )}
       
    </div>
  )
}


export default Boarder