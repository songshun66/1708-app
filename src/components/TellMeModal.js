import React from 'react';
import { connect } from 'dva';
import { Modal } from 'antd-mobile';
class TellMeModal extends React.Component {


    render() {
        const { visible, onCancel } = this.props;
        return (
            <Modal
                visible={visible}
                onClose={onCancel}
                transparent
                maskClosable={false}
                title="联系我们"
                // cancelText="我知道了"
                footer={[{ text: '我知道了', onPress: () => { onCancel() } }]}
            >
                <div>
                    1300-0000-000
                </div>
            </Modal>
        );
    }

}

export default connect()(TellMeModal);
