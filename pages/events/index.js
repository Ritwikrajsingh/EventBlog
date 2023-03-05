import Image from 'next/image'
import Link from 'next/link'

const EventsPage = ({ cities }) => {
    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {cities.map(city =>
                    <Link key={city.id} href={`events/${city.id}`} legacyBehavior scroll={false}>
                        <a>
                            <Image alt={city.id} width={300} height={300} src={city.image} />
                            <h2>{city.title}</h2>
                        </a>
                    </Link>)}
            </div>
        </div>
    )
}

export default EventsPage

export async function getStaticProps() {
    const { event_cities } = await import('/database/data.json')
    return {
        props: {
            cities: event_cities
        }
    }
}