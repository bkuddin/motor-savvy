import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const CarBrand = () => {
   const [images, setImages] = useState([])
   useEffect(()=>{
    fetch('images.json')
    .then(res=> res.json())
    .then(data => setImages(data))
   },[])

    return (
        <div className="mx-20 my-20">
             <Marquee>
            <div className='grid grid-cols-9  '>
                 {
                    images.map(image => <div 
                    key={image.id}>
                        <p><img className="w-60  mr-5" src={image.image} alt="" /></p>
                    </div> )
                 }
            
               
            </div>
            </Marquee>
        </div>
    );
};

export default CarBrand;