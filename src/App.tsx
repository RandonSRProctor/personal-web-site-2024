// import './App.css';
import { LoremIpsum } from './Components/LoremIpsum';
import { TextCard } from './Components/TextCard';
import { NavBar } from './Components/NavBar';

function App() {
  // window.document.body.classList.add('bg-sky-500');
  // TODO BLOG IT UP
  // Container query your way to success
  // Smnooth scrolling from the viedo
  // https://www.youtube.com/watch?v=0rZywO6jdU4&t=561s
  // Maybe watch this? https://www.youtube.com/watch?v=IP_rtWEMR0o&t=1162s

  return (
    <>
      <NavBar />
      <div className="pt-8 sm:pt-24 px-8 w-full bg-gradient-to-b from-rose-400 to-indigo-400">
        <section id="About" className="h-screen pb-4">
          <h1 className="text-4xl pb-4">About</h1>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
        </section>
        <section id="Blog" className="h-screen pb-4">
          <h1 id="Blog" className="text-4xl pb-4">
            Blog
          </h1>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
        </section>
        <section id="Contact" className="h-screen pb-4">
          <h1 id="Contact" className="text-4xl pb-4">
            Contact
          </h1>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
          <TextCard>
            <LoremIpsum count={1} />
          </TextCard>
        </section>
      </div>
    </>
  );
}

export default App;
