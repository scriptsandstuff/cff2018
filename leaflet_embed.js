var map;
var markers = [];
var markerGroup;
/**
 *	declare the array of venues
 */
var venues = 
	[
	{name: "An Spailpín Fánach",
id: "0",
lat: "51.896514",
lng: "-8.4765845",
events :
        [{"day":"Wed 3rd","time":"6pm","act":"‘Barry Britton Posters’ Book launch & poster exhibition","price":"FREE"},{"day":"Wed 3rd","time":"9.30pm","act":"Sara Corkery, Brendan Butler & Siona Knepper","price":"€10.00"},{"day":"Thur 4th","time":"9.30pm","act":"The Whileaways + Eileen Healy & Dan Linehan","price":"€15.00"},{"day":"Fri 5th","time":"9.30pm","act":"Desi Wilkinson & Patrick Molard (Brittany), Rowan Piggott + Pete Coe (UK)","price":"€15.00"},{"day":"Sat 6th","time":"1pm","act":"Stíleanna (Styles) Flute Concert: Conal Ó Gráda, Aoife Granville, Joanne Quirke, Brendan Ring","price":"€10.00"},{"day":"Sat 6th","time":"3.30pm","act":"Stíleanna (Styles) Concertina Concert: Niall Vallely, Eimhear Flannery, Meadhbh O’ Leary Fitzpatrick, Ann Kirrane Droney, Paul Clesham & Cliona Halley","price":"€10.00"},{"day":"Sat 6th","time":"7pm","act":"‘Gals at Play’: Mary Green, Liz Kane, Lynda Cullen, Ellie Shine & Emma Langford","price":"€15.00"},{"day":"Sat 6th","time":"10.00pm","act":"Manus McGuire & Emily Flack, Matt Cranitch & Jackie Daly, Ann Kirrane Droney & Catherine McHugh","price":"€15.00"},{"day":"Sun 7th","time":"12.30pm","act":"Lee Valley String Band with Mick Daly, Brendan Butler, Mick ‘Tana’ O Brien, Hal O’Neill & Siona Knepper","price":"€10.00"},{"day":"Sun 7th","time":"1.30pm","act":"Song Session","price":"FREE"},{"day":"Sun 7th","time":"3.30pm","act":"Box Concert: Dave Hennessy, Jackie Daly, Jack Talty and Derek Hickey","price":"€10.00"},{"day":"Sun 7th","time":"9.00pm","act":"Cork Singers Club with Special Guest Seán Ó Sé, remembering Lena Bean Uí Shea and John O Shea (the singing fireman)","price":"FREE"}]
},
{name: "CIT Cork School of Music",
id: "1",
lat: "51.8961241",
lng: "-8.4683832",
events :
        [{"day":"Fri 5th","time":"8pm","act":"Abegondo Pipe and Dance Band with Douglas Comhaltas","price":"€10.00"},{"day":"Sat 6th","time":"11am","act":"Master classes: Kevin Burke (fiddle) and Sliabh Luachra Tunes Workshop with Matt Cranitch & Jackie Daly","price":"€15 (Students €10)"},{"day":"Sat 6th","time":"8pm","act":"Dave Flynn’s Irish Memory Orchestra, Special Guest Mairtín O Connor","price":"€20 (Students €15)"}]
},
{name: "Cork City Children’s Library",
id: "2",
lat: "51.8969057",
lng: "-8.4752595",
events :
        [{"day":"Sat 6th","time":"11.30am-12.30pm","act":"Tall Tales for Children with Pete Coe","price":"FREE"}]
},
{name: "Cork Opera House",
id: "3",
lat: "51.9002811",
lng: "-8.47307413911774",
events :
        [{"day":"Sun 7th","time":"8pm","act":"Kate Rusby & Band + Séamus Begley & Jim Murray","price":"€32.00"}]
},
{name: "Counihan's Bar",
id: "4",
lat: "51.8977881",
lng: "-8.469947",
events :
        [{"day":"Sat 6th","time":"2pm","act":"Bodhran\/Percussion Workshop with Johnny Bongos","price":"FREE"}]
},
{name: "Crane Lane",
id: "5",
lat: "51.8977489",
lng: "-8.4696355",
events :
        [{"day":"Thur 4th","time":"7pm","act":"Noel Brazil Song Competition €450 in prizes, to Enter email admin@mutantspace.com","price":"FREE"},{"day":"Thur 4th","time":"12pm","act":"Late Concert","price":"FREE"},{"day":"Sun 7th","time":"11pm","act":"Late gig","price":"FREE"}]
},
{name: "Deerpark CBS",
id: "6",
lat: "51.8899344",
lng: "-8.4734561",
events :
        [{"day":"Sun 7th","time":"2pm","act":"Céilí Mór – ARUNDO, CLUB CEOIL, Abegondo Pipe and Dance Band Family Event","price":"FREE"}]
},
{name: "Emmett Place",
id: "7",
lat: "51.8999859",
lng: "-8.4727718",
events :
        [{"day":"Sat 6th","time":"11-5pm","act":"Food & Folk Open-air Food market with Abegondo Pipe and Dance Band, Douglas Comhaltas Adult Group, Rowan Piggott","price":"FREE"}]
},
{name: "Rory Gallagher Music Library",
id: "8",
lat: "51.89671",
lng: "-8.475234",
events :
        [{"day":"Sat 6th","time":"3.00pm","act":"Carmen Cullen will present ‘Hello Delia Murphy’, a tribute in story and song to singer Delia Murphy","price":"FREE"}]
},
{name: "St Finbarr’s GAA",
id: "9",
lat: "51.8774565",
lng: "-8.4972063",
events :
        [{"day":"Sat 6th","time":"9.30pm","act":"Céilí Mór: Striolán Céilí Band","price":"€10.00"}]
},
{name: "St Finnbarre's Cathedral",
id: "10",
lat: "51.8943591",
lng: "-8.4811048",
events :
        [{"day":"Wed 3rd","time":"8pm","act":"”Corcach: A Journey” The Casey Sisters; Máire Ní Chathasaigh, Nollaig Casey and Mairéad Ní Chathasaigh- Premiere of a new commission from the Casey Sisters for the 40th year of the Cork Folk Festival, Featuring Nollaig Casey (fiddle and vocals), Máire Ní Chathasaigh (harp), Mairéad Ní Chathasaigh (fiddle and vocals) and some of Cork’s finest musicians: Eoin Ó Riabhaigh (uilleann pipes); Johnny McCarthy (flutes); Eithne Willis (violin and viola); and Joan Scannell (cello)","price":"€15.00"}]
},
{name: "St Peter's Church",
id: "11",
lat: "51.8996408",
lng: "-8.4786399",
events :
        [{"day":"Thur 4th","time":"1pm","act":"Concert","price":"FREE"},{"day":"Fri 5th","time":"1pm","act":"Concert Rowan Piggott, Garry Cronin & Desi McCabe & more","price":"FREE"},{"day":"Sat 6th","time":"12pm","act":"Karen Casey speaks about FairPlé and its aims to achieve gender balance in Irish traditional and folk music.","price":"FREE"}]
},
{name: "The Corner House",
id: "12",
lat: "51.901651",
lng: "-8.470919",
events :
        [{"day":"Wed 3rd","time":"9.30pm","act":"The Four Star Trio","price":"FREE"},{"day":"Thur 4th","time":"9.30pm","act":"Lee Delta Blues Club","price":"FREE"},{"day":"Fri 5th","time":"5.50pm","act":"1st Friday Session","price":"FREE"},{"day":"Sat 6th","time":"6pm","act":"Songwriters @6: Leif, Pat Horgan, Martina Stafford, Leah, Sara & Brendan","price":"FREE"},{"day":"Sun 7th","time":"4pm","act":"Album Launch Paddy Tutty and Caoimhín O Fearghail","price":"FREE"},{"day":"Sun 7th","time":"6pm","act":"The Prairie Jaywalkers","price":"FREE"},{"day":"Sun 7th","time":"8pm","act":"The Lee Valley & Rough Deal String Bands","price":"FREE"}]
},
{name: "The Long Valley",
id: "13",
lat: "51.8981887",
lng: "-8.4705669",
events :
        [{"day":"Sat 6th","time":"2pm","act":"Song Session (approx 60 mins) BALLADS,BROADSIDES & BAWLING HAWKERS session\/informal concert with Pete Coe & Jimmy Crowley and songs from audience","price":"€10.00"}]
},
{name: "The Oliver Plunkett",
id: "14",
lat: "51.8982162",
lng: "-8.4695729",
events :
        [{"day":"Fri 5th","time":"5.30pm","act":"Greenshine + Céilí Allstars","price":"€15.00"},{"day":"Fri 5th","time":"11pm","act":"Late gig","price":"FREE"},{"day":"Sat 6th","time":"4.30pm","act":"Ye Vagabonds & Blind Poets","price":"€15.00"},{"day":"Sat 6th","time":"10pm,","act":"Two Time Polka","price":"FREE"},{"day":"Sun 7th","time":"12.30pm","act":"Stíleanna (Styles) Fiddle Concert: Matt Cranitch, Caoimhe Flannery, Niamh Varian-Barry, Leah Murphy, Manus McGuire, Seamus Sands, Liz Kane, Garry Cronin","price":"€10.00"},{"day":"Sun 7th","time":"4pm","act":"John Spillane + Hanora George+ Ger Wolfe","price":"€15.00"}]
},
{name: "The Roundy",
id: "15",
lat: "51.8987518",
lng: "-8.4761584",
events :
        [{"day":"Fri 5th","time":"9.30pm","act":"John Blek with Laura ní Carthaigh","price":"€15.00"},{"day":"Sun 7th","time":"2.30pm","act":"Cork Pipers Club Concert with Brendan Ring,Rosaleen O’Leary and Mary Mitchell-Ingoldsby , Shane Keating, Robert Fell,  Pipers from Abegondo","price":"€10.00"}]
},
{name: "Triskel Christchurch",
id: "16",
lat: "51.8974504",
lng: "-8.4766479",
events :
        [{"day":"Thur 4th","time":"8pm","act":"Portuguese Fadó meets Irish Sean Nós; Claudia Aurora, Máire Ni Chéileachair & Nell Ní Chróinín","price":"€25.00"},{"day":"Fri 5th","time":"8pm","act":"KGB: Paddy Keenan, Frankie Gavin & Dermot Byrne plus Kevin Burke","price":"€25.00"}]
}	
];
// 	{name: "St Finnbarre's Cathedral",
//         lat: "51.8943591",
//         lng: "-8.4811048",
//         events :
//         [{"day":"Wed 3rd","time":"8pm","act":"”Corcach: A Journey” The Casey Sisters; Máire Ní Chathasaigh, Nollaig Casey and Mairéad Ní Chathasaigh- Premiere of a new commission from the Casey Sisters for the 40th year of the Cork Folk Festival, Featuring Nollaig Casey (fiddle and vocals), Máire Ní Chathasaigh (harp), Mairéad Ní Chathasaigh (fiddle and vocals) and some of Cork’s finest musicians: Eoin Ó Riabhaigh (uilleann pipes); Johnny McCarthy (flutes); Eithne Willis (violin and viola); and Joan Scannell (cello)","price":"€15.00"}]
//     },
//     {name: "Cork Opera House",
//         lat: "51.9002811",
//         lng: "-8.47307413911774",
//         events :
//         [{"day":"Sun 7th","time":"8pm","act":"Kate Rusby & Band + Séamus Begley & Jim Murray","price":"€32.00"}]
//     },
//     {name: "Deerpark CBS",
//         lat: "51.8899344",
//         lng: "-8.4734561",
//         events :
//         [{"day":"Sun 7th","time":"2pm","act":"Céilí Mór – ARUNDO, CLUB CEOIL, Abegondo Pipe and Dance Band Family Event","price":"FREE"}]
//     },
//     {name: "The Roundy",
//         lat: "51.8987518",
//         lng: "-8.4761584",
//         events :
//         [{"day":"Fri 5th","time":"9.30pm","act":"John Blek with Laura ní Carthaigh","price":"€15.00"},{"day":"Sun 7th","time":"2.30pm","act":"Cork Pipers Club Concert with Brendan Ring,Rosaleen O’Leary and Mary Mitchell-Ingoldsby , Shane Keating, Robert Fell,  Pipers from Abegondo","price":"€10.00"}]
//     },
//     {name: "Rory Gallagher Music Library",
//         lat: "51.89671",
//         lng: "-8.475234",
//         events :
//         [{"day":"Sat 6th","time":"3.00pm","act":"Carmen Cullen will present ‘Hello Delia Murphy’, a tribute in story and song to singer Delia Murphy","price":"FREE"}]
//     },
//     {name: "St Peter's Church",
//         lat: "51.8996408",
//         lng: "-8.4786399",
//         events :
//         [{"day":"Thur 4th","time":"1pm","act":"Concert","price":"FREE"},{"day":"Fri 5th","time":"1pm","act":"Concert Rowan Piggott, Garry Cronin & Desi McCabe & more","price":"FREE"},{"day":"Sat 6th","time":"12pm","act":"Karen Casey speaks about FairPlé and its aims to achieve gender balance in Irish traditional and folk music.","price":"FREE"}]
//     },
//     {name: "An Spailpín Fánach",
//         lat: "51.896514",
//         lng: "-8.4765845",
//         events :
//         [{"day":"Wed 3rd","time":"6pm","act":"‘Barry Britton Posters’ Book launch & poster exhibition","price":"FREE"},{"day":"Wed 3rd","time":"9.30pm","act":"Sara Corkery, Brendan Butler & Siona Knepper","price":"€10.00"},{"day":"Thur 4th","time":"9.30pm","act":"The Whileaways + Eileen Healy & Dan Linehan","price":"€15.00"},{"day":"Fri 5th","time":"9.30pm","act":"Desi Wilkinson & Patrick Molard (Brittany), Rowan Piggott + Pete Coe (UK)","price":"€15.00"},{"day":"Sat 6th","time":"1pm","act":"Stíleanna (Styles) Flute Concert: Conal Ó Gráda, Aoife Granville, Joanne Quirke, Brendan Ring","price":"€10.00"},{"day":"Sat 6th","time":"3.30pm","act":"Stíleanna (Styles) Concertina Concert: Niall Vallely, Eimhear Flannery, Meadhbh O’ Leary Fitzpatrick, Ann Kirrane Droney, Paul Clesham & Cliona Halley","price":"€10.00"},{"day":"Sat 6th","time":"7pm","act":"‘Gals at Play’: Mary Green, Liz Kane, Lynda Cullen, Ellie Shine & Emma Langford","price":"€15.00"},{"day":"Sat 6th","time":"10.00pm","act":"Manus McGuire & Emily Flack, Matt Cranitch & Jackie Daly, Ann Kirrane Droney & Catherine McHugh","price":"€15.00"},{"day":"Sun 7th","time":"12.30pm","act":"Lee Valley String Band with Mick Daly, Brendan Butler, Mick ‘Tana’ O Brien, Hal O’Neill & Siona Knepper","price":"€10.00"},{"day":"Sun 7th","time":"1.30pm","act":"Song Session","price":"FREE"},{"day":"Sun 7th","time":"3.30pm","act":"Box Concert: Dave Hennessy, Jackie Daly, Jack Talty and Derek Hickey","price":"€10.00"},{"day":"Sun 7th","time":"9.00pm","act":"Cork Singers Club with Special Guest Seán Ó Sé, remembering Lena Bean Uí Shea and John O Shea (the singing fireman)","price":"FREE"}]
//     },
//     {name: "Crane Lane",
//         lat: "51.8977489",
//         lng: "-8.4696355",
//         events :
//         [{"day":"Thur 4th","time":"7pm","act":"Noel Brazil Song Competition €450 in prizes, to Enter email admin@mutantspace.com","price":"FREE"},{"day":"Thur 4th","time":"12pm","act":"Late Concert","price":"FREE"},{"day":"Sun 7th","time":"11pm","act":"Late gig","price":"FREE"}]
//     },
//     {name: "Cork City Children’s Library",
//         lat: "51.8969057",
//         lng: "-8.4752595",
//         events :
//         [{"day":"Sat 6th","time":"11.30am-12.30pm","act":"Tall Tales for Children with Pete Coe","price":"FREE"}]
//     },
//     {name: "Triskel Christchurch",
//         lat: "51.8974504",
//         lng: "-8.4766479",
//         events :
//         [{"day":"Thur 4th","time":"8pm","act":"Portuguese Fadó meets Irish Sean Nós; Claudia Aurora, Máire Ni Chéileachair & Nell Ní Chróinín","price":"€25.00"},{"day":"Fri 5th","time":"8pm","act":"KGB: Paddy Keenan, Frankie Gavin & Dermot Byrne plus Kevin Burke","price":"€25.00"}]
//     },
//     {name: "CIT Cork School of Music",
//         lat: "51.8961241",
//         lng: "-8.4683832",
//         events :
//         [{"day":"Fri 5th","time":"8pm","act":"Abegondo Pipe and Dance Band with Douglas Comhaltas","price":"€10.00"},{"day":"Sat 6th","time":"11am","act":"Master classes: Kevin Burke (fiddle) and Sliabh Luachra Tunes Workshop with Matt Cranitch & Jackie Daly","price":"€15 (Students €10)"},{"day":"Sat 6th","time":"8pm","act":"Dave Flynn’s Irish Memory Orchestra, Special Guest Mairtín O Connor","price":"€20 (Students €15)"}]
//     },
//     {name: "Emmett Place",
//         lat: "51.8999859",
//         lng: "-8.4727718",
//         events :
//         [{"day":"Sat 6th","time":"11-5pm","act":"Food & Folk Open-air Food market with Abegondo Pipe and Dance Band, Douglas Comhaltas Adult Group, Rowan Piggott","price":"FREE"}]
//     },
//     {name: "St Finbarr’s GAA",
//         lat: "51.8774565",
//         lng: "-8.4972063",
//         events :
//         [{"day":"Sat 6th","time":"9.30pm","act":"Céilí Mór: Striolán Céilí Band","price":"€10.00"}]
//     },
//     {name: "The Long Valley",
//         lat: "51.8981887",
//         lng: "-8.4705669",
//         events :
//         [{"day":"Sat 6th","time":"2pm","act":"Song Session (approx 60 mins) BALLADS,BROADSIDES & BAWLING HAWKERS session\/informal concert with Pete Coe & Jimmy Crowley and songs from audience","price":"€10.00"}]
//     },
//     {name: "The Corner House",
//         lat: "51.901651",
//         lng: "-8.470919",
//         events :
//         [{"day":"Wed 3rd","time":"9.30pm","act":"The Four Star Trio","price":"FREE"},{"day":"Thur 4th","time":"9.30pm","act":"Lee Delta Blues Club","price":"FREE"},{"day":"Fri 5th","time":"5.50pm","act":"1st Friday Session","price":"FREE"},{"day":"Sat 6th","time":"6pm","act":"Songwriters @6: Leif, Pat Horgan, Martina Stafford, Leah, Sara & Brendan","price":"FREE"},{"day":"Sun 7th","time":"4pm","act":"Album Launch Paddy Tutty and Caoimhín O Fearghail","price":"FREE"},{"day":"Sun 7th","time":"6pm","act":"The Prairie Jaywalkers","price":"FREE"},{"day":"Sun 7th","time":"8pm","act":"The Lee Valley & Rough Deal String Bands","price":"FREE"}]
//     },
//     {name: "Counihan's Bar",
//         lat: "51.8977881",
//         lng: "-8.469947",
//         events :
//         [{"day":"Sat 6th","time":"2pm","act":"Bodhran\/Percussion Workshop with Johnny Bongos","price":"FREE"}]
//     },
//     {name: "The Oliver Plunkett",
//         lat: "51.8982162",
//         lng: "-8.4695729",
//         events :
//         [{"day":"Fri 5th","time":"5.30pm","act":"Greenshine + Céilí Allstars","price":"€15.00"},{"day":"Fri 5th","time":"11pm","act":"Late gig","price":"FREE"},{"day":"Sat 6th","time":"4.30pm","act":"Ye Vagabonds & Blind Poets","price":"€15.00"},{"day":"Sat 6th","time":"10pm,","act":"Two Time Polka","price":"FREE"},{"day":"Sun 7th","time":"12.30pm","act":"Stíleanna (Styles) Fiddle Concert: Matt Cranitch, Caoimhe Flannery, Niamh Varian-Barry, Leah Murphy, Manus McGuire, Seamus Sands, Liz Kane, Garry Cronin","price":"€10.00"},{"day":"Sun 7th","time":"4pm","act":"John Spillane + Hanora George + Ger Wolfe","price":"€15.00"}]
//     },
//     ];

