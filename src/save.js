/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<RichText.Content
			className={`gutenberg-examples-align-${attributes.alignment}`}
			style={{backgroundColor: attributes.textBgColor, textAlign: attributes.alignment, color: attributes.textColor}}
			value={attributes.content}
			tagName="h1"
		/>
	);
}