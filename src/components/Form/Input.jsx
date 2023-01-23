import React from 'react'

const Input = ({config, error, onInputChange}) => {
    const {label, ...rest} = config;

    return (
        <div className="form-group">
            <label>
                {label}
            </label>

            <input
                {...rest}
                autoComplete={"off"}
                onChange={onInputChange}
            />
            <span data-msg={Boolean(error)}>{error}</span>
        </div>
    )
}

export default Input