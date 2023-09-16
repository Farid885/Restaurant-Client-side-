import React from 'react'
import Image from '../../../assets/image/aboutImg/image'
import '../../../assets/styles/aboutStyles/AboutSushi.scss'

const AboutSushi = () => {
    return <div className='position-relative sushiSection'>

            <div className='sushi_section_1'>
                <div className='sushi4'>
                    <img src={Image.sushi4} width='220' />
                </div>

                <div className='sushi5'>
                    <img src={Image.sushi3} width='180' />
                </div>

                <div className='sushi6'>
                    <img src={Image.sushi6} width='150px' />
                </div>
            </div>

            <div className='sushi_section_2'>
                <div className='sushi1'>
                    <img src={Image.sushi1} width='180' />
                </div>

                <div className='sushi2'>
                    <img src={Image.sushi2} width='220' />
                </div>

                <div className='sushi3'>
                    <img src={Image.sushi3} width='200' />
                </div>
            </div>

        </div>
}

export default AboutSushi