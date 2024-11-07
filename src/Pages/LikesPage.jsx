//custom hooks
import { useGlobalContext } from "../Hooks/useGlobalContext"

//components
import Images from "../Components/Images"

// masonary responsive
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function LikesPage() {

    const { likesImage } = useGlobalContext()

    return (
        <div className="container mx-auto mt-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="10px">
                    {
                        likesImage.length > 0 ? likesImage.map((image) => {
                            // console.log(image)
                            const { id, links, user, urls, alt_description } = image
                            return <Images key={id} links={links} user={user} urls={urls} alt={alt_description} image={image} />
                        }) : <p>rasm topilmadi</p>
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
