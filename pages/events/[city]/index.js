import EventCity from '@/src/components/events/event-city'

const EventCityPage = ({ events, pageName }) =>
    <EventCity events={events} pageName={pageName} />

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