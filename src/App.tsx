// import './App.css';
import { LoremIpsum } from './Components/LoremIpsum';
import { TextCard } from './Components/TextCard';
import { ThumbControl } from './Components/ThumbControl';

function App() {
  window.document.body.classList.add('bg-sky-500');
  // TODO BLOG IT UP
  // Container query your way to success
  // Smnooth scrolling from the viedo
  // https://www.youtube.com/watch?v=0rZywO6jdU4&t=561s
  // Maybe watch this? https://www.youtube.com/watch?v=IP_rtWEMR0o&t=1162s
  const y: 'top' | 'bottom' = 'top';
  return (
    <>
      {y === 'top' ? <ThumbControl y="top" /> : null}
      <div
        className={`${
          y === 'top' ? 'pt-10' : 'pb-10'
        } w-full h-full bg-gradient-to-b from-red-300 to-indigo-400`}
      >
        <div className=" pt-8 px-8">
          <section id="About" className="min-h-screen pb-4">
            <h1 className="text-4xl pb-4">About</h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
          <section id="Blog" className="min-h-screen pb-4">
            <h1 id="Blog" className="text-4xl pb-4">
              Blog
            </h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
          <section id="Contact" className="min-h-screen pb-4">
            <h1 id="Contact" className="text-4xl pb-4">
              Contact
            </h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
        </div>
      </div>
      {y === 'bottom' ? <ThumbControl y="bottom" /> : null}
    </>
  );
}

export default App;
