const actions={
    create: (context,statu) => {
        context.commit('create',statu)
    },
    delete: (context,statu) => {
        context.commit('delete',statu)
    },

}
export  default actions;
