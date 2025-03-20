import nigel from '../../assets/Nigel.jpeg';

export const About = () => {
  return (
    <div className="flex justify-center text-white">
      <div className="flex rounded bg-slate-600 p-4">
        <img
          className="rounded"
          src={nigel}
          alt="Randy's lovely dog; a small blonde terrier named Nigel.  (Randy not pictured)"
          width={200}
        />
        <div className="pl-4">
          <p>
            Randy Proctor is a software developer from Cincinnati, Ohio in the
            USA.
          </p>
          <p className="pt-2">
            He works as a Front-End developer for a nationwide e-commerce
            platform.
          </p>
          <p className="pt-2">
            He enjoys playing rock music, hiking, and spending time with his
            family.
          </p>
          <p className="pt-2">Please enjoy this picture of his dog, Nigel.</p>
        </div>
      </div>
    </div>
  );
};
