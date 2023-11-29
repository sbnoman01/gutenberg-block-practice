<?php 


/*
* Plugin Name:       Block builder
* Plugin URI:        https://wprealizer.com/plugins/the-basics/
* Description:       Handle the basics with this plugin.
* Version:           0.0.1
* Requires at least: 5.2
* Requires PHP:      7.2
* Author:            WPRealizer
* Author URI:        https://wprealizer.com/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Update URI:        https://example.com/my-plugin/
* Text Domain:       firstblock
* Domain Path:       /languages
*/


function blocks_firstblock_init(){
    register_block_type_from_metadata( __DIR__ ) ;
}
add_action( 'init', "blocks_firstblock_init") ;