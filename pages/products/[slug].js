import { useQuery } from "urql";
import { GET_PRODUCT_DATA } from "../../lib/query";
import { useRouter } from "next/router";
import {
  Buy,
  DetailBox,
  ProductInfo,
  Quantity,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";


export default function Test() {
  const {qty,IncreaseQty,DecreaseQty,onAdd}=useStateContext()

  const { query } = useRouter();
  
  const [results] = useQuery({
    query: GET_PRODUCT_DATA,
    variables: { uid: query.slug },
  });
  const { data, error, fetching } = results;
  if (fetching) return <p> Loading.....</p>;
  if (error) return <p> {error.message}</p>;
  
  const { Title, Description, Images } =
    results.data.products.data[0].attributes;

  return (
    <DetailBox>
      <img src={Images.data[0].attributes.formats.medium.url} alt={Title} />

      <ProductInfo>
        <h1>{Title}</h1>
        <h3>{Description}</h3>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={DecreaseQty} />
          </button>

          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={IncreaseQty} />
          </button>
        </Quantity>
        <Buy onClick={()=>onAdd(qty,data.products.data[0].attributes)}>Add to Cart</Buy>
      </ProductInfo>
    </DetailBox>
  );
}
