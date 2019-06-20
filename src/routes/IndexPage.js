import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {  NavBar, Icon, TabBar } from 'antd-mobile'
import {routerRedux} from 'dva/router'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
      hidden: false,
      fullScreen: false,
    };
    
  }

  render() {
    return (
      <div className={styles.normal}>
        <NavBar
          mode="dark"
          // leftContent="Back"
          icon={<Icon type="left" onClick={()=>{window.history.back(-1)}}/>}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.pathModel.currentPath.split('/')[1]}</NavBar>
        {/* <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul> */}
        {/* <main className={styles.main}> </main> */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.props.pathModel.currentPath === '/product'}
            badge={1}
            onPress={() => {
              this.props.dispatch(routerRedux.push({
                pathname: '/product' }))
            }}
            data-seed="logId"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
                />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Order"
            key="Order"
            badge={'new'}
            selected={this.props.pathModel.currentPath === '/order'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({
                pathname: '/order' }))
            }}
            data-seed="logId1"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Help"
            key="Help"
            dot
            selected={this.props.pathModel.currentPath === '/help'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({
                pathname: '/help' }))
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="My"
            selected={this.props.pathModel.currentPath === '/my'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({
                pathname: '/my' }))
            }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>

    );
  }

}

IndexPage.propTypes = {
};

export default connect(({ pathModel }) => ({ pathModel }))(IndexPage)
// connect()(IndexPage);
