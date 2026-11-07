import Hero from './components/Hero'
import AchievementSection from './components/AchievementSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />

      <AchievementSection id='projects' label='01 / Selected builds' heading='Projects' atype='PROJECT' />
      <AchievementSection id='awards' label='02 / Recognition' heading='Awards' atype='AWARD' />

      <Footer />
    </>
  )
}

export default App
