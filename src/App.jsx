import {
  CustomerReviews, Footer, Hero, PopularProduct,
  Services, SpecialOffer, Subscribe, SuperQuality
} from './sections'
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="p-4">
      <Hero/>
    </section>
    <section className="p-4">
      <PopularProduct/>
    </section>
    <section className="p-4">
      <SuperQuality/>
    </section>
    <section className="p-4">
      <Services/>
    </section>
    <section className="p-4">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue p-4">
      <CustomerReviews/>
    </section>
    <section className="padding-x p-4 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black p-4 pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;
