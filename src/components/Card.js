export default function Card(props){
    return (
            <div className='card--manhwa'>
                <img className='card--img' src={props.item.image} />
                <p className='card--name'>{props.item.title}</p>
            </div>
    )
}




