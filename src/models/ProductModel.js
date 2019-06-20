export default {
    namespace: 'productModel',
    state: {
        data: [{
            id: 1,
            name: '短外套',
            photo: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            price: 26,
            num: 0,
            description: '360度清洗，干净整洁',
        },
        {
            id: 2,
            name: '长外套',
            photo: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            price: 50,
            num: 0,
            description: '全面烘干，干净整洁',
        },],
        
        total: 0
    },
    subscriptions: {},
    effects: {},
    reducers: {
        setData(state, action) {
            return { ...state, data: action.payload };
        },
        setTotal(state, action) {
            return { ...state, total: action.payload };
        }
    },
}
