{
	// Graphic resources.
	addImage:[
		["sprites","resources/mashpitario/cels.png"],
		["player","resources/mashpitario/player.png"],
		["foe","resources/mashpitario/foe.png"],
		["bg","resources/mashpitario/bg1.png"],
		["font","resources/mashpitario/font.png"],
		["fontbig","resources/mashpitario/fontbig.png"],
		["logo","resources/mashpitario/logo.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"player",tileh:42,tilew:30,tilerow:10,gapx:0,gapy:0},
		{id:"tiles",image:"sprites",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0},
		{id:"enemy-gop",image:"foe",tileh:42,tilew:30,tilerow:10,gapx:0,gapy:0},
		{id:"tiledfont",image:"font",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
	],
	
	// Audio resources	
	addAudio:[
		["beginning",[audioserver+"beginning.mp3",audioserver+"beginning.ogg"],{channel:"sfx"}],
		["ingame",[audioserver+"mashpit_OST.mp3",audioserver+"mashpit_OST.ogg"],{channel:"bgmusic",loop:true}],
		["ending",[audioserver+"victory.mp3",audioserver+"victory.ogg"],{channel:"sfx"}],
		["default-menu-option",[audioserver+"select.mp3",audioserver+"select.ogg"],{channel:"sfx"}],
		["default-menu-confirm",[audioserver+"start.mp3",audioserver+"start.ogg"],{channel:"sfx"}],
		["beep",[audioserver+"voice_narrator.mp3",audioserver+"voice_narrator.ogg"],{channel:"sfx"}],
		["die",[audioserver+"death.mp3",audioserver+"death.ogg"],{channel:"sfx"}],
		["hit",[audioserver+"hit.mp3",audioserver+"hit.ogg"],{channel:"sfx"}],
		["jump",[audioserver+"mashpitario-jump.mp3",audioserver+"mashpitario-jump.ogg"],{channel:"sfx"}]	
	],
	
	// Sub-resource files.
	addBundle:[
		{file:"resources/mashpitario/bundle-dialogues.js"},
		{file:"resources/mashpitario/bundle-stage1.js"}
	]
}
