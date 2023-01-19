import React from 'react'

const Input = ({config}) => {
    const {label, ...rest} = config;

    return (
        <div className="form-group">
            <label>
                {label}
            </label>

            <input
                {...rest}
                autoComplete={"off"}
            />
            <span data-msg={false}>Error message</span>
        </div>
    )
}

export default Input