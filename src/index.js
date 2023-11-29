console.log('block file loaded 1');
// const registerBlockType = wp.blocks.registerBlockType;
// var createElement = wp.element.createElement;

import { registerBlockType } from "@wordpress/blocks"
import { useBlockProps } from "@wordpress/block-editor"
import "./style.scss";

registerBlockType("block-course/firstblock", {
    edit: function(){
        const BlockProps = useBlockProps();
        return <h1 {...BlockProps} >Hello world</h1>
    },
    save: function() {
        const BlockProps = useBlockProps.save();
        return <h1 {...BlockProps}>Hello world renderss</h1>
    }
})  