import React from 'react';
import { ListView, Stepper } from 'antd-mobile';
import styles from './ProductListViewPage.css';
import { connect } from 'dva';


let pageIndex = 0;

class ProductListViewPage extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
            val: 0,
        };
    }

    componentDidMount() {
        this.rData = this.props.productModel.data;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
    }

    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.rData = { ...this.rData, ...this.state.data(++pageIndex) };
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
    }

    onChange = (value, id) => {
        let data = this.props.productModel.data;
        let total=0;
        data.forEach((item) => {
            if (id === item.id) {
                item.num = value
            }
            total+=item.num*item.price;
        })
        this.props.dispatch({
            type: 'productModel/setData',
            payload:data
        });
        this.props.dispatch({
            type: 'productModel/setTotal',
            payload:total
        });
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = this.props.productModel.data.length - 1;
        const row = (rowID) => {
            if (index < 0) {
                index = this.props.productModel.data.length - 1;
            }
            const obj = this.props.productModel.data[index--];
            return (
                <div key={rowID}>
                    <div className={styles.item}>
                        <img className={styles.photo} src={obj.photo} alt="" />
                        <div className={styles.text}>
                            <div className={styles.textTitle}>{obj.name}</div>
                            <div className={styles.textBody}>{obj.description}</div>
                        </div>
                        <div>
                            <Stepper
                                style={{ width: '100%', minWidth: '100px', marginTop: '40px', right: '0' }}
                                showNumber
                                max={99}
                                min={0}
                                value={obj.num}
                                onChange={(value) => { this.onChange(value, obj.id) }}
                            />
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <ListView
                style={{height:'100%'}}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default connect(({ productModel }) => ({ productModel }))(ProductListViewPage);