// have all markers showing unless one is selected from the search, selected: not a few letters typed
/*
 * 
 *          thinking a little now of having a bs-select inside the popup now too
 *      
 *      Thing is that if might be nice to have the acts in the search too.
 *      If this is done and the popup opens at their act, if does not say the location or the venue on that popup
 * 
 */

/**
 * init()
 */
function initmap() {	
	
	/**
	 * 
	 *	override the default close method
	 *
	 */
	L.Map = L.Map.extend({
		// @method closePopup(popup?: Popup): this
		// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
		closePopup: function (popup) {
			if (!popup || popup === this._popup) {				
				
				// when a popup is open on an event for a venue and another venue is clicked the popup reverts to the venue popup but doesn't close				
				
				popup = this._popup;
				cur_contents = popup._content; // this.getPopup().getContent();
            	if (typeof cur_contents === 'string' || cur_contents instanceof String) {                
//                 	console.log('its a string');
                	this._popup.setContent(contents);
				} else {
					this._popup = null;
					if (popup) {				// meh this works
						this.removeLayer(popup); 
					}
				}
			}
			markerGroup.addTo(map)
			return this;
		}
	});
	
    
	/**
	 *
	 *	override the default open method
	 *
	 */
/*
	L.Map = L.Map.extend({
		openPopup: function (popup) {
            c = this.getPopup().getContent();
			
			var m = L.marker( [venues[i].lat, venues[i].lng] ).addTo( map );
			m.venue = venues[i].name;			
			c = getPopupContents(venues[i], m, i);
			m.bindPopup(c, {closeOnClick: false}); //maxWidth: "auto", 
			
		}
	});
	*/
	
    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 13, maxZoom: 18, attribution: osmAttrib});        
	
	// set up the map
    map = new L.Map('map');
    L.control.scale().addTo(map);
    
    searchControl = L.control('topright');
    searchControl.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'searchDiv'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    searchControl.update = function (props) {
        this._div.innerHTML = '<select class="selectpicker" data-live-search="true" name="" id="venue_select"></select>';
    }
    searchControl.addTo(map);
