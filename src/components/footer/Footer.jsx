import React from 'react'
import apple from '../../assets/Vector.svg'
import play from '../../assets/Vector2.svg'
import arrow from '../../assets/arrow.svg'
import chat from '../../assets/Frame.svg'
import twitter from '../../assets/Frame (1).svg'
import instagram from '../../assets/Frame (2).svg'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-box'>
                <img src={apple} alt='app' />
                <div className='social-box-text'>
                    APP STORE
                </div>
            </div>
            <div className='social-box'>
                <img src={play} alt='play' />
                <div className='social-box-text'>
                    GOOGLE PLAY
                </div>
            </div>
            <img src={arrow} alt='arrow' style={{ marginLeft: '15rem' }} />
            <div className='footer-text'>
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </div>
            <div className='icons'>
                <img src={chat} style={{marginRight:'1.5rem'}}/>
                <img src={twitter} style={{marginRight:'1.5rem',height:'1.5rem'}}/>
                <img src={instagram}/>
            </div>
        </div>
    )
}

export default Footer