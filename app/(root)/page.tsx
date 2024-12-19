import React from 'react'
import { ModeToggle } from '../_components/theme-toggle'

const Home = () => {
    return (
        <section>
            <h1>Here is our system</h1>

            <div className='flex flex-row justify-end px-[3rem] py-[10px]'>

                <ModeToggle />
            </div>
        </section>

    )
}

export default Home