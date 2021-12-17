import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

interface IState {}

interface IProps {}

const mapState2Props = ({ loading, login }) => {
  return {
    loading,
    busy: loading.effects['togo_chat_userBan/getUserBan'] || false,
    ...login,
  };
};

@connect(mapState2Props)
export default class Index extends React.PureComponent<IProps, IState> {
  state = {};

  componentDidMount() {
    let a = new RegExp(`{{(\d)}}`, 'ig');
    console.log('chxbesbsj{{name}}757676778@djdjs'.match(a));
    // 'chxbesbsj{{name}}757676778@djdjs'.match(a);
    this.props.dispatch({
      type: 'login/getInfo',
      payload: {
        a: 123,
      },
    });
    // console.log('执行', this.props.dispatch);
  }

  render() {
    // console.log(this.props);

    return (
      <Fragment>
        <img src="http://www.baidu.com/212312.png" alt="" />
        <div>logas</div>
        <div>asdasdsa</div>
        <div>asdasdsa</div>
        <Button type="primary" onClick={() => console.log(a + b)}>
          file
        </Button>
      </Fragment>
    );
  }
}
