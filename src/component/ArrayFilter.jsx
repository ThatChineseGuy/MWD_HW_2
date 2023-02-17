import products from "./item"

const ArrayFilter = () => {
    
    const Filter = products.filter(function(products){
        return products.onSale == true;
    })

    return <div>
        {Filter}
    </div>

}

export default ArrayFilter