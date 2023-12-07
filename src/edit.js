/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	const props = useBlockProps( {
		className: attributes.className,
	} );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<RichText
				{ ...props }
				value={ attributes.content }
				style={ { textAlign: attributes.alignment } }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Heading', 'textdomain' ) }
			/>
		</>
	);
}
