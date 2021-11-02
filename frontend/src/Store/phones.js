import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "./api";
const phonesSlice = createSlice({
	initialState: {
		list: [],
		loading: false
	},
	name: "phones",
	reducers: {
		fetchingPhones: (phonesSlice, action) => {
			phonesSlice.loading = true;
		},
		phonesFetched: (phonesSlice, action) => {
			const { phones } = action.payload;
			phonesSlice.list = phones;
			phonesSlice.loading = false;
		},
		fetchingPhonesFailure: (phonesSlice, action) => {
			phonesSlice.loading = false;
		}
	}
});

// REDUCER
export default phonesSlice.reducer;

// ACTIONS
const { fetchingPhones, phonesFetched, fetchingPhonesFailure } = phonesSlice.actions;

// EXPORTED ACTIONS
const fetchPhones = _ => async (dispatch, getState) => {
	dispatch(
		apiCallStart({
			url: `/phones`,
			data: {},
			method: "GET",
			onStart: fetchingPhones.type,
			onSuccess: phonesFetched.type,
			onFailure: fetchingPhonesFailure.type,
			payload: { reset: "" }
		})
	);
};

export { fetchPhones };

// SELECTORS
const allPhones = state => state?.phones?.list;
const loadingPhones = state => state?.phones?.loading;

export { allPhones, loadingPhones };
