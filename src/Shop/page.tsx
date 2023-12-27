import Header from "../components/Header"
import { useState } from "react"
import Rating from "../components/Rating/Rating"
export default function Shop() {
    let ArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
    
    const [brands, setbrands] = useState(true)
    return <div className=""><Header/>
    <div><div><h2>Search Results</h2> <div><button className="flex items-center uppercase" onClick={()=>setbrands(!brands)}>Brand 
    {ArrowIcon}   </button> {brands ? <div className="transition  animated ease-in-out delay-300"><div>  <input type="checkbox" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M"> H&M</label></div></div>: null}</div>
  
  <div><button className="flex items-center uppercase" onClick={()=>setbrands(!brands)}>Price Range 
    {ArrowIcon}   </button> {brands ? <div className="transition  animated ease-in-out delay-300"><div>  <input type="checkbox" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M"> Under 500</label></div></div>: null}</div>
  
  <div><button className="uppercase flex items-center" onClick={()=>setbrands(!brands)}>Rating 
    {ArrowIcon}   </button> {brands ? <div className="transition  animated ease-in-out delay-300"><div className="flex">  <input type="checkbox" className="mx-1" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M" className="flex"><Rating selected={5}/></label></div><div className="flex">  <input type="checkbox" className="mx-1" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M" className="flex"><Rating selected={4}/></label></div><div className="flex">  <input type="checkbox" className="mx-1" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M" className="flex"><Rating selected={3}/></label></div><div className="flex">  <input type="checkbox" className="mx-1" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M" className="flex"><Rating selected={2}/></label></div><div className="flex">  <input type="checkbox" className="mx-1" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M" className="flex"><Rating selected={1}/></label></div></div>: null}</div>
  
  
  
  
  </div></div>

  
    
    </div>
}