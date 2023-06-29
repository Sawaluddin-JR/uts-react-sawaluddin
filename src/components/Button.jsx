// eslint-disable-next-line react/prop-types
const Button = ({ variant = "filled", className, ...props }) => {
    return (
        <button
            className={`button ${variant && `button-${variant}`} ${className}`}
            {...props}
        />
    );
}

export default Button
