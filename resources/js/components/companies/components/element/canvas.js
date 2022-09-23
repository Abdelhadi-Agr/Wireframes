export class canvas{
    events=[];
    name='';
    type='canvas';
    c;ctx;canvasOffset;offsetX;offsetY;color;
      constructor(color='white',canvasw='1000',canvash='550'){
          this.c=document.getElementById("canvas");
          this.ctx=this.c.getContext("2d");
          //this.c.width=window.innerWidth-300;
          this.c.width=canvasw;
          this.c.height=canvash;
          this.color=color;
          this.ctx.fillStyle=this.color;
          this.ctx.fillRect(0,0,this.c.width,this.c.height);
          this.canvasOffset = this.c.getBoundingClientRect();  
          this.offsetX = this.canvasOffset.left;
          this.offsetY = this.canvasOffset.top;
      }
      set Color(value){
            this.color=value;
            this.ctx.fillStyle=this.color;
            this.ctx.fillRect(0,0,this.c.width,this.c.height);
            for(let i=0;i<this.events.length;i++){
                this.events[i].draw();
                }
      }
      set CanvasW(value){
          if(value>0){
            this.c.width=value;
        }
      }
      set CanvasH(value){
        if(value>0){
            this.c.height=value;
        }
      }
      copy(){
        let copy=new canvas(this.ctx.fillStyle);
        copy.name=this.name;
        copy.color=this.color;
        copy.c=this.c;
        copy.ctx=this.ctx;
        copy.events=this.events;
        copy.canvasOffset=this.canvasOffset;
        copy.offsetX=this.offsetX;
        copy.offsetY=this.offsetY;
        for(let i=0;i<copy.events.length;i++){
          this.events[i].draw();
      }
        return copy;
    }
  }