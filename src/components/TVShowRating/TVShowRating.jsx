import { StarFill, StarHalf, Star } from "react-bootstrap-icons"

export function TVShowRating({ rating }) {
    const StarList = []

    const starFillCount = Math.floor(rating)
    const hasStarHalf = rating - starFillCount >= 0.5
    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0)

    for (let i = 1; i <= starFillCount; i++) {
        StarList.push(<StarFill key={"star-fill" + i} />)
    }
    if (hasStarHalf) {
        StarList.push(<StarHalf key={"star-half"} />)
    }
    for (let i = 1; i <= emptyStarCount; i++) {
        StarList.push(<Star key={"star" + i} />)
    }
    return <div>{StarList}</div>
}