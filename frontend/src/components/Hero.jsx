import avatar from '../assets/2x2.jpg'
import useFetch from '../hooks/useFetch'

export default function Hero() {
  const { data } = useFetch('/profile/')
  const profile = data?.[0]

  return (
    <div className="border-b-2 border-border w-full p-2 flex justify-between">

      <div className='  w-[60%] flex  flex-col gap-2 pt-6 pl-24  pr-40'>
        <p className="font-code text-accent text-lg pl-2">HELLO I'M {profile?.name.toUpperCase()}!</p>
        <p className='font-heading text-[7em] leading-none'>Making ideas <br/> work in the <br/> <span className='text-accent'> real world </span></p>
        <p className='font-sans text-body-text text-lg leading-relaxed'>{profile?.description}</p>
      </div>

      <div className='w-[40%] flex items-center justify-center mr-8'>
        <div className='flex items-center justify-center border-4 p-2 border-accent'>

          <div className='relative w-full max-w-sm'>
            <img src={avatar} alt='Angelo R. Bazar' className='w-full border border-border' />

            <div className='absolute -left-6 bottom-6 bg-accent p-4 text-accent-text'>
              <strong className='block font-heading font-bold'>{profile?.name}</strong>
              <span className='block font-code text-xs uppercase'>Developer / Student</span>
            </div>
            <div className='w-[100%] h-[100%] bg-accent rotate-16 absolute -top-2 -z-2'>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
