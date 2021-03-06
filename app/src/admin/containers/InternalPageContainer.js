import { connect } from "react-redux";
import InternalPage from "../components/Shared/InternalPage";

const mapStateToProps = (state) => {
    return {
        isLoading: state.Screen.main.isLoading
    };
}

export default connect(
    mapStateToProps
)(InternalPage);