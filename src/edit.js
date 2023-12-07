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
	InspectorControls,
	ColorPalette,
	TextControl
} from '@wordpress/block-editor';

import './editor.scss';
import { SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		});
	};

	const props = useBlockProps({
		className: attributes.className,
	});

	// changing background color
	const changeBgColor = (color) => {
		setAttributes({
			textBgColor: color
		})
	}

	const changeTextColor = ( color ) => {
		setAttributes({
			textColor: color
		});
	}

	console.log(attributes.textBgColor);
	return (
		<>
			{/* Block control */}
			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			{/*  */}
			<InspectorControls key="setting">
				<fieldset>
					<legend className="blocks-base-control__label">
						{__('Background color', 'gutenpride')}
					</legend>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={changeBgColor} // onChange event callback
					/>
				</fieldset>
				<fieldset>
					<legend className="blocks-base-control__label">
						{__('Text color', 'gutenpride')}
					</legend>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={changeTextColor} // onChange event callback
					/>

					<legend className="blocks-base-control__label">
						{__('Dropdown', 'gutenpride')}
					</legend>
					<SelectControl
						help="Help text to explain the select control."
						label="Value"
						onBlur={function noRefCheck(){}}
						onChange={function noRefCheck(){}}
						onFocus={function noRefCheck(){}}
						options={[
							{
							disabled: true,
							label: 'Select an Option',
							value: ''
							},
							{
							label: 'Option A',
							value: 'a'
							},
							{
							label: 'Option B',
							value: 'b'
							},
							{
							label: 'Option C',
							value: 'c'
							}
						]}
						/>
				</fieldset>
			</InspectorControls>
			

			<RichText
				{...props}
				value={attributes.content}
				style={{ backgroundColor: attributes.textBgColor, textAlign: attributes.alignment, color: attributes.textColor }}
				onChange={(content) => setAttributes({ content })}
				placeholder={__('Heading', 'textdomain')}
			/>
		</>
	);
}
