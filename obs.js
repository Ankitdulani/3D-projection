function createObserver(){
	
	this.pos;
	
	this.axis;

	
	this.Angle=function(x){
		
		var a=this.axis.unitVector();
		//console.log("a vec");
		//a.print();
		var d=Math.sqrt(a.y*a.y+a.z*a.z);
			//console.log("d "+d);
			//console.log(" q "+Math.acos(a.y/d));
		
		if (x==true){
			if (a.z<0)
				return -1*Math.acos(a.y/d);
			else 
				return Math.acos(a.y/d);
			
		}
		
		else{
			if (a.x<=0)
				return 1*Math.acos(d);
			else
				return -1*Math.acos(d);}
		
	}

}