import useFetch from '../hooks/useFetch'
import Dropdown from './Dropdown'

// atype is 'PROJECT' or 'AWARD' (matches the Django Achievement.atype filter)
export default function AchievementSection({ id, label, heading, atype }) {
  const { data, loading, error } = useFetch(`/achievements/?atype=${atype}`)

  return (
    <section id={id} className='px-24 py-16'>
      <p className='font-code text-sm uppercase tracking-widest text-accent'>{label}</p>
      <h2 className='mb-8 font-heading text-5xl font-extrabold text-primary-text'>{heading}</h2>

      {loading && <p className='text-muted-text'>Loading...</p>}
      {error && <p className='text-muted-text'>Could not load data ({error}).</p>}

      <div className='flex flex-col gap-3'>
        {data?.map((item) => (
          <Dropdown key={item.id} title={item.title} description={item.description} images={item.images} />
        ))}
      </div>
    </section>
  )
}
