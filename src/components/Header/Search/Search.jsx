import "./Search.css"
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../actions/actions";

const handleSubmit = (event) => {
    event.preventDefault()
}

const Search = () => {
    let dispatch = useDispatch()

    const toUCFirstLetter = (string) => {
        if(!string) return ""
        return string[0].toUpperCase() + string.slice(1)
    }

    const sendSearchValue = (event) => {
        dispatch(setSearchValue(toUCFirstLetter(event.target.value)))
    }

    return (
        <form className="Search" onSubmit={handleSubmit}>
            <input placeholder="Search..." onChange={sendSearchValue}/>
        </form>
    )
}

export default Search