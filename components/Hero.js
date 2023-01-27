
export const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[2]'></div>
        <div className='p-5 text-white z-[2]  mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Book</button>
        </div>
    </div>
  )
}

Hero.defaultProps = {
    heading: 'Photon Photography',
    message: 'Capturing important moments in life',

}
