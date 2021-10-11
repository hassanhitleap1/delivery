let actions = {
    createPost({commit}, post) {
        axios.post('/api/status', post)
            .then(res => {
                commit('CREATE_POST', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchPosts({commit}) {
        axios.get('/api/status')
            .then(res => {
                console.log( res.data)
                commit('FETCH_POSTS', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletePost({commit}, post) {
        axios.delete(`/api/status/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_POST', post)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions
