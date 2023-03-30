import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => {
    return (
        <>
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
            <div className="home-body">
                {data.map(city =>
                    <Link
                        key={city.id}
                        legacyBehavior
                        href={`events/${city.id}`}
                    >
                        <a className="card" href={`events/${city.id}`}>
                            <div className="image">
                                <Image alt={city.id} width={537} height={358} src={city.image} />
                            </div>
                            <div className="content">
                                <h2>{city.title}</h2>
                                <p>{city.description}</p>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        </>
    )
}