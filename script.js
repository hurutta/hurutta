 $('div').terminal(
 {
        
        hi: function(name) {this.echo('Hi, ' + name +'. Wellcome to my site.');},
		name: function(){ this.echo('Abid Mohammad Jawad\nআবিদ মোহাম্মদ জাওয়াদ');},
		nick: function(){ this.echo('JAWAD');},
		nation: function(){ this.echo('BANGLADESH 🇧🇩️ বাংলাদেশ');},
      	mail: function(){ this.echo('abidmohammadjawad@gmail.com');},
      	email: function(){ this.echo('abidmohammadjawad@gmail.com');},
       	photo: function(){ this.echo($('<img src="https://i.pinimg.com/originals/c8/6c/d4/c86cd4795af2bd7a68cf11728ec0f917.jpg" length=100 height=100>'));},
       	address: function(){ this.echo('Sreemangal');},
       	help: function(){ this.echo('this is an interactive site, type "list" to see full command list');},
       	list: function(){ this.echo('"name" ,"mail" ,"photo" ,"address", "cat", "time", "cj"');},
       	time: function(){ const current = new Date();const time = current.toLocaleTimeString("en-US");
       	this.echo(current);},
       	cat: function() {this.echo($('<img src="https://placekitten.com/408/287"length=100 height=100>'));},
       	cj: function() {this.echo($('<img src="https://c.tenor.com/grK7jtRobfMAAAAS/grand-theft-auto-carl-johnson.gif"length=100 height=100>'));},
       	ok: function(){ this.echo('ok');document.write("<b>okidoki</b>");},
       	pass: function(what){ if(what==123) this.echo('wow how do you know?');
       	else this.echo('WRONG PASSWORD');},
       	add: function(a,b){ this.echo(a+b);},
       	sub: function(a,b){ this.echo(a-b);},
       	mul: function(a,b){ this.echo(a*b);},
       	div: function(a,b){ this.echo(a/b);},
       	mod: function(a,b){ this.echo(a%b);},
       	git: function(){ this.echo('https://github.com/hurutta')},
       	
       	
       	
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
       	
      },	
       {
       
          greetings: 'WELCOME TO MY PERSONAL SITE, Type "help" (without quote) to know about more commands\njawad:~$'
          
      });
