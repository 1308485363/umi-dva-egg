import React, { Fragment } from 'react';
import { connect } from 'dva';

interface IState {
    
}

interface IProps {

}

const mapState2Props = ({ loading, login }) => {
    return {
        loading,
        busy:
            loading.effects['togo_chat_userBan/getUserBan'] ||
            false,
        ...login,
    };
};

@connect(mapState2Props)
export default class Index extends React.PureComponent<IProps, IState> {
    state = {

    }

    componentDidMount() {
        this.props.dispatch({
            type: 'login/getInfo',
            payload: {
                a: 123
            }
        })
        // console.log('执行', this.props.dispatch)
    }
    

    render() {
        console.log(this.props)

        return <Fragment>
            <div>logas</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
        </Fragment>
    }
}