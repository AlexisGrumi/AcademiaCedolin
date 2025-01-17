import React from 'react'
import slider from '../../assets/Slider.svg'
import santamaria from '../../assets/hero-santamaria.svg'
import Review from '../../components/review/Review'
function Home() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row w-8/12 justify-between px-20'>
                <div className='flex flex-col justify-center'>
                    <div className='text-6xl font-medium'>
                        Primera clase <br />
                        Gratis!!
                    </div>
                    <button className='text-white bg-black w-24 text-center h-fit p-2 rounded-3xl shadow-3xl hover:bg-[#F3F3F3] hover:text-black'>Cotizar</button>
                </div>
                <div className=''>
                    <img src={slider} />
                </div>
            </div>
            <div className=' flex justify-center bg-[#F3F3F3] w-full h-fit py-12 font-medium mt-8'>
                <div className='flex flex-row gap-36 w-11/12'>
                    <div className='text-wrap'>
                        <h1 className='font-bold flex flex-row leading-none mb-2'>
                            <div className='w-4 h-4 rounded-full bg-[#31D737]'></div>¿Por que?
                        </h1>
                        All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                    </div>
                    <div>
                        <h1 className='font-bold flex flex-row leading-none mb-2'>
                            <div className='w-4 h-4 rounded-full bg-[#FFFFFF] border'></div>¿Para que?
                        </h1>
                        All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                    </div>
                    <div>
                        <h1 className='font-bold flex flex-row leading-none mb-2'>
                            <div className='w-4 h-4 rounded-full bg-[#DB2C2C]'></div>¿Como?
                        </h1>
                        All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-[#D7D7D7] w-full h-fit py-12 font-medium'>
                <div className='flex flex-row items-center w-11/12 justify-between'>
                    <div id='img' className='flex justify-center w-6/12'>
                        <img src={santamaria} alt='hero' className=' w-12/12 h-auto' />
                    </div>

                    <div className="flex flex-col justify-center items-center text-left w-6/12 h-full">
                        <h1 className="mb-4 text-xl font-bold">¿Eres casada con un nacionalizado italiano?</h1>
                        <h1 className="mb-4 text-lg">No te preocupes, te preparamos para tu examen.</h1>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Empezamos desde el nivel A1.</li>
                            <li>Te preparamos hasta el día de tu examen.</li>
                            <li>Sell your videos worldwide.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Review/>
        </div>
    )
}

export default Home