import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <div className='nav-bar'>
                <Image alt='logo' src='/next.svg' width={80} height={30} />
                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/events'>Events</Link></li>
                        <li><Link href='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
            <h1>de Finibus Bonorum et Malorum</h1>
        </header>
    )
}