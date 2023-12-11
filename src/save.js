/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText,
	 useBlockProps,
	 getColorClassName
	 } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function save({ attributes }) {

	const {
		textBgColor,
		textColor,
		// customTextBgColor
	} = attributes;
	
	console.log(attributes);

	const bgClass = getColorClassName(
		'background-color',
		textBgColor
	);
	const textClass = getColorClassName(
		'color',
		textColor
	);
	

	const classes = classNames(`gutenberg-examples-align-${attributes.alignment}`, {
		[bgClass]:  bgClass,
		[textClass]: textClass
	});
	
	console.log('bgClass', bgClass);
	console.log('textBgColor', textBgColor);
	
	return (
		<RichText.Content
			{ ...useBlockProps.save({
				className: classes,
				style: {
					// backgroundColor: bgClass ? undefined : customTextBgColor,
					textAlign: attributes.alignment
				}
			}) }

			value={attributes.content}
			tagName="h1"
		/>
	);
}