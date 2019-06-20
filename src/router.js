import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './components/ProductPage'
import OrderPage from './components/OrderPage'
import HelpPage from './components/HelpPage'
import MyPage from './components/MyPage'
import AddressPage from './components/AddressPage';
import ProductInfoPage from './components/ProductInfoPage'
import ProductListPage from './components/ProductListPage'
import ProductListViewPage from './components/ProductListViewPage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <IndexPage>
          <Switch>
            <Redirect path='/' exact to="/product" />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/help" exact component={HelpPage} />
            <Route path="/my" exact component={MyPage} />
            <Route path="/address" exact component={AddressPage} />
            <Route path="/productInfo" exact component={ProductInfoPage} />
            {/* <Route path="/productList" exact component={ProductListPage} /> */}
            <ProductListPage>
              <Switch>
                <Redirect path='productList'  to="/productListView" />
                <Route path="/productListView" exact component={ProductListViewPage} />
              </Switch>
            </ProductListPage>
          </Switch>
        </IndexPage>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
