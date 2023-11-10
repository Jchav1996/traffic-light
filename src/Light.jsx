import "./light.css"

export function Light({ color, opacity }) {
    return (
        <>
        <div className="light selected" style={{background: color, opacity: opacity}}/>
        </>
    )
}