import Header from "../components/Header"
import { useState, useEffect } from "react"
import Rating from "../components/Rating/Rating"
import ProductsShowcase from "./productsShowcase"
import { useLocation } from "react-router-dom"
type ProductsType = {
  products: Array<{
    id: number;
    title: string;
    price: string;
  }>;
};


let ArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>

function addToWishlist(item: {id: number, product: string}) {
  let id = item.id
  if (localStorage.getItem("wishList")) {
    console.log(localStorage['wishList'])
    let wishList = JSON.parse(localStorage.getItem('wishList'))
    wishList[id] = item.product
    localStorage.setItem('wishList', JSON.stringify(wishList))
  } else { 
    let wishList = {id: item.product}
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }
}

function SortByRating({ratingToggle, setRatingToggle, ratingFilter, setRatingFilter}: {ratingToggle: boolean, setRatingToggle: Function, ratingFilter: number, setRatingFilter: Function}) {
  return <div><button className="uppercase flex items-center" onClick={()=>setRatingToggle(!ratingToggle)}>Rating 
  {ArrowIcon}   </button> {ratingToggle ? <div className="transition  animated ease-in-out delay-300">
    <div className="flex">  
    <input type="checkbox" className="mx-1" onClick={()=> (ratingFilter !== 5 ? setRatingFilter(5) : setRatingFilter(0))} checked={ratingFilter === 5 ? true:false}/>
    <label className="flex"><Rating selected={5}/></label></div>
    <div className="flex">  
<input type="checkbox" className="mx-1" onClick={()=> (ratingFilter !== 4 ? setRatingFilter(4) : setRatingFilter(0))} checked={ratingFilter === 4 ? true:false}/>
<label className="flex"><Rating selected={4}/></label></div>
<div className="flex">  <input type="checkbox" className="mx-1" onClick={()=> (ratingFilter !== 3 ? setRatingFilter(3) : setRatingFilter(0))} checked={ratingFilter === 3 ? true:false}/>
<label className="flex"><Rating selected={3}/></label></div>
<div className="flex">  <input type="checkbox" className="mx-1" onClick={()=> (ratingFilter !== 2 ? setRatingFilter(2) : setRatingFilter(0))} checked={ratingFilter === 2 ? true:false}/>
<label className="flex"><Rating selected={2}/></label></div><div className="flex">  <input type="checkbox" className="mx-1" onClick={()=> (ratingFilter !== 1 ? setRatingFilter(1) : setRatingFilter(0))} checked={ratingFilter === 1 ? true:false}/>
<label className="flex"><Rating selected={1}/></label></div></div>: null}</div>
}


function SortByPrice({priceRangeToggle, setPriceToggle, priceFilter, setPriceFilter}: {priceRangeToggle: boolean, setPriceToggle: Function, priceFilter:number, setPriceFilter: Function}) {
  return (<div><button className="flex items-center uppercase" onClick={()=>setPriceToggle(!priceRangeToggle)}>Price Range 
    {ArrowIcon}   </button> {priceRangeToggle ? <div className="transition  animated ease-in-out delay-300"><div className="flex flex-col">  <div><input type="checkbox" onClick={()=> (priceFilter !== 500 ? setPriceFilter(500) : setPriceFilter(999999))} id="price" checked={priceFilter === 500 ? true:false} name="price" value="price"/>
  <label htmlFor="price"> Under 500</label></div><div><input type="checkbox" onClick={()=> (priceFilter !== 1000 ? setPriceFilter(1000) : setPriceFilter(999999))} id="price" checked={priceFilter === 1000 ? true:false} name="price" value="price"/>
  <label htmlFor="price"> Under 1000</label></div></div></div>: null}</div>)

}

export default function Shop() {


  //this parses the query from url
  const { search } = useLocation();


    const [products, setProducts] = useState<ProductsType>({products: []})




    useEffect(()=> {
      (async () => {
        let query = new URLSearchParams(search)
        let request_url = 'https://dummyjson.com/products?limit=10'
        if (query.has('page') && Number(query.get('page')) >= 2 ) { 
          let res = await fetch(request_url+`&skip=${query.get('page')}0`)
          let data = await res.json()
          
          setProducts(data)
        } else {
        let res = await fetch(request_url)
        let data = await res.json()
        setProducts(data)
}

      })()
    }, [])
    
    const [brandsToggle, setBrandsToggle] = useState(true)
    const [priceRangeToggle, setPriceToggle] = useState(true)
    const [ratingToggle, setRatingToggle] = useState(true)

    const [priceFilter, setPriceFilter] = useState(999999) //example: [500, 100] : Under 500 and under 100
    const [brandFilter, setBrandFilter] = useState([])
    const [ratingFilter, setRatingFilter] = useState(0)

    return <div className="">
        
      <Header />
      <h2 className="text-4xl font-light mb-10 w-1/3 text-center">Search Results</h2>
    <div className="flex my-5">
        <div className="w-1/3 flex flex-col items-center"> <div><button className="flex items-center uppercase justify-between" onClick={()=>setBrandsToggle(!brandsToggle)}>Brand 
    {ArrowIcon}   </button> {brandsToggle ? <div className="transition  animated ease-in-out delay-300"><div>  <input type="checkbox" id="H&M" name="H&M" value="H&M"/>
  <label htmlFor="H&M"> H&M</label></div></div>: null}</div>
  
  <SortByPrice priceRangeToggle={priceRangeToggle} setPriceToggle={setPriceToggle} priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
  
  <SortByRating ratingToggle={ratingToggle} setRatingToggle={setRatingToggle} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}/>
  
  
  
  
  </div>
  
  <div className="w-2/3"><ProductsShowcase products={products} priceFilter={priceFilter} ratingFilter={ratingFilter} addToWishlist={addToWishlist}/></div>
 
  
  </div>

  
    
    </div>
}