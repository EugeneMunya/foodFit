import { Fragment, useRef, useState } from 'react';
import './App.css';

function App() {

const [money,setMoney]=useState(0)
const [hasMoney,setHasMoney]=useState(false)
const [result,setResult]=useState([])

const data =[{
    name:'food1',
    price:400,
},
{
    name:'food2',
    price:700,
},
{
    name:'food3',
    price:200,
},
{
    name:'food4',
    price:150,
}

]





const results = (vlu)=>{
  return new Promise((resolve,reject)=>{
  resolve(vlu)
})}



let combs=[]
let arr = useRef([])

const onSearch=(e)=>{
  e.preventDefault()
  if(money>=0&&money<=1000){
    setHasMoney(!hasMoney)
    findCombination(0,money,combs,data)
  }
}


const findCombination=(idx,mn,comb,food)=>{
  if(idx===food.length){
    if(mn>=0){
      arr.current.push([...comb])
      results(arr).then(setResult([...arr.current]))
    }
    return
  }
  
  if(mn>=(food[idx].price)){
    comb.push(`${food[idx].name}(${food[idx].price})`)
    findCombination(idx,mn-food[idx].price,comb,food)
    comb.pop()
  }
  
  findCombination(idx+1,mn,comb,food)
}

  return (
    <>
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        <form>
          <input onChange={(e)=>setMoney(parseInt(e.target.value))} type='text' placeholder='how much money you have? ex:400'/>
          <button type='submit' onClick={(e)=>onSearch(e)}>Find food</button>
        </form>
      </section>
      <section className='result'>
        {hasMoney?'':'Insert the litle money that you have <=1000'}
      {result.map((food,i)=>{
        return( 
        <>
        <div className='rest-menu' key={i+`kdv${i}`}>{food?.map((real,y)=>{
  
          return (
            <Fragment key={y+`kul${y}`}>
            <ul>
              <li >
                {real}
                </li>
            </ul>
             </Fragment>

          )
        })}
        </div>
         </>
        )
      })}
   </section>
    </div>
      </>
  );
}

export default App;
