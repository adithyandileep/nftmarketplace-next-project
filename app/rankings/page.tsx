import React from 'react'
import Text from '@/components/Text'
import Rankings from '@/components/Rankings'

const page = () => {
  return (
    <main className='lg:mt-25 mt-[54px] bg-pro'>
      <section className='flex justify-center py-10 w-screen'>
        <div className='lg:w-[980px] sm:w-[620px] space-y-7 text-pro items-center w-[315px]'>
            <Text heading="Top Creators" paragraph="Check out top ranking NFT artists on the NFT Marketplace." />
            <div className='w-full flex flex-col py-10 space-y-5'>
                <div className='w-full py-[12px] px-5 border-2 text-[16px] font-mono cap border-[#3b3b3b] rounded-full flex flex-row justify-between items-center'>
                    <div className='w-[30px] flex justify-center'>#</div>
                    <div className='w-[400px] px-5'>Artist</div>
                    <div className='sm:flex w-35 hidden'>Change</div>
                    <div className='lg:flex w-[180px] hidden'>NFTs Sold</div>
                    <div className='w-25'>Volume</div>
                </div>
                <Rankings />
            </div>
        </div>
      </section>
    </main>
  )
}

export default page
