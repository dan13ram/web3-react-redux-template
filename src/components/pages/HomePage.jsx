import React from "react";
import { connect } from "react-redux";
import { web3Actions, contractActions } from "../../actions";
import GreetingDisplay from "./GreetingDisplay";
import UpdateGreetingForm from "./UpdateGreetingForm";
import "../../assets/scss/homePage.scss";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    async componentDidMount() {
        await this.refresh();
    }

    async refresh() {
        await this.props.getGreeting();
    }

    render() {
        const { greeting } = this.props.data;
        return (
            <div className="homePage">
                <div className="homePageInner">
                    <GreetingDisplay greeting={greeting} />
                    <UpdateGreetingForm afterSubmit={this.refresh} />
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { data } = state.contract;
    return { data };
}

const actionCreators = {
    getGreeting: contractActions.getGreeting
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export default connectedHomePage;
