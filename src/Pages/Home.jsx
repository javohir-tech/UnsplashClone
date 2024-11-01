
//custom react hooks
import { useGlobalContext } from '../Hooks/useGlobalContext'

export default function Home() {

  const {colors, dispatch} = useGlobalContext()

  const changeColor = (color)=>{
    dispatch({type:"BG_COLOR_CHANGE", payload: color})
  }
  
  return (
    <>
      <div className='container mx-auto'>
        <div className="flex justify-end mt-5 gap-5">
          {colors.map((color, index) => (
            <button onClick={()=>changeColor(color)} key={index} className='w-5 h-5' style={{backgroundColor:color}}></button>
          ))}
        </div>
      </div>
    </>
  )
}
