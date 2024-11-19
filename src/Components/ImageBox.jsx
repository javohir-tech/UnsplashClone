//components
import Image from "./Image"

//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


function ImageBox({ images }) {
    // console.log(images)
    return (

        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
            >
                <Masonry gutter="10px">
                    { images.map((image) => {
                        return <Image key={image.id} image={image} />
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default ImageBox