//     searchControl.getContainer().innerHTML = 
	
    // start the map in Cork
    map.setView(new L.LatLng(51.898, -8.477), 15);      
    map.addLayer(osm);	
	
	markerGroup = L.layerGroup()
	markerGroup.addTo(map);
    createMarkers();
	for(marker of markers) {
		marker.addTo( markerGroup );
	}
	setupDropDown(venues);
}

/**
 * 
 * 
 */
function createMarkers() {	
//     console.log('number of venues: ' + venues.lenght );
//     var markers = [];
    var containers = [];
    var contents;
    var venueNames = [];	
/*
Then you add the markers to the group:
L.marker([52.520861, 13.409564]).addTo(markerGroup);
Then you can easily remove the markers from the map by using the removeLayer method on that group.
For example, if you want to remove the marker with the ID 219, then you would have to do the following:
markerGroup.removeLayer(219)*/

    for (var i = 0; i , i < venues.length; i++) {
//         console.log('venue: ' + venues[i].name + ' ' + venues[i].lat + ' ' + venues[i].lng);
		
//         var marker = L.marker( [venues[i].lat, venues[i].lng] ).addTo( map );
		let marker = L.marker( [venues[i].lat, venues[i].lng] );
        marker.venue = venues[i].name;

        containers[i] = getPopupContents(venues[i], marker, i);
        
// 		have to pass someting better that i...or a call back thing 
		marker.container = containers[i][0];
		marker.on('click', function() { markerClick(this); });
		marker.onClick = function() { markerClick(this); };
        markers[i] = marker;
    }
}

