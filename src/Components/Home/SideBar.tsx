export const SideBar = () => {
  return (
    <div className="w-80 p-2 bg-sky-300 shadow rounded-2xl">
      <_Topic title="Resume" subTopics={['One', 'Two', 'Three']} />
    </div>
  );
};

type _Topic_Props = {
  title: string;
  subTopics: string[];
};

const _Topic = ({ title, subTopics }: _Topic_Props) => {
  return (
    <div>
      <button className="p-1">{title}</button>
      {subTopics.length > 0 ? (
        <ul className="pl-2">
          {subTopics.map(subTopic => (
            <li>
              <button className="p-1">{subTopic}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
