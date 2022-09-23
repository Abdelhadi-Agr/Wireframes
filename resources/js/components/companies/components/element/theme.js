import { canvas } from "./canvas";
export class theme extends canvas{
    type='theme';
    constructor(color='white',canvasw='1000',canvash='550'){
        super(color,canvasw,canvash);
    }
    copy(){
        let copy=new theme(this.ctx.fillStyle);
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