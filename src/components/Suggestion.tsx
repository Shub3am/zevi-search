import { useEffect, useState } from "react"


async function getImages() {
    let res = await fetch('https://dummyjson.com/products?limit=5&skip=5&select=title,images')
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
    if (Object.keys(data).length) {
    let ProductSuggestions = data.products.map((item: {id: number, title: string, images: Array<string>}) => {
        console.log(item.images.length)
        return <div className="" key={item.id}><img className="rounded-lg" style={{ width: "200px", height: "150px" }} alt={item.title} src={item.images[0]}/> <p className="font-thin">{item.title}</p></div>
    })

    return <div className="bg-white w-8/12 m-auto">
        <div className=""><h4 className="">Latest Trends</h4><div className="flex flex-row justify-between "> {ProductSuggestions}</div></div>
    </div> } else {
        return <h1>ok</h1>
    }
}