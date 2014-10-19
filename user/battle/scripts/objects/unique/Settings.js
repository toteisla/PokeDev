/*Settings = {
	movesAnimate : true, // Whether moves display an animation when used
	statTransitionDuration : 0.5, // How many seconds should health / experience, etc. transitions take?
	switchTransitionDuration : 0.2 // How many seconds should Pokémon being sent out, fainting, etc. take?
};*/
Settings = {
	"screen dimensions" : { width : 356, height : 288 },
	"framerate" : 60,
	"font" : {
		typeface : "Open Sans",
		weight : "300"
	},
	"debug mode" : false, // Whether debug mode is enabled, which shows extra details for some objects
	"animated moves" : false, // Whether moves display an animation when used
	"stat transition duration" : 0, // How many seconds should health / experience, etc. transitions take?
	"switch transition duration" : 0, // How many seconds should Pokémon being sent out, fainting, etc. take?
	"visual weather effects" : true, // Whether weather constantly displays visually, or just at the end of each turn
	"particle collision-testing" : false, // Whether weather particles should implement proper collision testing
	"sound effects" : false, // Whether sounds play or not
	"ignore missing files" : false, // Whether the battle should start even if some of the required files were not loaded successfully
	"text speed" : 4
};
_method(Settings);