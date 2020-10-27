import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const bootstrapComponent = async (
  componentName: string
  // eslint-disable-next-line consistent-return
): Promise<{ [key: string]: Array<(props: any) => Promise<void>> }> => {
  const module = await import(`./containers/${componentName}/${componentName}`);

  const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: module.default,
  });

  return {
    bootstrap: [reactLifecycles.bootstrap],
    mount: [reactLifecycles.mount],
    unmount: [reactLifecycles.unmount],
  };
};

export default bootstrapComponent;
