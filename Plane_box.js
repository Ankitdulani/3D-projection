function Plane_box(l,m,n,x,y,z){// to avoid confusion here lmn are position vector
	
	var a=new Vector_box(l,m,n);
	a=a.unitVector();
	
	this.x=x;
	this.y=y;
	this.z=z;
	this.l=a.x;
	this.m=a.y;
	this.n=a.z;
	
	this.getPlaneAngle=function(v){
		//var l=Math.sqrt(this.l*this.l+this.y*this.y+this.z*this.z);
		var l=Math.sqrt(this.l*this.l+this.m*this.m+this.n*this.n);
			
			return Math.asin((Math.abs(this.l*v.x+this.m*v.y+this.n*v.z))/(l*v.getLength()));	
	}
	
	this.getPlaneDistance=function(v){
		
		var axis_vec=new Vector_box(this.l,this.m,this.n);
		var a=axis_vec.unitVector();
		var dis_vec= new Vector_box(v.x-this.x,v.y-this.y,v.z-this.z);
			return (dis_vec.dot(a));
	}
	
	
	this.getPlaneProjection=function(v){	
		var copy_v=v;
		var dis=this.getPlaneDistance(v);
		var axis_vec=new Vector_box(this.l,this.m,this.n);
		var a=axis_vec.unitVector();a.scale2(dis);
			return (copy_v.sub(a));
		
	}
	
	this.getAxisDistance=function(v){
		
		var pos=new Vector_box(this.x,this,y,this.z);
		var a=this.getPlaneProjection(v);
		return a.getVecDistance(pos);
		
	}
	this.getAxis=function(){
		
		console.log(this.l+" i "+this.m+" j "+this.n+" k ");
	}
	
	
}