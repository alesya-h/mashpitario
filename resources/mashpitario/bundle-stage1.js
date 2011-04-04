{
	_template:"mashpitario",
	setObject:[
		{
			object:"mapmeta",
			property:"stage1",
			value:{}
		},
		{
			object:"mapobjects",
			property:"stage1",
			value:{
				items:[
					{objecttype:"player", x:40, y:60, side:1},
					{objecttype:"squid", x:180, y:40, side:1},
					{objecttype:"squid", x:280, y:40, side:1},
					{objecttype:"squid", x:380, y:40, side:1},
					{objecttype:"squid", x:480, y:40, side:1},
					{objecttype:"squid", x:580, y:40, side:1},
					{objecttype:"squid", x:680, y:40, side:1},
					{objecttype:"squid", x:780, y:40, side:1},
					{objecttype:"squid", x:880, y:40, side:1},
					{objecttype:"squid", x:980, y:40, side:1},
					{objecttype:"squid", x:1180, y:40, side:1},
					{objecttype:"squid", x:1400, y:40, side:1},
					{objecttype:"squid", x:1480, y:40, side:1},
					{objecttype:"squid", x:1580, y:40, side:1},
					{objecttype:"squid", x:1680, y:40, side:1},
					{objecttype:"squid", x:1780, y:40, side:1},
					{objecttype:"squid", x:1900, y:40, side:1},
					{objecttype:"squid", x:2000, y:40, side:1},
					{objecttype:"squid", x:2080, y:40, side:1},
					{objecttype:"squid", x:2230, y:40, side:1},
					{objecttype:"squid", x:2355, y:40, side:1},
					{objecttype:"squid", x:2440, y:40, side:1},
					{objecttype:"squid", x:2570, y:180, side:1},
					{objecttype:"squid", x:2870, y:180, side:1},
					{objecttype:"squid", x:3130, y:40, side:1},
					{objecttype:"squid", x:3235, y:40, side:1},
					{objecttype:"squid", x:3445, y:40, side:1},
					{objecttype:"squid", x:3520, y:40, side:1},
					{objecttype:"squid", x:3580, y:40, side:1},
					{objecttype:"squid", x:3680, y:40, side:1},
					{objecttype:"squid", x:3780, y:40, side:1},
					{objecttype:"squid", x:3880, y:40, side:1},
					{objecttype:"squid", x:3980, y:40, side:1},
					{objecttype:"squid", x:4180, y:40, side:1},
					{objecttype:"squid", x:4400, y:40, side:1},
					{objecttype:"squid", x:4480, y:40, side:1},
					{objecttype:"squid", x:4580, y:40, side:1},
					{objecttype:"squid", x:4680, y:40, side:1},
					{objecttype:"squid", x:4780, y:40, side:1},
					{objecttype:"squid", x:4900, y:40, side:1},
					{objecttype:"squid", x:5080, y:40, side:1},
					{objecttype:"squid", x:5200, y:40, side:1},
					{objecttype:"squid", x:5500, y:40, side:1},
					{objecttype:"squid", x:5560, y:40, side:1},
					{objecttype:"squid", x:5590, y:40, side:1},
					{objecttype:"squid", x:5700, y:40, side:1},

				]
			}
		},
		{
			object:"tilemaps",
			property:"stage1",
			value:help.finalizeTilemap({
				tileset:"tiles",
				map:[
				[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
				[6,null,null,null,null,null,null,null,null,null,null,null,null,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6],
				[0,null,null,null,null,null,null,null,null,null,null,null,null,24,25,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,24,25,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6,6,6,6,6,6,6,6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,24,25,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
				[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6,6,6,6,6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,null,null,null,null,null,24,25,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,24,25,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
				[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6,6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
				[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,null,null,null,null,null,null,null,null,null,9,9,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,9,null,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,9,9,9,9,null,null,null,null,null,null,null,null,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9,9,9,null,null,null,null,null,null,null,null,null,null,null,null,9,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
				[0,null,null,null,1,null,null,null,7,8,null,null,null,null,null,2,9,null,null,null,null,null,null,null,9,9,9,null,null,null,6,6,6,null,null,null,null,1,1,null,null,null,null,2,9,null,null,null,null,null,7,8,null,null,null,null,null,null,9,1,9,7,8,null,null,null,null,null,null,null,null,1,1,9,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,9,null,null,null,null,null,1,1,null,null,null,null,9,9,9,9,9,null,null,null,null,null,null,null,null,null,null,null,null,7,8,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,9,9,9,9,null,null,null,null,null,null,null,1,1,null,null,9,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			})
		}
	]
}