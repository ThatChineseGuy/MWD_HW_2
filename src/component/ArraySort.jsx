import products from "./item"


const ArraySort = () => {
    
    const sorted = [...products]
    
    sorted.sort((a,b) => b.price - a.price)

    return <div>
        <p>Testing</p>
        <p>{sorted}</p>
    </div>
}

export default ArraySort