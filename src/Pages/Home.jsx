// masonary responsive
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

//custom react hooks
import { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'

//context
import { useGlobalContext } from '../Hooks/useGlobalContext'
//components
import Images from "../Components/Images"

export default function Home() {

  const { colors, dispatch, images } = useGlobalContext()
  // console.log(images)

  // const changeColor = (color)=>{
  //   dispatch({type:"BG_COLOR_CHANGE", payload: color})
  // }

  const [pageNumber, setPageNumber] = useState(1)

  const { data, isPending, error } = useFetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=car&page=${pageNumber}`)

  useEffect(() => {
    if (data) {
      dispatch({ type: "ADD_IMAGES", payload: data.results })
    }
  }, [data])

  if (isPending) {
    return <h1>Loading...</h1>
  }


  return (
    <>

      <div className='container mx-auto'>
        {/* <div className="flex justify-end mt-5 gap-5">
          {colors.map((color, index) => (
            <button onClick={() => changeColor(color)} key={index} className='w-5 h-5' style={{ backgroundColor: color }}></button>
          ))}
        </div> */}


        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="10px">
           {
            images.length > 0 ? images.map((image)=>{
              console.log(image)
              const {id , links, user, urls, alt_description} = image
              return <Images key={id} links={links} user={user} urls={urls} alt={alt_description}/> 
            }) : <p>rasm topilmadi</p>
           }
          </Masonry>
        </ResponsiveMasonry>
        <button onClick={() => setPageNumber(pageNumber + 1)} className="border w-full mt-5 py-2 transition-all hover:bg-slate-700 rounded-lg " >Read More</button>
      </div>

    </>
  )
}
