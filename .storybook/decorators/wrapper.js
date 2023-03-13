import testWrapper from '@test/decorators/wrapper';

/**
 * @param {object} [props] Any props to pass into the component
 * @param {React.ElementType} [Component='div'] The component. 'div' by default.
 * @returns {() => React.ReactNode}
 */
export default function wrapper(...args) {
	const Wrapper = testWrapper(...args);
	return (Story) => <Wrapper><Story /></Wrapper>;
}
