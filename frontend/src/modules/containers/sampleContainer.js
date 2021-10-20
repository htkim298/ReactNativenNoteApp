// import Sample from "../../components/Sample";
import Sample from 'components/Sample';
import * as actions from "modules/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    // console.log("Sample_mapStateToProps: ", state.sample.title[0].Name)
    return {
        title: state.sample.title,
    }
};

const mapDispatchToProps = (dispatch) => ({
    ongetSampleData: () => dispatch(actions.getSampleData()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Sample);

export default Container; 