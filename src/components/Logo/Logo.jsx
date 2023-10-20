import s from "./style.module.css"

export function Logo({ image, title, subtitles }) {
    return (
        <>
            <div className={s.container}>
                <img src={image} alt="Logo" className={s.img} />
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitles}</span>
        </>
    )
}