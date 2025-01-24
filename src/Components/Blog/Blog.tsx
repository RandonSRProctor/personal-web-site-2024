import { LoremIpsum } from '../utility/LoremIpsum';

export const Blog = () => {
  return (
    <div className="p-8 bg-slate-800">
      <div className="pb-8">
        <div className="bg-slate-600 rounded-lg p-8">
          <h1 className="text-white text-4xl pb-4">This is a Blog Post</h1>
          <LoremIpsum className="text-white text-2xl" />
        </div>
      </div>
      <div className="pb-8">
        <div className="bg-slate-600 rounded-lg p-8">
          <h1 className="text-white text-4xl pb-4">Another Thing</h1>
          <LoremIpsum className="text-white text-2xl pb-2" />
          <LoremIpsum className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};