/**
 * 
 */
// function markerClick(m, c, i) {
function markerClick(m) {	
// 	console.log("what can we access??");
	if( map.hasLayer(markerGroup) ) {
		map.removeLayer(markerGroup);
// 		console.log("LAYER REMOVED!!!");	
	} else {
		m.remove
		return;
	}
	
	console.log(""+ m.venue);	
	
	
// 	m.on('popupopen', function(evt) {		
// 		console.log("PopUPPP");
// // 		var marker = e.popup._source;
// 		
// // 		console.log(""+m.container);
// // // 		i = i + 1;
// // // 		contents = this.getPopup().getContent();
// 	});

	m.on('popupclose', function(e) {
		this.unbindPopup();
	});
	m.addTo(map)
	m.bindPopup(m.container, {closeOnClick: false}); //maxWidth: "auto", 

//  	this.popupopen();
// 	let j = 0;
	
	
// 	it is the repeated openings!!
	m.openPopup();
	
//  	if (map.hasLayer(m)) {
// 		console.log("Popup already open");
// 	} else {
// 		m.openPopup(e);
// 		console.log("Popup opened!!!");
// 	}
}

/**
 *
 *
 *
 */
function setupDropDown(venues) {	
	var sel = $('select');
    sel.append('<option value="" class="text-hide" selected disabled> <a class="cen">search</a> </option>');
	for (var i = 0; i , i < venues.length; i++) {
// 		console.log(venues[i].name);
		sel.append('<option value="">' + venues[i].name + '</option>');
	}
}

