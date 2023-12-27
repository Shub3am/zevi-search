import White_Star from "./noRev.svg"
import Yellow_Star from "./Rev.svg"
export default function Rating({selected}: {selected: number}) {
    let Review = []
    for (let i=1; i<=5; i++) {
        if (i <= selected) {
            Review.push(<img src={Yellow_Star} width={20} height={20}/>)
        } else {
            Review.push(<img src={White_Star} width={20} height={20}/>)
        }
    }
    return <div className="flex">{Review}</div>

}