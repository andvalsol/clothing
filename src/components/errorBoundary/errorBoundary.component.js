import {Component} from "react";
import {ErrorImageOverlay, ErrorImageText, ErrorImageContainer} from "./errorBoundary.styles";

class ErrorBoundary extends Component {

    state = {
        hasErrored: false
    }

    // We need this so that we know that the children inside this class is throwing an error
    static getDerivedStateFromError(_) {
        // Process the error
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, _) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
