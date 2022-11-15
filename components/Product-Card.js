import { ProductStyled } from "../styles/ProductCardStyled"
import Link from "next/link"

export default function ProductCard({product}){
    
    const {Title,Price,Images,Description,UID}=product.attributes

   
    return(
        <ProductStyled>

            <div>
                <Link href={`/products/${UID}`}>
                <img src={Images.data[0].attributes.formats.small.url} alt=""/>
                </Link>
            </div>
            <h2>{Title}</h2>
            <h3>{Price}</h3>
        </ProductStyled>
    )
}