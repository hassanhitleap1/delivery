const actions={
    createStatus({commit}, post) {
        axios.post('/api/status', post)
            .then(res => {
                commit('CREATE_State', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchstatus({commit}) {
        axios.get('/api/status')
            .then(res => {
                commit('FETCH_status', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletestatus({commit}, statu) {
        axios.delete(`/api/status/${statu.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_State', statu)
            }).catch(err => {
            console.log(err)
        })
    },
    create: (context,statu) => {
        context.commit('create',statu)
    },
    delete: (context,statu) => {
        context.commit('delete',statu)
    },

}
export  default actions;
