import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center font-inter">
      <h1 className="display-large">Display L</h1>
      <h1 className="display-large-strong">Display L-Strong</h1>
      <h1 className="display-medium">Display M</h1>
      <h1 className="display-medium-strong">Display M-Strong</h1>
      <h1 className="display-small">Display S</h1>
      <h1 className="display-small-strong">Display S-Strong</h1>
      <h1 className="heading-1">Heading 1</h1>
      <h1 className="heading-2">Heading 2</h1>
      <h1 className="heading-3">Heading 3</h1>
      <h1 className="heading-4">Heading 4</h1>
      <h1 className="heading-5">Heading 5</h1>
      <span className="body-large">Body L</span>
      <span className="body-large-strong">Body L-Strong</span>
      <span className="body-medium">Body M</span>
      <span className="body-medium-strong">Body M-Strong</span>
      <span className="body-small">Body S</span>
      <span className="body-small-strong">Body S-Strong</span>
      <span className="description-large">Description L</span>
      <span className="description-large-strong">Description L-Strong</span>
      <span className="description-medium">Description M</span>
      <span className="description-medium-strong">Description M-Strong</span>
      <span className="description-small">Description S</span>
      <span className="description-small-strong">Description S-Strong</span>
    </div>
  );
};
