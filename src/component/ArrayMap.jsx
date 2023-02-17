import products from "./item"

const ArrayMap = () => {
    const names = products.map((name) => {
        return name.join(" ");
    })

    return<div>
        <p>{names}</p>
    </div>

}

export default ArrayMap