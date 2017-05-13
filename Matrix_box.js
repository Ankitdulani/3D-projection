function Matrix_box(){	
			
			this.vec=[];
			this.ortho_bool=false;
			this.rotate=function(a,q){
					this.ortho_bool=true;
					if(a==1){
						this.vec[0]=new Vector_box(1,0,0);this.vec[0].s=0;
						this.vec[1]=new Vector_box(0,Math.cos(q),-1*Math.sin(q));this.vec[1].s=0;
						this.vec[2]=new Vector_box(0,Math.sin(q),Math.cos(q));this.vec[2].s=0;
						this.vec[3]=new Vector_box(0,0,0);this.vec[3].s=1;
						
						
					}
					
					if (a==2){
								this.vec[0]=new Vector_box(Math.cos(q),0,Math.sin(q));this.vec[0].s=0;
								this.vec[1]=new Vector_box(0,1,0);this.vec[1].s=0;
								this.vec[2]=new Vector_box(-1*Math.sin(q),0,Math.cos(q));this.vec[2].s=0;	
								this.vec[3]=new Vector_box(0,0,0);this.vec[3].s=1;	
							}
				
					if (a==3){
									this.vec[0]=new Vector_box(Math.cos(q),-1*Math.sin(q),0);this.vec[0].s=0;
									this.vec[1]=new Vector_box(Math.sin(q),Math.cos(q),0);this.vec[1].s=0;
									this.vec[2]=new Vector_box(0,0,1);this.vec[2].s=0;
									this.vec[3]=new Vector_box(0,0,0);this.vec[3].s=1;
									
								}
					
			}
			
			
			//tranformation matrixh
			this.move=function(v){
				
				this.vec[0]=new Vector_box(1,0,0);this.vec[0].s=0;
				this.vec[1]=new Vector_box(0,1,0);this.vec[1].s=0;
				this.vec[2]=new Vector_box(0,0,1);this.vec[2].s=0;
				this.vec[3]=v;
				
			}
			
			this.xMatrix=function(A,m,x){
				
				var a=new Matrix_box();
					//console.log("print tranfered matrix");
					//A.print(4);
			
						var one=new Vector_box(this.vec[0].x,this.vec[1].x,this.vec[2].x);one.s=this.vec[3].x;
						var two=new Vector_box(this.vec[0].y,this.vec[1].y,this.vec[2].y);two.s=this.vec[3].y;
						var three=new Vector_box(this.vec[0].z,this.vec[1].z,this.vec[2].z);three.s=this.vec[3].z;
						var four=new Vector_box(this.vec[0].s,this.vec[1].s,this.vec[2].s);four.s=this.vec[3].s;
						//console.log("printing vect");
						 if(x==true){
							 console.log("checking the value of one two three");
							one.print();
							two.print();
							three.print();
							four.print();
							}
						
						
					for (var j=0;j<m;j++){
						a.vec[j]=new Vector_box(one.rDot(A.vec[j]),two.rDot(A.vec[j]),three.rDot(A.vec[j]),four.rDot(A.vec[j]));
					}
				//console.log("one ");one.print();
				//console.log("mutiply closed");
				//a.print(1);
				
				return (a);
				
			}//multipy function end
			
			this.print=function(m){
				var j=0;
				if(this.ortho_bool==true){
					m=4;
				}
				for(j=0;j<m;j++){
					this.vec[j].print();
				}
			}//print function ends
			
		}

