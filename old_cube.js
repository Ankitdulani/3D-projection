function cube(x,y,z,l,b,h){
	this.l=l;
	this.x=x;
	this.y=y;
	this.z=z;
	this.b=b;
	this.h=h;
	//x*400,z==300
	this.cord=new Matrix_box();
	
			this.cord.vec[0]=new Vector_box(x-l,b+y,z+h);
			this.cord.vec[1]=new Vector_box(x+l,b+y,z+h);
			this.cord.vec[2]=new Vector_box(x+l,b+y,z-h);
			this.cord.vec[3]=new Vector_box(x-l,b+y,z-h);
			this.cord.vec[4]=new Vector_box(x-l,y,z+h);
			this.cord.vec[5]=new Vector_box(x+l,y,z+h);
			this.cord.vec[6]=new Vector_box(x+l,y,z-h);
			this.cord.vec[7]=new Vector_box(x-l,y,z-h);
	this.face=[];
	this.face[0]=[0,1,2,3,0,"black"];
	this.face[2]=[1,2,6,5,0,"orange"];
	this.face[1]=[0,1,5,4,0,"red"];
	this.face[3]=[2,3,7,6,0,"green"];
	this.face[4]=[0,3,7,4,0,"blue"];
	this.face[5]=[4,5,6,7,0,"yellow"];
	//this.order=[];
	this.order=[0,1,2,3,4,5];

//this.cord.print(8);
	
	this.drawCube=function(ctx,obs){
		
		//ctx.fillStyle=color;
		var A=new Matrix_box();
		var Fig=new figure();
		var projector=new Projector();
		Fig.Points=this.cord;
		Fig.numPoint=8;
		
		
		A=Fig.draw(obs,false);
		
		/*for(var a=0;a<6;a++)
			this.face[a][4]=0;
		
		for(var a=0;a<6;a++){
		console.log(this.face[a][4]);}
		//*/
		
		for(var a=0;a<6;a++){
			this.face[a][4]=0;
			//console.log(a+" "+this.face[a][4])
			for(var b=0;b<4;b++){
				this.face[a][4]+=A.vec[this.face[a][b]].y;
				
			}
		}
		
		
			/*for(var b=0;b<6;b++)
				console.log(this.face[b][4]);// intailizing the value of the order
			//*/
			//sorting the position of the faces 
			
			this.order=[0,1,2,3,4,5]
			for(var j=0;j<5;j++){
				for(var i=0;i<5-j;i++){
					if (this.face[i][4]<this.face[i+1][4]){
						
							var change=this.face[i][4];
							this.face[i][4]=this.face[i+1][4];
							this.face[i+1][4]=change;
							change=this.order[i];
							this.order[i]=this.order[i+1];
							this.order[i+1]=change;
							
						//for loop end k
					}// if loop ends	
				}//for loop end i
			}//for loop end j
			
			//console.log("order ");
			//console.log("order ");
			 for (var x=0;x<6;x++)
			 {
				 console.log(this.order[x]+" "+this.face[this.order[x]][5]+" "+this.face[x][4]);
				 //console.log();
				 
			 }//*/
		
		//new version of projection 
		
		A=projector.project(A,Fig.numPoint,(Fig.img_cons),obs);
		
		
		for(var i=0;i<6;i++){
			var B=new Matrix_box();
			
			for(var j=0;j<4;j++){
				
				B.vec[j]=A.vec[this.face[this.order[i]][j]];
			
			}
			ctx.fillStyle=this.face[this.order[i]][5];
			Fig.display(B,ctx,4);
			
		}
		//end of the loop for the display of the faces
		
		
		
		// old version of projectio
		
	
					/*var min=A.vec[0].y;
					var minInd=0;
					for (i=0;i<Fig.numPoint ;i++){
						if (min>A.vec[i].y){min=A.vec[i].y;minInd=i;
						}
					}//for loop ends
					//console.log(min+" min index "+minInd);
					
		
		A=projector.project(A,Fig.numPoint,(Fig.img_cons),obs);
		//console.log(" complete");
		//for(var c=0;c<this.numPoint;c++)
		//	A.vec[c].scale2(.3);
		//A.print(8);
		var B=new Matrix_box();
		//A.print(8);
		
		//dipslay using figure
		for (var i=0;i<3;i++){
			if (i==2){
				B.vec[0]=A.vec[(4*Math.floor(minInd/4)+0)];
				B.vec[1]=A.vec[(4*Math.floor(minInd/4)+1)];
				B.vec[2]=A.vec[(4*Math.floor(minInd/4)+2)];
				B.vec[3]=A.vec[(4*Math.floor(minInd/4)+3)];
				//console.log((4*Math.floor(minInd/4)+3));
				//B.vec[3].print();
				ctx.fillStyle="yellow";ctx.globalAlpha = 1;
				//console.log("0");B.print(4);
				Fig.display(B,ctx,4);				
				
				
			}
			else if(i==1){
				
				B.vec[0]=A.vec[(4+(minInd)%4)];
				B.vec[1]=A.vec[(4+((minInd+1)%4))];
				B.vec[2]=A.vec[(minInd+1)%4];
				B.vec[3]=A.vec[minInd%4];
				ctx.fillStyle="red";ctx.globalAlpha = 1;
				
				//B.print(4);
				Fig.display(B,ctx,4);
				
				//console.log("1");
				
				
				
			}
			else {
				//console.log("b");
				B.vec[0]=A.vec[(4+(minInd)%4)];
				B.vec[1]=A.vec[(4+((minInd-1)%4))];//console.log("1  "+(4+((minInd-1)%4)));
				B.vec[2]=A.vec[(minInd-1)%4];
				B.vec[3]=A.vec[minInd%4];
				ctx.fillStyle="green";ctx.globalAlpha = 1;
				Fig.display(B,ctx,4);
				//console.log("2");
				//B.print(4);				
				
			}
			
			//console.log("faces");
			//B.print(4);
			
			
			
		}// end of for loop//*/
	
	
		
	}// Draw function of cube ends*/
		
		
		
}
	
	
