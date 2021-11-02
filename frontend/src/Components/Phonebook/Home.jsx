import React, { Component } from "react";
import { connect } from "react-redux";
import { allPhones, loadingPhones, fetchPhones } from "../../Store/phones";
import Spinner from "../common.jsx/Spinner";
import PhoneList from "../PhoneList";
class Home extends Component {
	componentDidMount() {
		this.props.fetchPhones();
	}
	render() {
		const { allPhones, loadingPhones } = this.props;
		return loadingPhones ? (
			<Spinner />
		) : (
			<>
				<h1 className="card text-center">Phone Book</h1>
				<PhoneList phones={allPhones} />
			</>
		);
	}
}
const mapStateToProps = state => {
	return {
		allPhones: allPhones(state),
		loadingPhones: loadingPhones(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPhones: () => {
			dispatch(fetchPhones());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
