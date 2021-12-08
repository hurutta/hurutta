 $('div').terminal(
 {
        help: function(){ this.echo('this is an interactive site, type "list" to see full command list 📜');},
	list: function(){ this.echo('   |── "name"\t\t\t\t   |── "mail"\n   |── "phone"\t\t\t\t   |── "photo"\n   |── "linkedin"\t\t\t   |── "address"\n');
	this.echo('💡Just type any keyword from above to know that information.'); 
	this.echo('💥To discover more exciting commands, type "list2"');
	},
	
	list2: function(){ this.echo('😎 Thanks for showing interest! Heres the list2 -');
	this.echo('   |── "time"\t\t\t\t   |── "weather"\n   |── "screen"\t\t\t\t   |── "location"\n   |── "os"\t\t\t\t\t   |── "battery"\n   |── "core"\t\t\t\t   |── "ram"\n   |── "pacman"\t\t\t\t   |── "view"\n   |── "cj"\t\t\t\t\t   |── "cat"\n');
	this.echo('💥To discover more educative and interesting commands, type "list3" !!!'); 
	this.echo('<p style="color:red;">'+"WOWOWOW"+'</p>',
     { raw:true,
       finalize: function(div) {
          div
         
         .css("text-align", "right")
         .css("margin-top", "-1em")
         .css("font-family", "courier")
         .css("text-color", "red")
         ;
       }
     });
	},
	
	
	 
        hi: function(name) {this.echo('Hi, ' + name +'. Wellcome to my site.');},
		name: function(){ this.echo('Abid Mohammad Jawad\nআবিদ মোহাম্মদ জাওয়াদ');},
		nick: function(){ this.echo('JAWAD');},
		nation: function(){ this.echo('BANGLADESH 🇧🇩️ বাংলাদেশ');},
      	mail: function(){ this.echo('abidmohammadjawad@gmail.com');},
      	email: function(){ this.echo('abidmohammadjawad@gmail.com');},
       	photo: function(){ this.echo($('<img src="https://i.pinimg.com/originals/c8/6c/d4/c86cd4795af2bd7a68cf11728ec0f917.jpg" length=100 height=100>'));},
       	address: function(){ this.echo('Sreemangal');},
       	
       	
       	time: function(){ const current = new Date();const time = current.toLocaleTimeString("en-US");
       	this.echo(current);},
       	cat: function() {this.echo($('<img src="https://placekitten.com/408/287"length=100 height=100>'));},
       	cj: function() {this.echo($('<img src="https://c.tenor.com/grK7jtRobfMAAAAS/grand-theft-auto-carl-johnson.gif"length=100 height=100>'));},
       	ok: function(){ this.echo('ok');document.write("<h1>okidoki</h1>");
       			window.setTimeout(function () {window.location.reload();}, 500)},
       	pass: function(what){ if(what==123) this.echo('wow how do you know?');
       	else this.echo('WRONG PASSWORD');},
       	add: function(a,b){ this.echo(a+b);},
       	sub: function(a,b){ this.echo(a-b);},
       	mul: function(a,b){ this.echo(a*b);},
       	div: function(a,b){ this.echo(a/b);},
       	mod: function(a,b){ this.echo(a%b);},
       	git: function(){ this.echo('https://github.com/hurutta')},
       	open: function() {
        this.echo('you try to open').exec('close');
        setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
        this.echo('you try to open').exec('close');
    },
    close: function() {
        this.echo('you closed');
    },
       	
       	
       	weather: function(){ 
       	const apiKey = "4d8fb5b93d4af21d66a2948710284366";
       	let inputVal = 0;
       	const url = `https://api.openweathermap.org/data/2.5/weather?q=${'sreemangal,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+name+"\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
       	const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${'dhaka,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url2).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+name+"\t\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
       	const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${'sylhet,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url3).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+"Sylhet"+"\t\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
      	const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${'chittagong,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url4).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+name+"\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
      	const url5 = `https://api.openweathermap.org/data/2.5/weather?q=${'khulna,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url5).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+name+"\t\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
      	const url6 = `https://api.openweathermap.org/data/2.5/weather?q=${'rajshahi,bd'}&appid=${apiKey}&units=metric`;
       	fetch(url6).then(response => response.json()).then(data => {const {main,name,sys,weather}=data;
      	this.echo("Location : "+name+"\t\t Temperature : "+Math.round(main.temp)+"°C \t"+weather[0]["description"]);
      	});
       	},
       	
       	
       	pacman: function(){this.echo($('<img src="https://i.imgur.com/xEVKclT.gif" width=100% height=30px>'));},
       	ip: function(){
		fetch('https://api.ipify.org/?format=json').then(res => res.json()).then((out) => {
        this.echo('your ip address : '+JSON.stringify(out, null, 0));});},
        
        
       	view: function() {this.echo('total view of this site : ');this.echo($('<img src="https://www.counter12.com/img-8Y8wZY7d2CCA6Ab2-50.gif">'));},
       	
       	d: function(word){
       			const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
				const result = document.getElementById("result");
				let input_word = word;
				fetch(`${url}${input_word}`)
					.then((response) => {return response.json();})
						.then((data) => {
						this.echo("PART OF SPEECH:\t"+data[0].meanings[0].partOfSpeech);
						this.echo("\nDEFINITION:\t"+data[0].meanings[0].definitions[0].definition);
						this.echo("\nEXAMPLE: "+data[0].meanings[0].definitions[0].example);
						}).catch((error) => {
			this.echo("Can't find or wrong input, search different word");
		});
		;},
		
       		matrix: function() {this.echo($('<img src="https://cdn140.picsart.com/321303280218201.gif?to=min&r=640"length=100% height=100%>'));},
       		cat2: function() {this.echo($('<img src="https://i.imgur.com/K0aZ9ID.gif" "length=100% width=100%>'));},
       		
       	
       		send: function(){
       		
       			
       			var name = prompt("PLEASE ENTER YOUR NAME or MAIL-ID: \n(as your wish/so that you can send anything effortlessly :D)");
       			var text = prompt("WRITE YOUR TEXT MESSAGE: ");
       			
       			var dt =  "&name="+name+"&message="+text;
				request = $.ajax({
				url: "https://script.google.com/macros/s/AKfycbwZ4TiqPsOnG8ViSZ8liG05gwV0Hxif4ODCijEJLyXUhpb1mZjMh419vOHz5OA7j9lMNQ/exec",
				type: "post",
				data: dt
				}); 
				this.echo("🎉🎉🎉 YOUR TEXT MESSANGE HAS BEEN SUCCESSFULLY SENT 🎉🎉🎉\nbtw if you need any feedback, I need your mail-id, right? Did you write that when it was promt? 🤔😕😃");  		
       		},
       		
       	location: function(){ 
       	
		let gc = "https://maps.googleapis.com/maps/api/geocode/json?latlng=",
		gk = "&key=AIzaSyAGUlxBFrsJbst5nEvwx3QfNOomE8Csrjc";
	  	var address;
	   if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		  latitude = position.coords.latitude;
		  longitude = position.coords.longitude;
		  let g_url = gc+latitude+ "," +longitude+gk;
		$.ajax({
		  type: 'GET',url: g_url,cache: false,dataType: 'JSON',
		  success: function (location) 
		  {
			address=""+location.results[0].address_components[2].long_name;
			alert(address);
		  }
		  }); 
		}); 
	   }
       	 },
       	country: function(name){ 
       		var url = "https://restcountries.eu/rest/v2/name/";
  			var countryName = "bangladesh";
    		
				const result = document.getElementById("result");
				let input_word = name;
				fetch(`${url}${input_word}`)
					.then((response) => {return response.json();})
						.then((data) => {
						this.echo("NAME:\t"+data[0].name);
						this.echo("capital:\t"+data[0].capital);
						this.echo("topLevelDomain:\t"+data[0].topLevelDomain);
						this.echo("callingCodes:\t"+data[0].callingCodes);
						this.echo("region:\t"+data[0].region);
						this.echo("population:\t"+data[0].population);
						this.echo("area:\t"+data[0].area);
						this.echo("timezones:\t"+data[0].timezones);
						this.echo("borders:\t"+data[0].borders);
						this.echo("currencies:\t"+data[0].currencies[0].code+" "+data[0].currencies[0].symbol);
						this.echo("languages:\t"+data[0].languages[0].nativeName);
						var flag=data[0].flag;
						this.echo($('<img src="'+flag+'"length=100 height=100>'));
						}).catch((error) => {
			this.echo("Can't find or wrong input, search different country");
		});
       	},
       	ram: function(){
       		let ram = navigator.deviceMemory;
       		if (typeof ram == 'undefined') this.echo('browser not supported');
       		else this.echo('Your device ram : '+ram+'GB');
       	 },
       	core: function(){
       		let cr = navigator.hardwareConcurrency;
       		if (typeof cr == 'undefined') this.echo('browser not supported');
       		else this.echo(cr+' cores');
       	 },
       	 battery: function(){
		   		if ('getBattery' in navigator) {
					navigator.getBattery().then(function(battery) {
		  			var status = (battery.charging) ? 1 : 0;
		  			var percent = Math.round(battery.level * 100);
	  				if(status) status='battery is charging';
	  				else status='battery is discharging';
	  				alert('BATTERY : '+percent+'%\n'+status);
	  				});
	  			}
       	 },
		
		os: function(){ this.echo(navigator.platform)},       	
       	screen: function(){ this.echo('width : '+window.screen.width+'\theight : '+window.screen.height
       	+'\tcolor depth : '+window.screen.colorDepth)},
       	 
       	
      },
      	
       {
       
          greetings: '👋 WELCOME TO MY PERSONAL SITE! Type "help" (without quote) to proceed. Need to contact me? just type "send".📨📬\njawad:~$'
          
      });
      
     
