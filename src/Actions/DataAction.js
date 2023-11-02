import axios from 'axios';

export const fetchAllData = () => async (dispatch) => {
    try {
        dispatch({ type: 'DATA_REQUEST' });

        const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");

        dispatch({ type: 'DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'DATA_FAILURE' });
    }
};

export const selectData = (group, allTickets, orderValue) => async (dispatch) => {
    try {
        dispatch({ type: 'SELECT_DATA_REQUEST' });

        let user = false;
        let selectedData = [];

        if (group === 'status') {
            const statusSet = new Set(allTickets.map(elem => elem.status));
            const arr = Array.from(statusSet);

            arr.forEach((elem, index) => {
                const value = allTickets.filter(fElem => elem === fElem.status);
                selectedData.push({ [index]: { title: elem, value } });
            });
        } else if (group === 'user') {
            user = true;

            allTickets.allUser.forEach((elem, index) => {
                const value = allTickets.allTickets.filter(fElem => elem.id === fElem.userId);
                selectedData.push({ [index]: { title: elem.name, value } });
            });
        } else {
            const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

            priorityList.forEach((elem, index) => {
                const value = allTickets.filter(fElem => index === fElem.priority);
                selectedData.push({ [index]: { title: elem, value } });
            });
        }

        const sortFunction = (a, b) => orderValue === "title" ? a.title.localeCompare(b.title) : b.priority - a.priority;

        selectedData.forEach(elem => elem[Object.keys(elem)].value.sort(sortFunction));

        dispatch({ type: 'SELECT_DATA_SUCCESS', payload: { selectedData, user } });
    } catch (error) {
        dispatch({ type: 'SELECT_DATA_FAILURE', payload: error.message });
    }
};
