import { useEffect, useState } from "react"
import { TVShowAPI } from "./api/tv-show"
import "./global.css"
import s from "./style.module.css"
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/logo.png"
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";


const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function App() {
    const [currentShow, setCurrentShow] = useState()
    const [recommendationList, setRecommendationList] = useState([])

    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars()
        if (populars.length > 0) {
            setCurrentShow(populars[0])
        }
    }
    async function fetchRecommendations(tvID) {
        const recommendations = await TVShowAPI.fetchRecommendation(tvID)
        if (recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10))
        }
    }

    useEffect(() => {
        fetchPopulars()
    }, [])
    useEffect(() => {
        if (currentShow) {
            fetchRecommendations(currentShow.id)
        }
    }, [currentShow])

    // function setCurrentTvshow(tvShow) {
    //     alert(JSON.stringify(tvShow))
    // }

    async function searchTVShow(showName) {
        const searchResponse = await TVShowAPI.fetchSearch(showName)
        if (searchResponse.length > 0) {
            setCurrentShow(searchResponse[0])
        }
    }

    return (
        <div
            className={s.main_container}
            style={{
                background: currentShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BASE_IMAGE_URL}${currentShow.backdrop_path}") no-repeat center / cover` : "black",
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={logo} title="WatoWatch" subtitles="What to watch" />
                    </div>
                    <div className="col-md-12 col-lg-4"><SearchBar onSubmit={searchTVShow} /></div>
                </div>
            </div>
            {currentShow && <div className={s.tv_show_details}><TVShowDetail tvShow={currentShow} /></div>}
            {recommendationList && recommendationList.length > 0 && <div className={s.recommended_shows}><TVShowList tvList={recommendationList} onClickItem={setCurrentShow} /></div>}
        </div>
    )
}

export default App