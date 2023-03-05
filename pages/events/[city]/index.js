import Image from 'next/image'
import Link from 'next/link'

const EventCityPage = ({ events, pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {events.map(event =>
                    <Link key={event.title} href={`${event.city}/${event.id}`} legacyBehavior scroll={false}>
                        <a>
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

export default EventCityPage

export async function getStaticPaths() {
    const { event_cities } = await import('/database/data.json')
    const allPaths = event_cities.map(events => {
        return {
            params: {
                city: events.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.city
    const { all_events } = await import('/database/data.json')
    const events = all_events.filter(event => event.city === id)

    /* hahahahaha what a funny way to slice the first letter of the string, because a lamen will wrtie this code:
    const pageName = id.slice(0, 1).toUpperCase() + id.slice(1) or id.charAt(0).toUpperCase() + id.slice(1) */
    const pageName = id.slice(false, true).toUpperCase() + id.slice(true)
    //because true is 1 and false is 0, bruh! I am a genius :D

    return {
        props: { events, pageName }
    }
}