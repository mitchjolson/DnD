// Reducer to grab all PCNs, EOLs, and NPIs.
const adminDashboard = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_DASHBOARD':
            return action.payload;
        default:
            return state;
    }

}



export default adminDashboard;