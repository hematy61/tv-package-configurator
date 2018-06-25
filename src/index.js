
// ===============================================================
const groupsNames = [
				{ name: "Adventure",
					class: "adventure",
					price: 4,
					channels: ["Peachtree TV", "Space", "Bravo", "American Heroes Channel", "Paramount"],
					channelsPrice: ["$5.00", "$8.00", "$8.00", "$1.99", "$2.99"],
					channelsNumber: [121, 122, 123, 124, 125],
					ids: ["peachtree", "space", "bravo", "american-heroes-channel", "paramount"]
				},
				{ name: "Cinema",
					class: "cinema",
					price: 3,
					channels: ["CHCH", "IFC", "Documentary", "Rewind Channel", "Silver Screen Classics"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [261, 262, 264, 265, 266],
					ids: ["chch", "ifc", "documentary", "rewindchannel", "silver-screen-classics"]
				},
				{ name: "Divertissement",
					class: "divertissement",
					price: 3,
					channels: ["LCN", "ICI ARTV", "Canal D", "Z", "Zeste", "Évasion", "ICI Explora"],
					channelsPrice: ["$1.99", "$2.99", "$8.00", "$8.00", "$4.00", "$4.00", "$4.00"],
					channelsNumber: [138, 421, 423, 424, 425, 426, 427],
					ids: ["lcn", "ici-artv", "canal-d", "z", "zeste", "evasion", "ici-explora"]
				},
				{ name: "Entertainment",
					class: "entertainment",
					price: 4,
					channels: ["Showcase", "E!", "OWN", "The Comedy Network", "Gusto"],
					channelsPrice: ["$1.99", "$6.00", "$4.00", "$8.00", "$6.00"],
					channelsNumber: [111, 113, 114, "115-116", 117],
					ids: ["showcase", "e!", "own", "the-comedy-network", "gusto"]
				},
				{ name: "Explore",
					class: "explore",
					price: 4,
					channels: ["National Geographic Channel", "Discovery Science", "DIY Network", "Nat Geo Wild", "Investigation Discovery"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [272, 273, 275, 276, 277],
					ids: ["national-geographic-channel", "discovery-science", "diy-network", "nat-geo-wild", "investigation-discovery"]
				},
				{ name: "Famille",
					class: "famille",
					price: 4,
					channels: ["VRAK", "Télé-Québec", "Télétoon", "RDS Info", "addikTV", "Series+"],
					channelsPrice: ["$8.00", "$1.99", "$1.99", "$1.99", "$2.99", "$1.99"],
					channelsNumber: [411, 412, 413, 414, 415, 422],
					ids: ["vrak", "Tele-quebec", "teletoon", "rds-info", "addiktv", "series+"]
				},
				{ name: "Family",
					class: "family",
					price: 5,
					channels: ["Disney Channel", "TELETOON", "Family Channel", "Treehouse", "Disney Junior", "Cartoon Network", "Family Jr.", "CHRGD", "Disney XD"],
					channelsPrice: ["$2.99", "$4.00", "$2.99", "$4.00", "$2.99", "$4.00", "$2.99", "$2.99", "$2.99"],
					channelsNumber: [150, "151-152", "153-154", 155, 156, 157, 158, 159, 160],
					ids: ["Disney Channel", "TELETOON", "Family Channel", "Treehouse", "Disney Junior", "Cartoon Network", "Family Jr.", "CHRGD", "Disney XD"]
				},
				{ name: "HD Discoery",
					class: "hd-discoery",
					price: 4,
					channels: ["Wild TV HD", "Discovery Velocity HD"],
					channelsPrice: ["$1.99", "$8.00"],
					channelsNumber: [1185, 1621],
					ids: ["wild-tv-hd", "discovery-velocity-hd"]
				},
				{ name: "HD HiFi",
					class: "hd-hifi",
					price: 5,
					channels: ["Smithsonian Channel", "Love Nature", "HIFI", "BBC Earth"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [1601, 1602, 1603, 1604],
					ids: ["smithsonian-channel", "love-nature", "hifi", "bbc-earth"]
				},
				{ name: "HD Hollywood Suite",
					class: "hd-hollywood-suite",
					price: 5,
					channels: ["Hollywood Suite 70s Movies", "Hollywood Suite 80s Movies", "Hollywood Suite 90s Movies", "Hollywood Suite 00s Movies"],
					channelsPrice: ["$2.50", "$2.50", "$2.50", "$2.50"],
					channelsNumber: [1611, 1612, 1613,1614],
					ids: ["hollywood-suite-70s-movies", "hollywood-suite-80s-movies", "hollywood-suite-90s-movies", "hollywood-suite-00s-movies"]
				},
				{ name: "Information",
					class: "information",
					price: 3,
					channels: ["CP24", "TVO"],
					channelsPrice: ["$8.00", "$1.99"],
					channelsNumber: [283, 284],
					ids: ["cp24", "tvo"]
				},
				{ name: "Jeunesse",
					class: "jeunesse",
					price: 3,
					channels: ["Télémagino", "BabyTV (French)", "La Chaîne Disney"],
					channelsPrice: ["$2.99", "$1.99", "$1.99"],
					channelsNumber: [441, 442, 443],
					ids: ["telemagino", "babytv-french", "la-chaine-disney"]
				},
				{ name: "Kids Plus",
					class: "kids-plus",
					price: 3,
					channels: ["Animal Planet", "BBC Kids", "Nickelodeon", "BabyTV"],
					channelsPrice: ["$4.00"],
					channelsNumber: [138],
					ids: ["animal-planet", "bbc-kids", "nickelodeon", "babytv"]
				},
				{ name: "Life",
					class: "life",
					price: 5,
					channels: ["Slice", "W Network", "HGTV", "Food Network", "CosmoTV"],
					channelsPrice: ["$1.99", "$4.00", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [131, "132-133", 134, 135, 136],
					ids: ["slice", "w-network", "hgtv", "food-network", "cosmotv"]
				},
				{ name: "Lifestyle",
					class: "lifestyle",
					price: 3,
					channels: ["FYI", "Fashion Television Channel", "ONE", "OUTtv"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [292, 293, 294, 295],
					ids: ["FYI", "fashion-television-channel", "one", "outtv"]
				},
				{ name: "Medley",
					class: "medley",
					price: 3,
					channels: ["BET", "A.Side TV", "Makeful", "MTV2", "MTV"],
					channelsPrice: ["$2.99", "$1.99", "$1.99", "$1.99", "$6.00"],
					channelsNumber: [314, 321, 322, 324, 326],
					ids: ["bet", "a-side-tv", "makeful", "mtv2", "mtv"]
				},
				{ name: "Movie Flicks",
					class: "movie-flicks",
					price: 4,
					channels: ["WGN Chicago", "Action", "Lifetime", "AMC", "Turner Classic Movies"],
					channelsPrice: [" ", "$1.99", "$1.99", "$7.00", "$6.00"],
					channelsNumber: [222, 241, 244, 247, 248],
					ids: ["wgn-chicago", "action", "lifetime", "amc", "turner-classic-movies"]
				},
				{ name: "Movie Picks",
					class: "movie-picks",
					price: 4,
					channels: ["MovieTime", "DejaView", "ABC Spark", "Cooking Channel", "FX"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [231, 233, 234, 236, 237],
					ids: ["movietime", "dejaview", "abc-spark", "cooking-channel", "fx"]
				},
				{ name: "Music",
					class: "music",
					price: 3,
					channels: ["Stingray Vibe", "Stingray Loud", "Stingray Retro", "Stingray Juicebox"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [311, 313, 315, 323],
					ids: ["stingray-vibe", "stingray-loud", "stingray-retro", "stingray-juicebox"]
				},
				{ name: "News",
					class: "news",
					price: 4,
					channels: ["CTV News Channel", "BNN Bloomberg", "CNBC", "Fox News", "MSNBC"],
					channelsPrice: ["$2.80", "$6.00", "$4.00", "$1.99", "$4.00"],
					channelsNumber: [141, 142, 144, 145, 149],
					ids: ["ctv-news-channel", "bnn-bloomberg", "cnbc", "fox-news", "msnbc"]
				},
				{ name: "Places",
					class: "places",
					price: 3,
					channels: ["BBC World News", "Travel + Escape", "Cottage Life", "BBC Canada", "BookTelevision"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [301, 302, 303, 304, 305],
					ids: ["bbc-world-news", "travel+escape", "cottage-life", "bbc-canada", "booktelevision"]
				},
				{ name: "PrimeTime 1",
					class: "primetime-1",
					price: 6,
					channels: ["A&E", "TLC", "CNN", "Discovery", "Headline News"],
					channelsPrice: ["$2.99", "$4.00", "$7.00", "$8.00", "$3.00"],
					channelsNumber: [101, 102, 103, 104, 108],
					ids: ["a&e", "tlc", "cnn", "discovery", "headline-news"]
				},
				{ name: "PrimeTime 2",
					class: "primetime-2",
					price: 4,
					channels: ["History", "DTOUR", "GSN", "CMT","NASA TV"],
					channelsPrice: ["$1.99", "$1.99", "$2.99", "$4.00", "$1.99"],
					channelsNumber: [105, 106, 107, 109, 110],
					ids: ["history", "dtour", "gsn", "cmt","nasa-tv"]
				},
				{ name: "Replay",
					class: "replay",
					price: 3,
					channels: ["Comedy Gold", "H2", "Crime + Investigation", "TLN"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$4.00"],
					channelsNumber: [162, 163, 164, 165],
					ids: ["comedy-gold", "h2", "crime+investigation", "tln"]
				},
				{ name: "Sport Champions",
					class: "sport-champions",
					price: 3,
					channels: ["RDS", "NBA TV Canada", "EuroWorld Sport", "TVA Sports"],
					channelsPrice: ["$6.00", "$1.99", "$4.00", "$1.99"],
					channelsNumber: [191, 192, 195, 197],
					ids: ["rds", "nba-tv-canada", "euroworld-sport", "tva-sports"]
				},
				{ name: "Sports Enthusiasts",
					class: "sports-enthusiasts",
					price: 3,
					channels: ["World Fishing Network", "Wild TV", "ESPN Classic"],
					channelsPrice: ["$1.99", "$1.99", "$1.99"],
					channelsNumber: [183, 185, 202],
					ids: ["world-fishing-network", "wild-tv", "espn-classic"]
				},
				{ name: "Sports Fans",
					class: "sports-fans",
					price: 15,
					channels: ["Fight Network", "Sportsnet - Sportsnet 4K also available",
										 "FOX Sports Racing", "OLN", "NFL Network", 
										 "Sportsnet 590 The FAN", "Sportsnet 360", "Golf Channel", 
										 "Sportsnet ONE - Sportsnet One 4K also available", 
										 "MLB Network"],
					channelsPrice: ["$1.99", "$25.00", "$2.99", "$6.00", "$4.00", 
													"$1.99", "$10.00", "$4.00", "$14.00", "$2.99"],
					channelsNumber: [170, "171-174", 175, 176, 177, 178, 181, 182, 187, 188],
					ids: ["fight-network", "sportsnet", "fox-sports-racing", "oln", 
								"nfl-network", "sportsnet-590-the-fan", "sportsnet-360", 
								"golf-channel", "sportsnet-one", "mlb-network"]
				},
				{ name: "Super",
					class: "super",
					price: 4,
					channels: ["myTV38 Boston", "WGN Chicago", "PIX New York", "KTLA Los Angeles"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99"],
					channelsNumber: [221, 222, 223, 224],
					ids: ["mytv38-boston", "wgn-chicago", "pix-new-york", "ktla-los-angeles"]
				},
				{ name: "Time Shift East",
					class: "time-shift-east",
					price: 3,
					channels: ["CBC Toronto", "City Toronto", "Global Toronto", "CTV Montreal",
										 "NTV St. John's", "Global Maritimes", "PBS Detroit", "CTV Halifax", 
										 "CTV Kitchener", "CTV Moncton", "CTV North Bay", "CTV Ottawa", 
										 "CTV Sault Ste. Marie", "CTV Sudbury", "CTV Timmins", "CTV Toronto", 
										 "CTV Sydney"],
					channelsPrice: ["$2.99", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99",
													"$2.99", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99",
													"$2.99", "$2.99", "$2.99",],
					channelsNumber: [341, 342, 343, 344, 345, 346, 348, 1349, 1350, 
													 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358],
					ids: ["cbc-toronto", "city-toronto", "global-toronto", "ctv-montreal", 
								"ntv-st-Johns", "global-maritimes", "pbs-detroit", "ctv-halifax", 
								"ctv-kitchener", "ctv-moncton", "ctv-north-bay", "ctv-ottawa", 
								"ctv-sault-ste-marie", "ctv-sudbury", "ctv-timmins", "ctv-toronto",
								"ctv-sydney"]
				},
				{ name: "Time Shift West",
					class: "time-shift-west",
					price: 3,
					channels: ["City Saskatchewan", "CBC Vancouver", "CTV BC", "Global BC", 
										 "City Edmonton", "City Vancouver", "ABC Seattle", "CBS Seattle", 
										 "FOX Seattle", "NBC Seattle", "PBS Seattle", "CTV Calgary", 
										 "CTV Regina"],
					channelsPrice: ["1.99$", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99",
												  "$2.99", "$2.99", "$2.99", "$2.99", "$2.99", "$2.99",
												  "$2.99"],
					channelsNumber: [330, 331, 332, 333, 334, 335, 336, 
													 337, 338, 339, 340, 1359, 1360],
					ids: ["city-saskatchewan", "cbc-vancouver", "ctv-bc", "global-bc", 
							  "city-edmonton", "city-vancouver", "abc-seattle", "cbs-seattle", 
							  "fox-seattle", "nbc-seattle", "pbs-seattle", "ctv-calgary", 
							  "ctv-regina"]
				},
				{ name: "Variété",
					class: "variete",
					price: 3,
					channels: ["Historia", "Prise 2", "CASA", "euronews (French)", 
										 "Investigation", "MusiquePlus", "Max"],
					channelsPrice: ["$1.99", "$1.99", "$1.99", "$1.99", "$4.00", 
													"$4.00", "$4.00"],
					channelsNumber: [431, 432, 433, 434, 435,436,437],
					ids: ["historia", "prise-2", "casa", "euronews-French", "investigation", 
								"musique-plus", "max"]
				},
];
/* ================== General Variables =======================
   ============================================================*/
let changeDisplay = document.querySelector(".changes-display");

// Making Elements with attributes and text values -----------
function elementAndAttrMaker (type, attr, val, text){
	var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
	let element = document.createElement(type);
	attr.map((currentValue, index) => {
		const attr = document.createAttribute(currentValue);
		attr.value = val[index];
		element.setAttributeNode(attr);
	});
	const textValue = document.createTextNode(text);
	element.appendChild(textValue);
	return element;
}

function groupCreator (group){
	let channelGroups = document.getElementsByClassName("channel-groups")[0];
	const div = document.createElement("div");
		const groupClass = document.createAttribute("class");
		groupClass.value =  group.class + " group";
		div.setAttributeNode(groupClass);
	channelGroups.appendChild(div);

	let fieldset = document.createElement("fieldset");
	div.appendChild(fieldset);
	fieldset.appendChild(legendMaker(group));
	channelMaker(group, fieldset);
}

groupsNames.map((group) => {
	groupCreator(group);
});

// ------------ Creating Legend ----------------------------
function legendMaker (legendId){
	let legend = document.createElement("legend");

	// Creating legend's <input> element
	const inputAttributesObjesct = {
					attr: ["type", "id", "name", "value"],
					val: [ "checkbox", legendId.class, "channelGroup", legendId.class]
	}
	const input = elementAndAttrMaker("input", inputAttributesObjesct.attr, inputAttributesObjesct.val);
	legend.appendChild(input);

	// Creating legend's <label> element
	const label = elementAndAttrMaker("label", ["for"], [legendId.class], legendId.name);
	legend.appendChild(label);

	// Creating legend's <p> element
	const p = elementAndAttrMaker("p", [], [], "$" + legendId.price)
	legend.appendChild(p);
	return legend;
}


// ------------ Creating channels line ----------------------------
function channelMaker (group, fieldset){
	group.channels.map((channel, index) => {

		let divChannel = elementAndAttrMaker("div", ["class"], ["channel"]);
		const divChannelNameRow = elementAndAttrMaker("div", ['class'], ['channel-name-row']);
		const input = elementAndAttrMaker("input", ['type', 'id', 'name', 'val'], ['checkbox', group.ids[index], "channel", group.ids[index]]);
		divChannelNameRow.appendChild(input);
	 	
		const label = elementAndAttrMaker("label", 
																		 ["class", "for"], 
																		 ["channel-number", group.ids[index]], 
																		 group.channelsNumber[index]
																		);
		divChannelNameRow.appendChild(label);
		
		let h4;
		if (group.channels[index].length > 20){
			h4 = elementAndAttrMaker("h4", ["class"], ["channel-number"], group.channels[index]);
		} else {
			h4 = elementAndAttrMaker("h4", [], [], group.channels[index]);
		}
		divChannelNameRow.appendChild(h4);
		divChannel.appendChild(divChannelNameRow);

		const p = elementAndAttrMaker("p", [], [], group.channelsPrice[index]);
		divChannel.appendChild(p);
	 	fieldset.appendChild(divChannel);

	return divChannel;
	});
}

// event handler on group selection
// By selecting and deselecting a group legend, all subchannels are being toggled

let legend = document.querySelectorAll("legend input");
legend.forEach((eachLegend) => {
	// handeling group selecting
	eachLegend.addEventListener("click", () => {
		let channelsGroup = document.querySelectorAll(`div.${eachLegend.id} input`);
		// let selectedChannels =[];
		channelsGroup.forEach((channel, index) => {
			if (channelsGroup[0].checked === true){
				channelsGroup[index].checked = true;
			}else {
				channelsGroup[index].checked = false;
			}
		});
	});

	// handeling unchecking selected group if one of subchannels unselected
	let channels = document.querySelectorAll(`div.${eachLegend.id} div.channel-name-row input`);
	channels.forEach(channel => {
		channel.addEventListener("click", () => {
					// console.log(channels)
			if (channel.checked === false) {
				eachLegend.checked = false;
			}
			// checking the channes of a group and checkmark legend 
			// when all channels whithin a group are selected
			let groupChannelsChecker=[]; 
			channels.forEach(channel=> {
				if(channel.checked === true){
					groupChannelsChecker.push(true);
				}else {
					groupChannelsChecker.push(false);
				}
			});
			if (groupChannelsChecker.indexOf(false) === -1){
				eachLegend.checked = true;
			}
		});
	});

});


/* ==================== Update Change Display ==================== 
	 ===============================================================*/





// "TMN Encore 1"
// 219
// :
// "TMN Encore 2"
// 220
// :
// "HBO Canada 2"
// 221
// :
// "HBO Canada 1"
// 222
// :
// "The Movie Network 1"
// 223
// :
// "The Movie Network 2"
// 224
// :
// "The Movie Network 3"
// 225
// :
// "The Movie Network 4"
// 226
// :
// "TMN Encore 1"
// 227
// :
// "TMN Encore 2"
// 228
// :
// "HBO Canada 2"
// 229
// :
// "HBO Canada 1"
// 230
// :
// "The Movie Network 1"
// 231
// :
// "The Movie Network 2"
// 232
// :
// "The Movie Network 3"
// 233
// :
// "The Movie Network 4"
// 234
// :
// "Super Channel Fuse"
// 235
// :
// "Super Channel Heart and Home"
// 236
// :
// "Super Channel Vault"
// 237
// :
// "Ginx eSports"
// 238
// :
// "TMN Encore 1"
// 239
// :
// "TMN Encore 2"
// 240
// :
// "HBO Canada 2"
// 241
// :
// "HBO Canada 1"
// 242
// :
// "The Movie Network 1"
// 243
// :
// "The Movie Network 2"
// 244
// :
// "The Movie Network 3"
// 245
// :
// "The Movie Network 4"
// 246
// :
// "Super Channel Fuse"
// 247
// :
// "Super Channel Heart and Home"
// 248
// :
// "Super Channel Vault"
// 249
// :
// "Ginx eSports"
// 250
// :
// "Fairchild Television"
// 251
// :
// "Talentvision"
// 252
// :
// "EWTN"
// 253
// :
// "Miracle Channel"
// 254
// :
// "GMA Life TV"
// 255
// :
// "GMA News TV International"
// 256
// :
// "FTV"
// 257
// :
// "GMA Pinoy TV"
// 258
// :
// "Kapatid TV5"
// 259
// :
// "TFC - The Filipino Channel"
// 260
// :
// "DW (Deutsch+)"
// 261
// :
// "ProSiebenSat.1 Welt"
// 262
// :
// "German Kino Plus"
// 263
// :
// "Schlager"
// 264
// :
// "Odyssey"
// 265
// :
// "TV Polonia"
// 266
// :
// "Univision Canada"
// 267
// :
// "RTR Planeta"
// 268
// :
// "Rai Italia"
// 269
// :
// "TV JAPAN"
// 270
// :
// "TVP info"
// 271
// :
// "RTVi"
// 272
// :
// "Sportsnet World"
// 273
// :
// "beIN Sports"
// 274
// :
// "WWE Network"
// 275
// :
// "B4U Movies"
// 276
// :
// "Zee TV Canada"
// 277
// :
// "CBN"
// 278
// :
// "ATN"
// 279
// :
// "Aapka Colors"
// 280
// :
// "Sony Entertainment Television Asia"
// 281
// :
// "PTC Punjabi"
// 282
// :
// "The Cult Movie Network"
// 283
// :
// "Exxxtasy"
// 284
// :
// "Penthouse TV"
// 285
// :
// "Red Hot TV"
// 286
// :
// "AOV TV On Demand"
// 287
// :
// "Playboy TV"
// 288
// :
// "VividTV"
// 289
// :
// "MyMenu"
// 290
// :
// "The Weather Network App"
// 291
// :
// "DistracTV"
// 292
// :
// "CraveTV"
// 293
// :
// "The KARAOKE Channel"
// 294
// :
// "TumbleBooks TV"
// ]