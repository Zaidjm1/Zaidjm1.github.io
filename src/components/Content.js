import me from '../images/mjdiaz.png'


export default function Content(){
    return (
        <div className="content">
            <img className="img-responsive" src={me} />
            <content className="intro">
                <h2 className='content--h2'>HI, I AM</h2>
                <h1 className='content--h1'><span></span></h1>
                <h3 className='content--h3'>AND READING IS ONE OF MY HOBBY</h3>
            </content>
        </div>
    )
}