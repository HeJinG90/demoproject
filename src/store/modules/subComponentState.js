import * as types from '../mutation-types'

export default {
    namespaced: true,
    state: {
        count: 0,
        // arr: [
        //     { id: 1, text: '一' },
        //     { id: 2, text: '二' }
        // ]
    },
    getters: {
        gettersNumMinus(state) {
            return state.count;
        },
        gettersArrquery(state) {
            return state.arr;
        }


    },
    mutations: {
        // mutationNumAdd(state, num) { //这里state 对应上面那个state
        //     state.count = state.count + num;
        // }
        [types.MUTATIONNUMADD](state, num) { //这里state 对应上面那个state
            state.count = state.count + num;
        }
    },
    actions: {
        actionNumAdd(context) { //context 与 store 实例具有相同方法和属性的 context 对象  但不是 store 实例本身了
            context.commit(types.MUTATIONNUMADD, 10);
        }

    }


}