import React from "react";
import PropTypes from "prop-types";

const IfAnyGranted = (props) => {
    const expected = props.expected,
        actual = props.actual ? (Array.isArray(props.actual) ? props.actual : [props.actual]) : [];
    let found = false;
    for (let i = 0; i < expected.length; i++) {
        if (actual.indexOf(expected[i]) !== -1) {
            found = true;
            break;
        }
    }
    if (found) {
        return <React.Fragment>
            {props.children}
        </React.Fragment>
    } else {
        return props.unauthorized;
    }
};

IfAnyGranted.propTypes = {
    expected: PropTypes.array.isRequired,     // The expected roles
    actual: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),     // The actual roles
    unauthorized: PropTypes.node  // Node to render if the actual roles do not match any the expected
};

IfAnyGranted.defaultProps = {
    unauthorized: null
};

export default IfAnyGranted;
