function CreateMenu(id){
          this.rawid=id;
		  this.id=document.getElementById(this.rawid);
		  this.ishidden;
		  this.islocked=false;
		  this.show=function(){
		var x=document.getElementById(id);
		x.style.visibility="visible";
		}
          this.hide=function(){
				var x=document.getElementById(this.rawid);
				x.style.visibility="hidden";
          }
            this.sethtml=function(text){
            var x=document.getElementById(this.rawid);
              x.InnerHTML=text;
            }
              this.setonclick=function(code){
                var x=document.getElementById(this.rawid);
                x.onclick=code;
              }
                this.setstyle=function(style){
                  
                }
                  this.getid=function(){
                   return rawid; 
                  }
                    this.gettype=function(){
                      
                    }
                      this.isActive=function(){
                       return ishidden; 
                      }
		}
