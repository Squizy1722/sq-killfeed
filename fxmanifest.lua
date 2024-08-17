fx_version 'cerulean'
game 'gta5'

description 'Sq-KillFeed'
version '1.0.0'

ui_page 'ui/index.html'

shared_scripts {
	'config.lua'
}

client_script 'client.lua'

server_script 'server.lua'

files { -- Credits to https://github.com/LVRP-BEN/bl_coords for clipboard copy method
    'ui/index.html',
    'ui/style.css',
    'ui/main.js',
    'ui/images/*.png'
}
