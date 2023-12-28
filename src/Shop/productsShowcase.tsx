
export default function productsShowcase({products}: any) {
if (products.products.length) {
    let productsGrid = products.products.map((item: any)  => { return (<div className="mb-4"><div><img className="border-double border-2 border-gray-500-500" src={item.images[0]} style={{width: "200px", height: "200px", objectFit: "fill"}}/></div><div className="pt-4 font-sans">{item.title}</div><div className="py-2 flex"><p className="line-through pr-3">Rs.{item.price+Math.floor(Math.random()*150)}$</p>Rs.{item.price}$</div></div>)})
    return <div className="grid grid-cols-4">{productsGrid}</div>}
}