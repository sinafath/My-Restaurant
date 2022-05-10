import type { FC } from "react";

function withProps<props>(
  Component: FC<props>,
  presetProps: Partial<props>
) {
  return function innerPartial(laterProps: Partial<props>) {
    const props = { ...presetProps, ...laterProps } as props;
    return <Component {...props} />;
  };
}

export default withProps;

