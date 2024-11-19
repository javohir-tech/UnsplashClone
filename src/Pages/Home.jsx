//components
import { ImageBox, Search } from '../Components'

//react router dom
import { useActionData } from 'react-router-dom';

//custom hooks 
import { useFetch } from '../Hooks/useFetch';
import { useEffect, useRef, useState } from 'react';

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("Search")
  return search
}

function Home() {

  const searchParamFromAction = useActionData()
  // console.log(searchParamFromAction)
  const [allImages, setAllImages] = useState([])
  const [pageNumber, ssetPageNumber] = useState(1)

  const prevSearchAction = useRef(searchParamFromAction)

  const { data, isPending, error } = useFetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${searchParamFromAction ?? "all"}&page=${pageNumber}`)

  useEffect(() => {
    if (data) {
      setAllImages((prevImages) => {
        return pageNumber === 1 ? data.results : [...prevImages, ...data.results]
      })
    }
  }, [data])

  useEffect(()=>{
    if(searchParamFromAction != prevSearchAction.current){
      setAllImages([])
      ssetPageNumber(1)
      prevSearchAction.current =  searchParamFromAction
    }
  }, [searchParamFromAction])

  if (error) {
    return <h1>Error : {error}</h1>
  }



  return (
    <div className='container'>
      <Search />

      <div>
        {allImages.length > 0 ? <ImageBox images={allImages} /> : <p className='text-center'>Data is defiend</p>}
        {isPending && <h1 className='text-center'>Loading...</h1>}
        <div className="my-10">
          <button onClick={() => ssetPageNumber(pageNumber + 1)} className="btn btn-secondary btn-block">Read More </button>
        </div>
      </div>
    </div>
  )
}

export default Home
