import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16">
        <h1 className="text-2xl font-bold text-center p-4">Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-2'>
                <div className='w-full h-full col-span-3 md:cols-span-3 row-span-2'>
                    <Image 
                        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                        alt='/'
                        width='677'
                        height='451'
                    />
                </div>
          
                <div className='w-full h-full'>

                    <Image 
                        src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                        alt='/'
                        width='215'
                        height='225' 
                    
                        
                    />
                </div>
                <div className='w-full h-full'>

                    <Image 
                        src='https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                        alt='/'
                        width='215'
                        height='225'                    
                        
                    />
                </div>
                <div className='w-full h-full'>

                    <Image 
                        src='https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx80'
                        alt='/'
                        width='215'
                        height='217'
                    
                        
                    />
                </div>
                <div className='w-full h-full'>

                    <Image 
                        src='https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                        alt='/'
                        width='215'
                        height='217'
                        
                        
                    />
                </div>
           
            
        </div>
       
    </div>
  )
}

export default Portfolio