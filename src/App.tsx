// import './App.css';
import { LoremIpsum } from './Components/LoremIpsum';
import { TextCard } from './Components/TextCard';

function App() {
  window.document.body.classList.add('bg-sky-500');
  // TODO BLOG IT UP
  // Container query your way to success
  // Smnooth scrolling from the viedo
  // https://www.youtube.com/watch?v=0rZywO6jdU4&t=561s
  // Maybe watch this? https://www.youtube.com/watch?v=IP_rtWEMR0o&t=1162s

  return (
    <>
      <div className=" w-full h-full bg-gradient-to-b from-red-300 to-indigo-400">
        <div className=" pt-8 px-8">
          <section id="About" className="min-h-screen">
            <h1 className="text-4xl pb-4">About</h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
          <section id="Blog" className="min-h-screen">
            <h1 id="Blog" className="text-4xl pb-4">
              Blog
            </h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
          <section id="Contact" className="min-h-screen">
            <h1 id="Contact" className="text-4xl pb-4">
              Contact
            </h1>
            <TextCard>
              <LoremIpsum count={1} />
            </TextCard>
          </section>
        </div>
        <div className="flex w-full justify-between">
          <div className=" flex flex-col justify-around items-start fixed bottom-0 left-0">
            {['Left', 'Motion', 'Bright'].map((title, index) => (
              <div className="pb-12">
                <a
                  href={`#${title}`}
                  className="bg-white bg-opacity-60 text-2xl rounded pr-1 py-4"
                  key={index}
                >
                  {title}
                </a>
              </div>
            ))}
          </div>
          <div>
            <div className=" flex flex-col justify-around items-end fixed bottom-0 right-0">
              {['>', 'About', 'Blog', 'Contact'].map((title, index) => (
                <div className="pb-12">
                  <a
                    href={`#${title}`}
                    className="bg-white bg-opacity-50 text-2xl rounded-l pl-1 py-4"
                    key={index}
                  >
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
