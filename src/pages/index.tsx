import React, { Fragment } from 'react';
import styles from './index.less';
import { Button } from 'antd';
interface IState {}

interface IProps {}

export default class Index extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <Fragment>
        <h1 className={styles.title}>Page index</h1>
        <div>2131212213</div>
        <div>2131212213</div>
        <Button type="primary">file</Button>
      </Fragment>
    );
  }
}
