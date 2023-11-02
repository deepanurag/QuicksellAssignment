import { createReducer } from "@reduxjs/toolkit";

const initialDataState = { loading: false, allTickets: [], allUser: [] };
const initialSelectDataState = { loading: false, selectedData: [], user: null, message: null };

export const DataReducer = createReducer(initialDataState, {
    DATA_REQUEST: (state) => {
        state.loading = true;
    },
    DATA_SUCCESS: (state, action) => {
        return {
            loading: false,
            allTickets: action.payload.tickets,
            allUser: action.payload.users
        };
    },
    DATA_FAILURE: (state) => {
        return {
            loading: false,
            allTickets: [],
            allUser: []
        };
    },
});

export const SelectDataReducer = createReducer(initialSelectDataState, {
    SELECT_DATA_REQUEST: (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    SELECT_DATA_SUCCESS: (state, action) => {
        return {
            loading: false,
            selectedData: action.payload.selectedData,
            user: action.payload.user,
            message: null
        };
    },
    SELECT_DATA_FAILURE: (state, action) => {
        return {
            loading: false,
            selectedData: [],
            user: null,
            message: action.payload.message
        };
    },
});
