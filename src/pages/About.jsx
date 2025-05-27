import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <div className='text-4xl'>
                    <Title text1={'ABOUT'} text2={'US'} />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi minus, quia cupiditate totam veritatis, doloribus fugiat vel eaque facilis vero quidem perferendis aliquid. Quos, nemo sunt! Neque, corporis laudantium maxime numquam, sint minus quibusdam, asperiores nisi ullam autem eum fuga?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum excepturi accusamus eaque corporis voluptatem numquam eius temporibus, enim laborum corrupti.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, animi earum, iste perspiciatis fuga iusto corporis adipisci at quis maxime, sequi esse sit a impedit? Ab magni voluptatum aut provident!</p>
            </div>
        </div>

        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, optio?</p>
            </div>
            <div className='border border-x-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, officia?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ex.</p>
            </div>
        </div>

        <NewsletterBox />

    </div>
  )
}

export default About
