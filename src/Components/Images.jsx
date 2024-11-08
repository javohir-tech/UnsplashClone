//react icons 
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineSimCardDownload } from "react-icons/md";

//custom hooks
import { useGlobalContext } from "../Hooks/useGlobalContext";
import { FaHeart } from "react-icons/fa6";

export default function Images({ links, user, urls, alt, image }) {

    const { dispatch, likesImage, images } = useGlobalContext()

    const addLIkesImages = (image) => {
        const alReadyAdded = likesImage.some((img) => img.id == image.id)

        if (!alReadyAdded) {
            dispatch({ type: "ADD_LIKES_IMAGES", payload: image })
        }
    }

    const likededImage = likesImage.some((img) => img.id === image.id)
    console.log(likededImage);



    // const likedImage = () =>{
    //     if(image.id=== )
    // }



    return (
        <div className='group relative'>
            <span
                onClick={() => addLIkesImages(image)}
                className="top-5 right-5 image-methods"
                style={{ color: likededImage ? 'red' : "" }}>
                {
                    likededImage ? <FaHeart /> : <IoHeartOutline />
                }
            </span>
            <img className="rounded" src={urls.regular} alt={alt} style={{ width: "100%", display: "block" }} />
            <span className="bottom-5 right-5 image-methods">
                <a download href={links.download + '&force=true'} target="_blank" rel="nofollow" ><MdOutlineSimCardDownload /></a>
            </span>
        </div>
    )
}
