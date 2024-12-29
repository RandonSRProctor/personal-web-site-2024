import { LoremIpsum } from './LoremIpsum';
import { TextCard } from './TextCard';

export const Body = () => {
  return (
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
  );
};
