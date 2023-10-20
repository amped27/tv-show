import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar({ onSubmit }) {

    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value)
        }
    }

    return (
        <>
            <SearchIcon className={s.icon} />
            <input
                className={s.search}
                type="search"
                placeholder="Search a tv Show who like..."
                onKeyUp={submit}
            />
        </>
    )
}