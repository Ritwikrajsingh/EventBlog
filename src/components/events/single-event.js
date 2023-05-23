import Image from 'next/image'
import Link from 'next/link'

function SingleEvent({ event }) {
    return (
        <div className='single-event'>
            <h1>{event.title}</h1>
            <Image src={event.image} alt={event.title} width={500} height={500} />
            <p>{event.description}</p>
            <form
                // onSubmit={subscribe} 
                className='subsrcibe-email'
            >
                <label>GET REGISTERED FOR THIS EVENT</label>
                <input type='email' id='email'
                    placeholder='please insert your email here' />
                <button type='button'>Submit</button>

            </form>
        </div>
    )
}

export default SingleEvent