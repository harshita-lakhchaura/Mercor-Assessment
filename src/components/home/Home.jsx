import React from 'react'
import './home.css'
import cube from '../../assets/intro-cube 1.svg'
import stairs from '../../assets/intro-stairs 1.svg'
import MainText from '../MainText/MainText'
import cubes from '../../assets/intro-cubes 1.svg'
import pillar from '../../assets/intro-pillar 1.svg'

const Home = () => {
    return (
        <>
            <div className='cube-image'>
                <img src={cube} alt="cube" />
            </div>
            <div>
                <img src={stairs} alt="stairs" className='stairs-image' />
            </div>
            <MainText />
            <div className='cube-image'>
                <img src={cubes} alt="cubes" />
            </div>
            <div>
                <img src={pillar} alt="pillar" className='pillar-image'/>
            </div>
        </>
    )
}

export default Home