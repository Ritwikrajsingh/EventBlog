import Events from '@/src/components/events/events'

const EventsPage = ({ cities }) => {
    return (
        <Events cities={cities} />
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