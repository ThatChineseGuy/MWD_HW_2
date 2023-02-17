import { products } from "./item";

const ArrayReduce = () =>{
    const cost = products.reduce((accumulator,price) => {
        return accumulator + price;
    },0)
    
    return <div>
        <p>{products.number}</p>
        <p>Total cost of all products would be {cost}</p>
    </div>

}

export default ArrayReduce