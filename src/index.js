import dva from 'dva';
import './index.css';
const createHistory = require("history").createBrowserHistory
// 1. Initialize
const app = dva({history:createHistory()});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/PathModel').default);
app.model(require('./models/UserModel').default);
app.model(require('./models/ProductModel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
