export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          Title
          Description
          Price
          UID
          Images{
            data{
              attributes{
              formats
              }
            }
          }
          
        }
      }
    }
  }`;

  export const GET_PRODUCT_DATA=`
  query getProduct($uid: String!){
    products(filters: {UID: {eq: $uid}}){
        data{
            attributes{
              Title
              Description
              Price
              UID
              Images{
                data{
                  attributes{
                  formats
                  }
                }
              }
              
            }
          }
    }
  }
  `