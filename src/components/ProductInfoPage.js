import React from 'react';
import { connect } from 'dva';
class ProductInfoPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this ProductInfoPage</h1>
            </div>

        );
    }

}

export default connect()(ProductInfoPage);