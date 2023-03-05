import Image from 'next/image';

const EventPage = ({ event }) => {
    return (
        <div>
            <Image src={event.image} alt={event.title} width={500} height={500} />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
        </div>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const { all_events } = await import('database/data.json')
    const allPaths = all_events.map(event => {
        return {
            params: {
                city: event.city,
                slug: event.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const slug = context?.params.slug
    const { all_events } = await import('database/data.json')
    const event = all_events.find(event => event.id === slug)

    return {
        props: { event: event }
    }
}