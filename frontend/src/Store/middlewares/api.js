import axios from "axios";
import * as actions from "../api";
const apiMiddleware =
	({ dispatch }) =>
	next =>
	async action => {
		if (action.type !== actions.apiCallStart.type) return next(action);
		const { url, method, data, onStart, onSuccess, onFailure, payload = {} } = action.payload;
		if (onStart) dispatch({ type: onStart });
		next(action);
		try {
			const response = await axios({
				baseURL: "https://5000-olive-rooster-7siqco38.ws-eu17.gitpod.io/",
				url,
				data,
				method
			});
			dispatch(actions.apiCallSuccess(response.data.data));
			if (onSuccess) {
				dispatch({ type: onSuccess, payload: { phones: response.data.data } });
			}
		} catch (error) {
			dispatch(actions.apiCallFailed(error.message));
			if (onFailure) dispatch({ type: onFailure, payload: { ...error.message, ...payload } });
		}
	};

export default apiMiddleware;
