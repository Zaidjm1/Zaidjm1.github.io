import Card from './Card'
import data from './data'


export default function Container(){

    const cardElements = data.map (card => {
        return <Card 
        key={card.id} 
        item={card} />
    })

    return (
        <div className='cardContainer'>
            <h1>MANHWA</h1>
            <section className='card--lists'>{cardElements}</section>
        </div>
    )
}