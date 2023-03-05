import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => {
    return (

        <main>
            {// {data} is same as props.data
        // which is passed from getServerSideProps
        /* 
        Eg:
        const Page = (props) => {
            <h1> {props.data} </h1>
            or 
            const {data} = props
            <h1> {data} </h1>
        }
        */}

            {data.map(city =>
                <Link key={city.id} href={`events/${city.id}`} legacyBehavior>
                    <a>
                        <Image alt={city.id} width={300} height={300} src={city.image} />
                        <h2>{city.title}</h2>
                        <p>{city.description}</p>
                    </a>
                </Link>
            )}
        </main>
    )
}