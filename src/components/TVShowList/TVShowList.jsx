import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import s from "./style.module.css"

export function TVShowList({ tvList, onClickItem }) {

    return (
        <>
            <p className={s.title}>Vous aimeriez peut-être :</p>
            <div className={s.list}>
                {
                    tvList.map((tvShow) => {
                        return <TVShowListItem onClick={onClickItem} key={tvShow.id} tvShow={tvShow} />
                    })
                }
            </div>
        </>
    )
}