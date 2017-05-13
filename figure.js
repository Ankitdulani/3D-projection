function figure(){
	
	this.Points=new Matrix_box();
	this.numPoint=0;
	this.color="red";
	this.img_cons=350;
	
	this.addPoint=function(a,b,c){
		this.Points.vec[this.numPoint]=new Vector_box(a,b,c);
	}
	
	this.print=function(){
		this.Points.print(this.numPoint);
		
	}
	this.draw=function(obs,project){
		
		
		//this.Points.print(8);
		var Tr=new Matrix_box();
				Tr.rotate(1,1*obs.Angle(true));
		var A=new Matrix_box();
			A.move(new Vector_box(0,0,0));//rx marix
			A=A.xMatrix(Tr,4);
		
			Tr.rotate(3,1*obs.Angle(false));//rz matrix
			A=A.xMatrix(Tr,4);
		
			obs.pos.scale2(-1);
			Tr.move(obs.pos);
			A=A.xMatrix(Tr,4);
			//Tr.print(4);
		
			
		figure_onProjection=new Matrix_box();
		
		
		 if (obs.axis.y==0)
			obs.axis.y=0.0000001;
		
		
		img_plane=this.img_cons/(obs.axis.y/obs.axis.getLength());
		
		//console.log("sdigksdbihid sibdhi   "+img_plane)
		
			figure_onProjection=A.xMatrix(this.Points,this.numPoint);
		
		//console.log("figure projected");
		//figure_onProjection.print(4);
		obs.pos.scale2(-1);
		Tr.move(obs.pos);
		//Tr.print(4);
		
		figure_onProjection=Tr.xMatrix(figure_onProjection,this.numPoint);
		//figure_onProjection.print(this.numPoint);
		
		// projection on wall
		if (project==true)
			figure_onProjection=projector.project(figure_onProjection,this.numPoint,img_plane,obs);
		//console.log("wall palne1");wall_onPlane.print(8);
		
			//console.log("return projection w/o transirion");
				//figure_onProjection.print(8);
		
		
		//console.log("");Tr.print(4);
		
		

				
			
		return figure_onProjection;

		
	}
	
	this.display=function(A,ctx,numPoint){
		
			
			ctx.beginPath();
			//console.log("a");A.print(4);
			//console.log("  jabadabkh "+A.vec[0].x+"    "+A.vec[0].z);
			ctx.moveTo(A.vec[0].x,A.vec[0].z);
			//console.log(this.numPoint);
			var i=0;
			for ( i=1;i<numPoint;i++)
					ctx.lineTo(A.vec[i].x,A.vec[i].z);
					
			ctx.closePath();
			//ctx.fill();
			//ctx.fillStyle=this.color;
			ctx.fill();
		
		
		
		
	}
	
}