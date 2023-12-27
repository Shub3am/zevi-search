import { useState } from "react"
import SuggestionBox from "./components/Suggestion"
import Header from "./components/Header"
export default function App() {
  const [searchQuery, setQuery] = useState("") 
  return <div className="box">
    <Header/>
    <div>
      <div className="flex justify-center m-auto py-10"> 
      <input className="rounded p-5 w-1/2" type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/> 
      </div> 
      {searchQuery ? <SuggestionBox/> : null}
      </div>
    
  </div>
}