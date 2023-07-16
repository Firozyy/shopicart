import Carousel from 'react-bootstrap/Carousel';

function ProductCorousal({ topProducts }) {
const offers =[
  "https://res.cloudinary.com/dkjzzkcls/image/upload/v1689492955/AMARO_-_Sale_tvpugk.png",
  "https://res.cloudinary.com/dkjzzkcls/image/upload/v1689492954/resize-1689492843748147521_qnevfy.jpg",
  "https://res.cloudinary.com/dkjzzkcls/image/upload/v1689492954/resize-1689492916940079055ShoesbannerDesignuptoOff_xwffme.jpg"
]
  return (
    // <Carousel>
    //   { topProducts && topProducts.map(item => (
    //     <Carousel.Item>
    //       <img
            
    //         src={item.image.image_url}
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         <h3>{`${item.name}  ($${item.price})` }</h3>
    //         <p>{item.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}


    // </Carousel>

    <Carousel>
    { offers.map(item => (
      <Carousel.Item>
        <img
          
          src={item}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    ))}


  </Carousel>
  );
}


export default ProductCorousal