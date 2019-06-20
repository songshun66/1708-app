import React from 'react';
import { connect } from 'dva';
import { Card, WhiteSpace, List, Picker, InputItem,Button} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);

class AddressPage extends React.Component {
    state = {
        visible: false,
        addr:[],
        address:''
    };
    options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];
    handleAddAddress() {

        let addr = this.state.addr;
        let obj = {
            'id': this.props.userModel.addr.length + 1,
            'province': addr.shift(),
            'city': addr.shift(),
            'area': addr.shift(),
            'address': this.state.address
        };
        let tempAddr = this.props.userModel.addr;
        tempAddr.push(obj)
        this.props.dispatch({
            type: 'userModel/setAddr',
            payload: tempAddr
        });
        this.setState({address:''})
    }

    onChange(){

    }

    render() {
        const listItem = this.props.userModel.addr.map((item) => {
            return (
                <Item arrow="horizontal" key={item.id} multipleLine onClick={() => { }}>
                    {`${item.province}/${item.city}/${item.area}`} <Brief>{item.address}</Brief>
                </Item>
            )
        })


        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={this.props.userModel.realname}
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={this.props.userModel.telephone}
                    />
                    <List renderHeader={() => '您的地址'} className="my-list">
                        {listItem}
                    </List>
                </Card>

                <List renderHeader={() => <h3>添加地址</h3>}>
                    <Picker
                        title="选择地区"
                        extra="点击选择地址！"
                        data={this.options}
                        // onOk={v => this.handleAddAddress(v)}
                        value={this.state.addr}
                        onChange={v => this.setState({ addr: v })}
                        onOk={v => this.setState({ addr: v })}
                    >
                        <CustomChildren><strong>地址</strong></CustomChildren>
                    </Picker>
                    {/* <hr /> */}
                    <InputItem
                        onChange={(e)=>{this.setState({address:e})}}
                        clear
                        placeholder="address"
                        ref={el => this.autoFocusInst = el}
                    >详细地址</InputItem>
                    <Button type="primary" onClick={this.handleAddAddress.bind(this)}>添加地址</Button>
                </List>


            </div>
        );
    }

}

export default connect(((userModel) => userModel))(AddressPage);