{
	setObject:[
		{
			object:"dialogues",
			property:"intro",
			value:{
		  		font:"big",
		  		skipkey:"a",
		  		esckey:"b",
		  		who:{
		  			narrator:{
		  				x:10,
		  				y:150
		  			}
		  		},
		  		scenes:[
		  			{
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"Welcome to Mashpitario world!","Clear the stage to win!"
		  				]
		  			}
		  		]
		  	}
		  },
		  {
		  	object:"dialogues",
		  	property:"ending",
		  	value:{
		  		font:"big",
		  		skipkey:"a",
		  		esckey:"b",
		  		who:{
		  			narrator:{
		  				x:10,
		  				y:150
		  			}
		  		},
		  		scenes:[
		  			{
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"Well done! Thanks for playing!"
		  				]
		  			},
		  			{
		  				font:"small",
		  				speed:2,
		  				spacing:2,
		  				push:gbox.getScreenHH(),
		  				audiomusic:"ending",
		  				scroller:[
		  					"MASHPITARIO",
		  					"A SHORT GAME DEVELOPED AT GAMEDEV STARTUP 2011",
		  					"","","",
		  					"STORY BY",
		  					"MASHPITARIO TEAM",
		  					"","",
		  					"MUSIC BY",
							"IRINA NIKITINA",
		  					"","",
		  					"LEVEL DESIGN BY",
		  					"VLADISLAV BOLOGA",
		  					"","",
		  					"GRAPHICS BY",
		  					"PAVEL SUGAKOV",
		  					"VLADIASLAV BOLOGA",
		  					"AND MANY MORE",
		  					"","",
		  					"SOUND EFFECTS BY",
		  					"IRINA NIKITINA",
		  					"","","",		  					
		  					"PROGRAMMING",
		  					"ALES GUZIK",
		  					"","",
		  					"CREATED USING THE AKIHABARA ENGINE",
		  					"BY KESIEV (c)2010",
		  					"WWW.KESIEV.COM",
							"","","","","","","","","","","",
							"THANK YOU FOR PLAYING!",
							"",
							"THE END"
		  				
		  				]
		  			}
		  		]
		  	}
		}
	]
}
