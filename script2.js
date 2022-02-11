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
	
  list3: function(){ this.echo('   |── "country" `anything`\t\t   |── "add" `a` `b`\n   |── "d" `anyword`\t\t\t   |── "sub" `a` `b`\n   |── "dd" `anyword`\t\t\t   |── "div" `a` `b`\n');
  this.echo('💡Just type any keyword from above to know that information.'); 
  this.echo('💥To discover more exciting commands, type "list3"');
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
      	
        this.echo("Try - `weather2`");

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
       		var url = "https://restcountries.com/v2/name/";
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
       

        dd: function(word)
        { 
            const url = "https://raw.githubusercontent.com/MinhasKamal/BengaliDictionary/master/BengaliDictionary.json";
                const result = document.getElementById("result");
                let input_word = word;
                fetch(`${url}`)
                    .then((response) => {return response.json();})
                        .then((data) => {


                        var index = -1;
                        var val = word;
                        var filteredObj = data.find(function(item, i){
                          if(item.en === val){
                            index = i;
                            return i;
                          }
                        });
                        this.echo("Bangla : "+filteredObj.bn);
                        this.echo("Pronunciation : "+filteredObj.pron);
                        this.echo(filteredObj.bn_syns);
                        this.echo(filteredObj.en_syns);
                        this.echo(filteredObj.sents);
                        

                        }).catch((error) => {
            this.echo("Can't find or wrong input, search different word");
        });
        },

        net: function() {
        this.echo('').exec('speed');
        },
        speed: function(){ 
        this.echo('<div style="width:300px;text-align:right;"><iframe style="border:none;overflow:hidden !important;width:100%;height:320px;" src="https://www.metercustom.net/plugin/"></iframe></div>',
        { raw:true,
        finalize: function(div) {}});
        },

        weather2: function(){ 
        this.echo('<img src="https://www.theweather.com/wimages/foto6074c1dbf468c0125131c5a4cae4c74f.png">',
        { raw:true,
        finalize: function(div) {}});
        },

        news: function(){ 
        //this.echo('<div id="widgetmain" style="text-align:left;overflow-y:auto;overflow-x:hidden;width:650px;background-color:#FFFFFF; border:1px solid #333333;"><div id="rsswidget" style="height:300px;"><iframe src="http://us1.rssfeedwidget.com/getrss.php?time=1644588204713&amp;x=https%3A%2F%2Fnews.google.com%2Frss%2Ftopics%2FCAAqIQgKIhtDQkFTRGdvSUwyMHZNREUyTW1JU0FtSnVLQUFQAQ%3Fhl%3Dbn%26gl%3DBD%26ceid%3DBD%253Abn&amp;w=650&amp;h=300&amp;bc=333333&amp;bw=1&amp;bgc=FFFFFF&amp;m=20&amp;it=true&amp;t=(default)&amp;tc=333333&amp;ts=15&amp;tb=transparent&amp;il=true&amp;lc=0000FF&amp;ls=14&amp;lb=false&amp;id=true&amp;dc=333333&amp;ds=14&amp;idt=true&amp;dtc=284F2D&amp;dts=12" border="0" hspace="0" vspace="0" frameborder="no" marginwidth="0" marginheight="0" style="border:0; padding:0; margin:0; width:650px; height:300px;" id="rssOutput">Reading RSS Feed ...</iframe></div><div style="text-align:right;margin-bottom:0;border-top:1px solid #333333;" id="widgetbottom"><span style="font-size:70%"><a href="http://www.rssfeedwidget.com">rss feed widget</a>&nbsp;</span><br></div></div>',
        this.echo('<div id="widgetmain" style="text-align:left;overflow-y:auto;overflow-x:hidden;width:650px;background-color:#transparent; border:0px solid #333333;"><div id="rsswidget" style="height:300px;"><iframe src="http://us1.rssfeedwidget.com/getrss.php?time=1644588609427&amp;x=https%3A%2F%2Fnews.google.com%2Frss%2Ftopics%2FCAAqIQgKIhtDQkFTRGdvSUwyMHZNREUyTW1JU0FtSnVLQUFQAQ%3Fhl%3Dbn%26gl%3DBD%26ceid%3DBD%253Abn&amp;w=650&amp;h=300&amp;bc=333333&amp;bw=0&amp;bgc=transparent&amp;m=20&amp;it=true&amp;t=(default)&amp;tc=FF0A0A&amp;ts=20&amp;tb=transparent&amp;il=true&amp;lc=FFFFFF&amp;ls=14&amp;lb=true&amp;id=true&amp;dc=09FF00&amp;ds=14&amp;idt=true&amp;dtc=EEFF00&amp;dts=12" border="0" hspace="0" vspace="0" frameborder="no" marginwidth="0" marginheight="0" style="border:0; padding:0; margin:0; width:650px; height:300px;" id="rssOutput">Reading RSS Feed ...</iframe></div><div style="text-align:right;margin-bottom:0;border-top:0px solid #333333;" id="widgetbottom"><span style="font-size:70%"><a href="http://www.rssfeedwidget.com">rss feed widget</a>&nbsp;</span><br></div></div>',
        { raw:true,
        finalize: function(div) {}});
        },

       	
      },
      	
       {
       
      
          greetings: '👋 WELCOME TO MY PERSONAL SITE! Type "help" (without quote) to proceed. Need to contact me? just type "send".📨📬\njawad:~$'
          

      });
      
     
