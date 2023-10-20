import s from "./style.module.css"

import { TVShowRating } from "../TVShowRating/TVShowRating"

export function TVShowDetail({ tvShow }) {
    const rating = Math.round((tvShow.vote_average / 2) * 100) / 100
    return (
        <div>
            <h1>{tvShow.name}</h1>
            <div className={s.fiveStar}>
                <TVShowRating rating={rating} />
                <span>{rating}/5</span>
            </div>
            <div>{tvShow.overview}</div>
        </div>
    )
}