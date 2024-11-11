const loremIpsumFive = [
  'Lorem ipsum odor amet, consectetuer adipiscing elit. Fames ex leo vel ultrices semper maximus a. Nibh magnis nam primis lectus purus nibh turpis netus. Ipsum eget integer consequat quisque pharetra metus. Gravida odio lacus ridiculus purus aptent arcu nostra in. Sociosqu tellus nam cras neque ac risus augue aliquet. Litora fringilla platea cras maecenas urna sem phasellus mattis suspendisse. Etiam malesuada porta eleifend conubia elementum potenti laoreet penatibus rhoncus. Fusce massa neque dignissim eget gravida. Ante aliquet rhoncus porttitor primis sit condimentum sagittis.',
  'Dapibus sagittis pulvinar imperdiet placerat, placerat natoque nam. Senectus maecenas vehicula ut nibh ultrices class imperdiet. Fusce gravida semper dictum aliquet eros turpis conubia vehicula. Placerat torquent metus a tortor mi auctor placerat hendrerit. Per litora turpis vulputate nibh neque nisl purus. Tellus vulputate mollis mus augue posuere praesent sociosqu donec.',
  'Mattis id mus integer aliquam in volutpat netus tincidunt gravida. Condimentum hendrerit magnis habitasse hac conubia. Tincidunt platea nisi consequat ac at fames pellentesque enim. Nullam venenatis tincidunt interdum malesuada; interdum auctor vivamus. Nunc luctus morbi tortor velit nostra auctor eros sollicitudin. Viverra diam mollis magna non cras gravida imperdiet. Nulla magna vitae euismod odio vivamus dui nascetur elementum quis.',
  'Fringilla id cursus consectetur pharetra nunc. Ac ligula interdum facilisi, id sapien elementum. Elit iaculis torquent consequat felis dignissim cras. Lobortis ex sapien class eget lacus vehicula. Ultrices integer blandit mi magnis purus senectus. Donec pretium lectus ad vel at fringilla sodales interdum efficitur. Aliquam lobortis dignissim vehicula velit consequat consectetur donec est. Donec lobortis elit tellus etiam varius. Duis fringilla nisi morbi viverra sit fusce et. Dictum aptent luctus habitant vehicula leo aenean lobortis.',
  'Euismod donec orci cras neque fames penatibus cubilia rutrum. Habitant non neque vulputate; feugiat vel feugiat feugiat nullam rhoncus. Donec dui amet laoreet phasellus mus. Parturient turpis dictum magna, accumsan himenaeos montes facilisi laoreet. Facilisis risus id sagittis rutrum semper. Elementum elit lobortis dis lectus sagittis ut ut consequat vivamus.',
];

type Props = {
  count?: number;
  className?: string;
};

export const LoremIpsum = ({ count = 1, className }: Props) => {
  const loremIpsum = loremIpsumFive.slice(0, count);
  return loremIpsum.map(entry => <p className={className}>{entry}</p>);
};
