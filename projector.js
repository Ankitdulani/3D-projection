function Projector(){
	
	this.project=function(A,m,img_plane,obs){

		 //var Obs=new Vector_box();
		 
		for(var i=0;i<m;i++){
				//Obs=obs.pos;
				//console.log("check "+ img_plane+" "+A.vec[i].y);
				
		
			/*	
			if((A.vec[i].y-obs.pos.y)!=0){
				
				//console.log("A y "+A.vec[i].y+" "+obs.pos.y)
				var s=img_plane/(A.vec[i].y-obs.pos.y);//console.log(s);
				A.vec[i]=A.vec[i].sub(obs.pos);
				A.vec[i].scale2(s);
				A.vec[i]=A.vec[i].sub(obs.pos);
				}//*/
				
				
				
			if((A.vec[i].y)!=0){
				
				//console.log("A y "+A.vec[i].y+" "+obs.pos.y)
				var s=img_plane/(A.vec[i].y);//console.log(s);
				obs.pos.y=0;
				A.vec[i]=A.vec[i].sub(obs.pos);
				A.vec[i].scale2(s);
				A.vec[i]=A.vec[i].sub(obs.pos);
				obs.pos.y=440;
				}
					
			else 
				A.vec[i].scale2(.0001);
			}
			
			//A.print(m);
	return A;
		
	}
	


}