import { Inter } from 'next/font/google'
import { HomePage } from '@/src/components/home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  )
}

export async function getServerSideProps() {
  // getServersideProps should not be a part of a class/object or any other function/method. It should be exported as a standalone function.
  // although we can put it anywhere (top, middle, bottom) in the file, but it should be exported as a standalone function.
  /*Few key-points:
  - it only runs on the server side
  - it runs before the page is rendered
  - client can't acess anything fronm this function, unless it is returned as a part of props
  */

  const { event_cities } = await import('/database/data.json')

  return {
    props: {
      data: event_cities
    }
  }
}