import { LinkCard } from './LinkCard';
import { LinkCardGroup } from './LinkCardGroup';

export const AppSelector = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <LinkCardGroup heading="General" subtext="Utilities & Games">
        <LinkCard to="JsonGUI" title="Json Gui" />
        <LinkCard to="." title="Conversation Timer" />
      </LinkCardGroup>

      <LinkCardGroup
        heading="Demos"
        subtext="Apps to support lectures and blog posts"
      >
        <LinkCard to="." title="Inertia 4.0 (Water Physics Simulator)" />
        <LinkCard to="." title="React Rendering Patterns" />
      </LinkCardGroup>
    </div>
  );
};
