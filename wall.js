function createWall(l,h){
		var b=300;
		this.co=function(){ 

			var A=new Matrix_box();
			A.vec[0]=new Vector_box(400-l,b,300+h);
			A.vec[1]=new Vector_box(400+l,b,300+h);
			A.vec[2]=new Vector_box(400+l,b,300-h);
			A.vec[3]=new Vector_box(400-l,b,300-h);
			A.vec[4]=new Vector_box(400-l,0,300+h);
			A.vec[5]=new Vector_box(400+l,0,300+h);
			A.vec[6]=new Vector_box(400+l,0,300-h);
			A.vec[7]=new Vector_box(400-l,0,300-h);
		
		 return A;
		}
		
		this.draw=function(A,ctx,m){
			
			
			//drawing the rectangle	
			ctx.beginPath();
			ctx.moveTo(A.vec[0].x,A.vec[0].z);
			for (var i=1;i<m;i++)
					ctx.lineTo(A.vec[i].x,A.vec[i].z);
					
			ctx.closePath();
			ctx.fill();
				
			}
		
		


}