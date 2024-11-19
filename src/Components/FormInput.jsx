//rect icons 
import { FaSearch } from "react-icons/fa";

export default function FormInput({ type, name, placeholder }) {
    return (
        <>
            <label className="input w-full input-bordered flex items-center gap-2 input-sm md:input-md">
                <input type={type} className="grow" placeholder={placeholder} name={name} />
                <FaSearch className="h-4 w-4 opacity-70" />
            </label>
        </>
    )
}
