// One collapsible item: title (always visible) + description, images, certificates (when open)
export default function Dropdown({ title, description, images = [] }) {
  const isCertificate = (img) => img.name.toLowerCase().includes('certificate')
  const photos = images.filter((img) => !isCertificate(img))
  const certificates = images.filter(isCertificate)

  return (
    <details className='group border border-border bg-panel/30'>
      <summary className='flex cursor-pointer list-none items-center justify-between p-5 font-heading text-2xl font-bold text-primary-text [&::-webkit-details-marker]:hidden'>
        {title}
        <span className='font-code text-3xl text-accent transition-transform group-open:rotate-45'>+</span>
      </summary>

      <div className='flex flex-col gap-6 border-t border-border p-5'>
        <p className='text-lg leading-relaxed text-body-text'>{description}</p>

        {photos.length > 0 && (
          <div className='flex flex-wrap gap-4'>
            {photos.map((img) => (
              <a key={img.img} href={img.img} target='_blank' rel='noreferrer'>
                <img src={img.img} alt={img.name} className='h-48 border border-border object-cover' />
              </a>
            ))}
          </div>
        )}

        {certificates.length > 0 && (
          <div>
            <p className='mb-3 font-code text-xs uppercase tracking-widest text-accent'>Certificate</p>
            <div className='flex flex-wrap gap-4'>
              {certificates.map((img) => (
                <a key={img.img} href={img.img} target='_blank' rel='noreferrer'>
                  <img src={img.img} alt={img.name} className='h-48 border border-accent object-cover' />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </details>
  )
}
