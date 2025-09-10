import DonateLinks from '@/components/DonateLinks'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'


export default function page() {
  return (
    <div className=' min-h-screen'>
<Header/>
<Hero/>
<section className='py-20 xyxy bger'>
    <div className="flexxxx ">
        <h1 className="  flexxxxy justfy-center">تبرع الآن وكن عوناً وسنداً لأهالي محافظة دير الزور   </h1>
</div>

   <DonateLinks/> 
</section>

<Footer/>


    </div>
  )
}
