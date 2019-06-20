import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './ProductListPage.css';
import { connect } from 'dva';
import { Button } from 'antd-mobile';


class ProductListPage extends React.Component {

    handleClick = e => {
        console.log('click ', e);
    };


    render() {

        return (
            <div className={styles.main}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: '20%', height: '100%' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                // mode="inline"
                >
                    <Menu.Item key="1">
                        <Link to="/productListView">
                            <span>
                                <span >上衣</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">大衣外套</Menu.Item>
                    <Menu.Item key="3">裤装裙装</Menu.Item>
                    <Menu.Item key="4">配件</Menu.Item>
                </Menu >
                <div className={styles.right}>
                    {this.props.children}
                    {/* <ProductListViewPage/> */}
                </div>
                <div className={styles.Affix}>
                    <div className={styles.AffixLeft}>
                        总额:
                        <span style={{ color: 'orange' }}>{this.props.productModel.total + '￥'}</span>
                    </div>
                    <div className={styles.AffixNull} />
                    <div className={styles.AffixRight}>
                        <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">确认订单</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(({ productModel }) => ({ productModel }))(ProductListPage);