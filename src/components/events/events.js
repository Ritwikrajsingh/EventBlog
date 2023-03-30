import Image from 'next/image'
import Link from 'next/link'

function Events({ cities }) {
    return (
        <div className='events'>
            {cities.map(city =>
                <Link key={city.id} href={`events/${city.id}`} legacyBehavior scroll={false}>
                    <a className='card'>
                        <Image alt={city.id} width={300} height={300} src={city.image} />
                        <h2>{city.title}</h2>
                    </a>
                </Link>)}
        </div>
    )
}

export default Events