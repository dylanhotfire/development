import * as React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

const Test: React.FunctionComponent<{}> = () => {
  return <h1 className={css(styles.foobar)}>Testing</h1>;
};

export default Test;
