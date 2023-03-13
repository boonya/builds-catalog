/**
 * @param {object} options
 * @param {*} [options.props]
 * @param {React.ElementType} [options.Component=div]
 * @returns {React.Component}
 */
export default function wrapper(props, Component = 'div') {
	return ({children}) => <Component {...props}>{children}</Component>;
}
