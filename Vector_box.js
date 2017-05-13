
function Vector_box(x,y,z){
	this.x=x;
	this.y=y;
	this.z=z;
	this.s=1;
	
	this.getLength=function(){
		
		return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
		
	}
	
	this.unitVector=function(){
		var length=this.getLength();
		if (length==0)
			return new Vector_box(0,0,0);
		else
			return new Vector_box(this.x/length,this.y/length,this.z/length);
			
	}
	
	this.dot=function(v){
		return (this.x*v.x+this.y*v.y+this.z*v.z);
		
	}
	
	this.rDot=function(v){
		var a=new Vector_box(0,0,0);
		
			if (this.x==0||v.x==0)
				a.x=0;
			else
				a.x=this.x*v.x;
			if(this.y==0||v.y==0)
				a.y=0;
			else
				a.y=this.y*v.y;
			if(this.z==0||v.z==0)
				a.z=0;
			else
				a.z=this.z*v.z;
			if(this.s==0||v.s==0)
				a.s=0;
			else
				a.s=this.s*v.s;
			
		return (a.x+a.y+a.z+a.s);
		
	}
	
	this.getVecAngle=function(v){
		 var a=this.dot(v);
		 return Math.acos(a/(this.getLength()*v.getLength()));
	}
	
	this.add_vec=function(v){
		//console.log("fuck u");
		return new Vector_box(this.x+v.x,this.y+v.y,this.z+v.z);
	}
	
	
	this.scale2=function(a){
		if (a==Infinity)
			a=10000;
		this.x*=a;
		this.y*=a;
		this.z*=a;
	}
	
	this.sub=function(v){
		 v.scale2(-1);
		 //console.log("sub");
		 return this.add_vec(v);

	}
	
	this.getProjection=function(v){
		var a=this.unitVector();
		var p=this.dot(v);a.scale2(p);
		return new Vector_box(a.x,a.y,a.z);
	}
	
	this.getCrossProduct=function(v){
		
		n=new Vector_box(0,0,0);
		n.x=this.y*v.z-this.z*v.y;		n.y=this.z*v.x-this.x*v.z;		n.z=this.x*v.y-this.y*v.x;
		return n;	
	}
	
	
	this.print=function(){
		console.log(this.x+" i "+this.y+" j "+this.z+" k "+this.s+" s");
	}
	
	this.getVecDistance=function(v){
		
		var a=this.sub(v);
		return a.getLength();
		
		
	}
	
}