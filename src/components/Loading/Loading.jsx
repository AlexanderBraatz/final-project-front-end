import React, { Component } from "react";

class Loading extends Component {

    componentDidMount() {
        const { handleLoad, id }= this.props;

            handleLoad( id );

    }
    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <>
            <body className="body">
                <div className="progress-border">
                    <div className="progress">Loading....</div>
                </div>
            </body>
            </>
        );
    }
}
export default Loading;