/*
<div class="accordion" id="accordionExample">

<div class="card z-depth-0 bordered">
	<div class="card-header" id="headingOne">
		<h5 class="mb-0">
		<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			THE TITLE
		</button>
		</h5>
	</div>
	<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
		<div class="card-body">
		THE TEXT
		</div>
	</div>
</div>
    
</div>*/
/**
 * 
 */
function getPopupContents(venue, marker, num) {
// 	class:'leaflet-popup-content-wrapper leaflet-popup-content'
    let container = $('<div />', {class:'popContainer'});	//text:venue.name, 
	let title = $('<h4 />', {text:venue.name, class:''});
	container.append(title);		
    var n = venue.events.length;    
//     class:"accordion", 
    
    let evts_container = $('<div />');
	let venue_events = $('<div />', {id:"accordion"+venue.id, class:"panel-group", role:"tablist", 'aria-multiselectable':"true"}); 			

// 	id="accordion"' +(i)+ ' 
	for (var i = 0; i < n; i++) {
// 			t = '<div id="heading"' + i + '" class="accordion"  role="tablist">'+
		t = '<div class="panel panel-defauly">' +
// 				'<div class="panel-heading" role="tab" id="heading' + i + '">' +
					'<h5 class="panel-title">'+					
					'<a class="collapse list-group-item" '+
                        'data-toggle="collapse" '+
                        'data-parent="#accordion' + venue.id + '" ' +                        
                        'href="#collapse' + i + '"'+                        
//                         'data-target="#collapse' + i + '" ' +
//                         'aria-expanded="false" '+
//                         'aria-controls="collapse' + i + '"'+
                    '>'+
						venue.events[i].day + " " + venue.events[i].time+          
					'</a>'+
					'</h5>' +
// 				'</div>'+
				'<div id="collapse'+i+'" ' +
                    'class="panel-collapse collapse" ' +
//                     'role="tabpanel" ' +
//                     'aria-labelledby="heading"' + i + '" ' +
//                     'data-parent="#accordion'+ venue.id + '"'+
                '>'+
					'<div class="panel-body">'+
						'<p>' + venue.events[i].act + '</p>' + '<p class="price">' + venue.events[i].price + '</p>'+
					'</div>'+
				'</div>'+
			'</div>';
// 		
// 		
// 		t = '<div id="heading"' + i + '" class="accordion-heading">'+
// 				'<a class="accordion-toggle list-group-item" data-toggle="collapse" data-parent="#accordion'
// 					+venue.name+'" href="#collapse'+i+
// 					'" data-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">'+          
// 						venue.events[i].day + " " + venue.events[i].time+          
// 				'</a>'+
// 			'</div>'+
// 			'<div id="collapse'+i+'" class="accordion-body collapse" aria-labelledby="heading"' + i + 
// 				'" data-parent="#accordion'+ venue.name + '">'+
// 				'<div class="accordion-inner">'+
// 					'<p>' + venue.events[i].act + '</p>' + '<p class="price">' + venue.events[i].price + '</p>'+
// 				'</div>'+
// 			'</div>';
		
// 		console.log(t);
		venue_events.append(t);
	}
	evts_container.css({'overflow': 'auto'});
	evts_container.css({'max-height':'300px'});
	evts_container.width('300px');
    evts_container.append(venue_events);
    container.append(evts_container);
    return container;
}
