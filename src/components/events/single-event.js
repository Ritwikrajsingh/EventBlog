import Image from 'next/image'
import Link from 'next/link'

function SingleEvent({ event }) {
    return (
        <div className='single-event'>
            <h1>{event.title}</h1>
            <Image src={event.image} alt={event.title} width={500} height={500} />
            <p>{event.description}</p>
            <p>
                <strong>GET REGISTERED FOR THIS EVENT</strong>
            </p>
            <input type='email' /> <button>Submit</button>
        </div>
    )
}

export default SingleEvent