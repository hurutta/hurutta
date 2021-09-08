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
      },
      
      	
      		
       {
       
          greetings: 'WELCOME TO MY PERSONAL SITE, Type "help" (without quote) to know about more commands\njawad:~$'
          
      });
