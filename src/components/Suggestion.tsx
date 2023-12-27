import { useEffect, useState } from "react"


async function getImages() {
    let res = await fetch('https://dummyjson.com/products?limit=10&skip=5&select=title,images')
    let data = await res.json()
    return data
}


export default function SuggestionBox() {
    const [data, setData] = useState({products: []})
    useEffect(()=> {
        (async ()=> {
        let images = await getImages()

        setData(images)
    })()
    }, [])
    if (Object.keys(data).length ) {
        
    let LatestTrends = data.products.map((item: {id: number, title: string, images: Array<string>}, index) => {
        if (index < 5) {
        return <div className="m-auto sm:m-0" key={item.id}><img className="rounded-lg" style={{ width: "200px", height: "150px" }} alt={item.title} src={item.images[0]}/> <p className="my-2 text-xs font-light">{item.title}</p></div> }
    })
    let productSuggestions = data.products.map((item: {title: string},index) => {
        if (index >= 5 && index <= 10 ) {
        return <p key={index} className="py-1 text-sm">{item.title}</p> }
    })

    return <div className="bg-white w-8/12 m-auto rounded-lg capitalize py-4">
        <div className="mx-10">
        <div><h4 className="py-4">Latest Trends</h4><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 "> {LatestTrends}</div></div></div>
        <div className="mx-10"><h4 className="py-4 text-lg">Popular Suggestions</h4>{productSuggestions}</div>
    </div> } else {
        return <h1>No Suggestions</h1>
    }
}