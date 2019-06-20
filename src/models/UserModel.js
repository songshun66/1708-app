export default {
    namespace: 'userModel',
    state: {
        id: 1,
        realname: '李洋',
        telephone: '130-0000-0000',
        photo: '8DB1CA7756E2350A9BC8040B43699A52.jpg',
        addr: [
            {
                id:1,
                province:'河南',
                city:'郑州',
                area:'高新区',
                address:'郑州轻工业大学'
            }
        ]
    },
    subscriptions: {},
    effects: {},
    reducers: {
        setId(state, action) {
            return { ...state, id: action.payload };
        },
        setRealname(state, action) {
            return { ...state, realname: action.payload };
        },
        setTelephone(state, action) {
            return { ...state, telephone: action.payload };
        },
        setPhoto(state, action) {
            return { ...state, photo: action.payload };
        },
        setAddr(state, action){
            return { ...state, addr: action.payload };
        }

    },
}
