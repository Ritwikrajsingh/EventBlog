import Image from 'next/image'
import Link from 'next/link'

const EventCity = ({ events, pageName }) => {
    return (
        <div className='city_events'>
            <h1>Events in {pageName}</h1>
            <div className='event'>
                {events.map(event =>
                    <Link key={event.title} href={`${event.city}/${event.id}`} legacyBehavior scroll={false}>
                        <a className='card'>
                            <Image alt={event.title} width={300} height={300} src={event.image} loading='lazy' />
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </a>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default EventCity