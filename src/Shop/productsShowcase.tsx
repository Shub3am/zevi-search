
import styled from 'styled-components'
import Rating from '../components/Rating/Rating'

export default function productsShowcase({products, addToWishlist, priceFilter, ratingFilter}: any) {
if (products.products.length) {
    
    let productsGrid = products.products.map((item: any)  => { if (item.images[1] && item.price < priceFilter && ratingFilter < item.rating) {

        return (<div className="mb-4">
            <div className='group relative'>
                <img alt="wishlist-button" className='hidden group-hover:block absolute top-5 right-10' onClick={()=> { addToWishlist({id: item.id, product: item.title})}} src={process.env.PUBLIC_URL + '/wishlist-default.png'} width={20}/>
                <img alt={item.title} className="border-double border-2 border-gray-500-500 shadow-md" src={item.images[1]} style={{width: "300px", height: "300px", objectFit: "fill"}}/>
                </div>
                <div className="pt-4 font-sans">{item.title}</div>
                <div className="py-2 flex">
                    <p className="line-through pr-3">Rs.{item.price+Math.floor(Math.random()*150)}$</p>
                    <p className="font-bold" style={{color: "#6D84FF"}}>Rs.{item.price}$</p>
                    </div>
                    <div><Rating selected={Math.floor(item.rating)}/></div>
                </div>)}})
    return <div className="grid grid-cols-4">{productsGrid}</div>}
}


// const Wishbtn = styled.img`
// position: absolute;
// top: 1em;
// right: 2em;

// `