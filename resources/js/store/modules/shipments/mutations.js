let mutations = {
    create_shipment(state, shipment) {
        state.status.unshift(shipment)
    },
    fetch_shipments(state, shipments) {
        console.log(shipments);
        return state.shipments = shipments
    },
    delete_shipment(state, shipment) {
        let index = state.shipments.findIndex(item => item.id === shipment.id)
        state.shipment.splice(index, 1)
    }

}
export default mutations
