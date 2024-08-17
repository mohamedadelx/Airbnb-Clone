import Navbar from './Navbar'
import './styles.css'
import Hero from './Hero'
import Card from './Card'
import data from './data.js'
function App() {
  const cards = data.map((item) => {
    return(
      <Card
        key = {item.id}
        item = {item}

        // {...item}
     />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </>
  )
}

export default App
