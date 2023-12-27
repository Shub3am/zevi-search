import "./App.css"
export default function App() {
  return <div className="hero h-screen w-screen">
    <div className="flex justify-end p-10"><img src={process.env.PUBLIC_URL + '/zevi.svg'}/></div>
    <div className="flex justify-center m-auto"> <input type="text" placeholder="Search Something Guud!!"/></div>
  </div>
}