import React, { Fragment } from 'react';
import styles from './index.less';
import { Button } from 'antd';
interface IState {}

interface IProps {}

export default class Index extends React.PureComponent<IProps, IState> {
  componentDidMount() {
    // window.onerror = function (msg, url, row, col, error) {
    //   console.log('错误信息')
    //   console.log({msg, url, row, col, error})
    //   return true;
    // }

    // window.addEventListener('error', (e) => {
    //   console.log('404错误');
    //   console.log(e, e.type)
    // }, true)
    // window.addEventListener("unhandledrejection", function(e){
    //   console.log('捕获到异常：', e);
    // });
    console.log(this.props);
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    return (
      <Fragment>
        <h1 className={styles.title}>Page index</h1>
        <div>2131212213</div>
        <div>2131212213</div>
        <img src="http://www.baidu.com/212312.png" alt="" />
        <Button
          type="primary"
          onClick={() => console.log(a + b)}
          style={{ width: '500px' }}
        >
          file
        </Button>
        <Button
          type="primary"
          onClick={() => this.props.history.push('/login')}
        >
          file
        </Button>
      </Fragment>
    );
  }
}
