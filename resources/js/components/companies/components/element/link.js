import { text } from "./text";
export class link extends text{
    type="link";
    constructor(selected_canvas,x,y,l,L){
        super(selected_canvas,x,y,l,L,'','','','link.com','blue');
    }
    draw(){
      let old_color=this.selected_canvas.ctx.fillStyle;
      this.selected_canvas.ctx.beginPath();
      this.selected_canvas.ctx.font=this.size+"px Arial";
      this.selected_canvas.ctx.fillStyle = this.text_color;
      this.selected_canvas.ctx.fillText(this.text,this.x+this.margin_text_x,this.y+this.margin_text);
      this.selected_canvas.ctx.stroke();
      this.selected_canvas.ctx.beginPath();
      this.selected_canvas.ctx.strokeStyle = this.text_color;
      this.selected_canvas.ctx.moveTo(this.x,this.y+this.margin_text+5);
      this.l=this.text.length*this.size/2;
      this.selected_canvas.ctx.lineTo(this.x+this.l,this.y+this.margin_text+5);
      this.selected_canvas.ctx.stroke();
      this.selected_canvas.ctx.fillStyle=old_color;
    }
}