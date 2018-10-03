import React from "react";

const Headers = (props) => {
    return (
        <div>
            <div className="carl-weathers-header">
                <h1 className="carl">Carl</h1>
                <h1 className="weathers">Weathers</h1>
                <div className="sub-header">
                    <small className="sub-header"> (so you don't have to)</small>
                </div><br />
            </div>
        </div>
    )
}

export default Headers;