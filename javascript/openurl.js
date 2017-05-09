//
//Made by Noah Enger
//
function openurl(url,urltype,name,toolbar,scrollbar,resizable,top,left,width,height) {
var url,urltype,name,toolbar,scrollbar,resizable,top,left,width,height;
this.url=url; //string
this.urltype=urltype; //string, boolean, int
this.name=name; //string
this.tb=toolbar; //boolean
this.sb=scrollbar; //boolean
this.rz=resizable; //boolean
this.top=top; //double
this.left=left; //double
this.width=width; //double
this.height=height; //double
if(urltype=="external" || urltype=="internet" || urltype=="https" || urltype==1 || urltype==true){
window.open("https://"+this.url,this.name,"toolbar="+this.tb+",scrollbars="+this.sb+",resizeable="+this.rz+",top="+this.top+",left="+this.left+",width="+this.width+",height="+this.height);
}else if(urltype=="internal" || urltype=="local" || urltype=="file" || urltype==0 || urltype==false){
window.open(this.url,this.name,"toolbar="+this.tb+",scrollbars="+this.sb+",resizeable="+this.rz+",top="+this.top+",left="+this.left+",width="+this.width+",height="+this.height);
}
}
