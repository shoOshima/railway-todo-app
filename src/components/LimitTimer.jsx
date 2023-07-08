
export default function LimitTimer(props){
 
    if (props.limit != null){
    const Str_limit = props.limit
    let y = Str_limit.slice(0,4)
    let m = Str_limit.slice(5,7)
    let d = Str_limit.slice(8,10)
    let hh =Str_limit.slice(11,13)
    let mm =Str_limit.slice(14,16)
    console.log(y+","+m+","+d+","+hh+","+mm)
    const da = new Date(props.limit)
    console.log(da)
    }
    return (
    <div>
        <p>残り:</p>
    </div>
    )
}


