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
	PanelColorSettings,
	withColors
} from '@wordpress/block-editor';

import './editor.scss';
import {
	SelectControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
	DropdownMenu,
	PanelBody,
	TextControl,
	ToggleControl
} from '@wordpress/components';

function Edit(props) {

	const { attributes, setAttributes, textBgColor, setTextBgColor, textColor, setTextColor } = props;


	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		});
	};

	const propsVar = useBlockProps({
		className: attributes.className,
	});

	// changing background color
	// const changeBgColor = (color) => {
	// 	setAttributes({
	// 		textBgColor: color
	// 	})
	// }

	// const changeTextColor = (color) => {
	// 	setAttributes({
	// 		textColor: color
	// 	});
	// }


	return (
		<>
			{/* Block control */}
			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			{/* creating button in toolbar */}
			<BlockControls
				controls={[
					{
						title: "button 1",
						icon: "admin-generic",
						isActive: true,
						onClick: () => { console.log('button one') }
					},
					{
						title: "button 1",
						icon: "welcome-write-blog",
						onClick: () => { console.log('button two') }
					}
				]}
			/>

			<BlockControls>
				{/* Toolbar Grouop */}
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon="editor-alignleft"
					/>
				</ToolbarGroup>
				<Button
					variant="primary"
					onClick={() => alert('Button Clicked')}
				>
					Click here
				</Button>
				<DropdownMenu
					controls={[
						{
							icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z" /></svg>,
							onClick: function noRefCheck() { },
							title: 'First Menu Item Label'
						},
						{
							icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z" /></svg>,
							onClick: function noRefCheck() { },
							title: 'Second Menu Item Label'
						}
					]}
					icon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" /></svg>}
					label="Select a direction."
					onToggle={function noRefCheck() { }}
				/>
			</BlockControls>

			{/* sidebar control */}
			<InspectorControls key="setting">


				<PanelColorSettings
					title={__('Color Settings')}
					icon="admin-appearance"
					initialOpen
					colorSettings={
						[
							{
								value: textBgColor.color,
								label: "Color",
								onChange: setTextBgColor
							}, // { (newColor) => setBackgroundColor(newColor ) }
							{
								value: textColor.color,
								label: "Text Color",
								onChange: setTextColor
							}
						]
					}
				/>
				<PanelBody
					title={__('Input Fields', 'textdomain')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Class name"
						value='fff'
						onChange={() => console.log("Hello")}
					/>
					<ToggleControl
						label="Show Class"
						onChange={(value) => console.log("Toggle", value)}
					/>
				</PanelBody>
				<PanelBody
					title={__('Color', 'textdomain')}
					icon="admin-appearance"
					initialOpen
				>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Background color', 'gutenpride')}
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={setTextBgColor} // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Text color', 'gutenpride')}
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
						//onChange={changeTextColor} // onChange event callback
						/>

						<legend className="blocks-base-control__label">
							{__('Dropdown', 'gutenpride')}
						</legend>
						<SelectControl
							help="Help text to explain the select control."
							label="Value"
							onBlur={function noRefCheck() { }}
							onChange={function noRefCheck() { }}
							onFocus={function noRefCheck() { }}
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
				</PanelBody>
				<Button
					variant="primary"
					onClick={() => alert('Button Clicked')}
				>
					Click here
				</Button>
			</InspectorControls>


			<RichText
				{...propsVar}
				value={attributes.content}
				style={{ backgroundColor: textBgColor.color, textAlign: attributes.alignment, color: textColor.color }}
				onChange={(content) => setAttributes({ content })}
				placeholder={__('Heading', 'textdomain')}
			/>
		</>
	);
}


export default withColors({
	textBgColor: "backgroundColor",
	textColor: 'color'
})(Edit)