import React from 'react';
import { connect } from 'dva';
import styles from './MyPage.css'
import { List } from 'antd-mobile';
import TellMeModal from './TellMeModal'
import AvatarModal from './AvatarModal'
import { routerRedux } from 'dva/router'
const Item = List.Item;
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleTellMe: false,
            visibleAvatar: false,
        }
    }
    onCancelTellMe = () => {
        this.setState({ visibleTellMe: false })
    }
    onOpenAvatar = () => {
        this.setState({ visibleAvatar: true })
    }
    onCancelAvatar = () => {
        this.setState({ visibleAvatar: false })
    }

    render() {
        return (
            <div className={styles.my}>
                <div className={styles.main}>
                    <div className={styles.avatar} >
                       <img src={'http://10.84.130.41:5000/avatars/'+this.props.userModel.photo} className={styles.img} onClick={this.onOpenAvatar.bind(this)} alt="个人头像" />
                    </div>
                    <div className={styles.hello}>你好,{this.props.userModel.realname}!</div>
                    <div className={styles.money}>
                        <div className={styles.left}>
                            <div className={styles.leftTitle}>
                              还有
                        </div>
                            <div className={styles.leftBody}>
                                50
                        </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.rightBody}>
                                充值
                            </div>
                            {/* <Button></Button> */}
                        </div>
                    </div>
                </div>
                <List className={styles.myList}>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => { this.props.dispatch(routerRedux.push({ pathname: '/address' })) }}
                        platform="android"
                        multipleLine
                    >
                        常用地址
                    </Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { this.setState({ visibleTellMe: true }) }}
                        arrow="horizontal"
                        platform="android"
                        multipleLine
                    >
                        联系我们
                    </Item>
                </List>
                <TellMeModal
                    onCancel={this.onCancelTellMe}
                    visible={this.state.visibleTellMe}
                />
                <AvatarModal
                    onCancel={this.onCancelAvatar}
                    visible={this.state.visibleAvatar}
                    avatarUrl={this.state.avatarUrl}
                />

            </div>

        );
    }

}

export default connect(({ userModel }) => ({ userModel }))(MyPage);