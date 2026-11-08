import useFetch from '../hooks/useFetch'

const LINKEDIN = 'https://www.linkedin.com/in/angelo-bazar-0a6748432'
const YEAR = new Date().getFullYear()

export default function Footer() {
  const { data } = useFetch('/profile/')
  const profile = data?.[0]

  const phone = profile?.contact_num
  const phoneHref = phone ? `tel:${phone.replace(/^0/, '+63')}` : null

  const linkClass =
    'flex items-center justify-between border-b border-border py-4 font-code text-sm uppercase tracking-widest text-primary-text transition-colors hover:text-accent'

  return (
    <footer id='contact' className='border-t border-border bg-panel/30 px-24 pt-16 pb-8'>
      <div className='flex justify-between gap-16'>

        <div className='w-1/2'>
          <p className='font-code text-sm uppercase tracking-widest text-accent'>03 / Get in touch</p>
          <h2 className='mt-2 font-heading text-6xl font-extrabold leading-none text-primary-text'>
            Let's build <br /> what's <span className='text-accent'>next.</span>
          </h2>
          <p className='mt-6 max-w-md text-lg leading-relaxed text-body-text'>
            Interested in web development, useful software, or a chance to work together? I'd love to connect.
          </p>
        </div>

        <div className='flex w-1/3 flex-col justify-center'>
          <a href={LINKEDIN} target='_blank' rel='noreferrer' className={linkClass}>
            LinkedIn <span>↗</span>
          </a>
          {phone && (
            <a href={phoneHref} className={linkClass}>
              {phone} <span>↗</span>
            </a>
          )}
          <a href='/CV.pdf' download className={linkClass}>
            Download my CV <span>↓</span>
          </a>
        </div>

      </div>

      <div className='mt-16 flex justify-between font-code text-xs uppercase tracking-widest text-muted-text'>
        <span>© {YEAR} {profile?.name ?? 'Angelo Bazar'}</span>
        <a href='#top' className='transition-colors hover:text-accent'>Back to top ↑</a>
      </div>
    </footer>
  )
}
