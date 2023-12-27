import "./App.css"
import { useState } from "react"
import SuggestionBox from "./components/Suggestion"
export default function App() {
  const [searchQuery, setQuery] = useState("") 
  return <div className="hero h-screen w-screen">
    <SuggestionBox />
    <div className="flex justify-center sm:justify-end p-10"><img src={process.env.PUBLIC_URL + '/zevi.svg'}/></div>
    <div className="flex justify-center m-auto py-10"> <input className="rounded p-5 w-1/2" type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/></div>
  </div>
}