import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Button, Card } from 'antd';
import * as Highcharts from 'highcharts';
import * as echarts from 'echarts';

interface IState {
  infoShow: boolean;
  infoList: [];
}

interface IProps {}

const mapState2Props = ({ loading, errinfo }) => {
  return {
    loading,
    busy: loading.effects['togo_chat_userBan/getUserBan'] || false,
    ...errinfo,
  };
};

@connect(mapState2Props)
export default class Index extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      infoShow: false,
      infoList: [],
    };
  }

  callBack = (list: []) => {
    var myChart = echarts.init(document.getElementById('container'));
    // console.log(list)
    let timeArr = list.map((item) => item.time);
    const _this = this;

    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['2021-10-8'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [list.length],
          type: 'bar',
        },
      ],
    });

    myChart.on('click', function (params) {
      // console.log(params)
      if (params.componentType === 'series') {
        // 点击到了 markPoint 上
        if (params.seriesIndex === 0) {
          _this.setState({
            infoShow: true,
            infoList: list,
          });
          // 点击到了 index 为 5 的 series 的 markPoint 上。
        }
      } else if (params.componentType === 'series') {
        if (params.seriesType === 'graph') {
          if (params.dataType === 'edge') {
            // 点击到了 graph 的 edge（边）上。
          } else {
            // 点击到了 graph 的 node（节点）上。
          }
        }
      }
    });
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'errinfo/getInfo',
      payload: {
        a: 123,
      },
      callBack: this.callBack.bind(this),
    });
  }

  render() {
    // console.log(this.props);
    const { infoShow, infoList } = this.state;

    return (
      <Fragment>
        <div>errinfo</div>
        <div id="container" style={{ width: '1000px', height: '400px' }}></div>
        {infoShow && (
          <div style={{ display: 'flex' }}>
            {infoList.map((item) => (
              <Card title={item.time} style={{ width: 300 }} key={item.time}>
                <p>type: {item?.type}</p>
                {item?.errapi && <p>errapi: {item.errapi}</p>}
                {item?.status && <p>status: {item.status}</p>}
                {item?.html && <p>html: {item.html}</p>}
                {item?.line && <p>line: {item.line}</p>}
                {item?.column && <p>column: {item.column}</p>}
                {item?.source && <p>source: {item.source}</p>}
                {item?.url && <p>url: {item?.url}</p>}
              </Card>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}
