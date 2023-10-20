import s from "./style.module.css"

const SMALL_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

export function TVShowListItem({ onClick, tvShow }) {
    return <div onClick={() => { onClick(tvShow) }} className={s.container}>
        <img src={SMALL_BASE_IMAGE_URL + tvShow.backdrop_path} alt="ok" className={s.image} />
        <div className={s.title}>{tvShow.name}</div>
    </div>
}