import {div} from "./div";
export class blank extends div{
    type='blank';
    is_in_theme=true;
    constructor(selected_canvas,x,y,l,L,size,border_color,fill_color='grey',text,text_color){
        super(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color);
    }
    draw(){
      let old_color=this.selected_canvas.ctx.fillStyle;
      this.selected_canvas.ctx.beginPath();
      this.selected_canvas.ctx.lineWidth = this.size_border;
      this.selected_canvas.ctx.strokeStyle = this.border_color;
      if(this.fill_color=='' && this.border_color!=''){
          this.selected_canvas.ctx.rect(this.x, this.y,this.l,this.L);
          this.selected_canvas.ctx.stroke();
      }
      else if(this.fill_color!='' ){
          this.selected_canvas.ctx.fillStyle = this.fill_color;
          this.selected_canvas.ctx.fillRect(this.x, this.y,this.l,this.L);
          this.selected_canvas.ctx.stroke();
      }
      this.selected_canvas.ctx.font=this.size+"px Arial";
      this.selected_canvas.ctx.fillStyle = this.text_color;
      this.selected_canvas.ctx.fillText(this.text,this.x+this.margin_text_x,this.y+this.margin_text);
      this.selected_canvas.ctx.fillStyle=old_color;
      this.selected_canvas.ctx.stroke();
      if(this.is_in_theme){
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.strokeStyle = this.text_color;
        this.selected_canvas.ctx.moveTo(this.x,this.y);
        this.selected_canvas.ctx.lineTo(this.x+this.l,this.y+this.L);
        this.selected_canvas.ctx.stroke();
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.strokeStyle = this.text_color;
        this.selected_canvas.ctx.moveTo(this.x,this.y+this.L);
        this.selected_canvas.ctx.lineTo(this.x+this.l,this.y);
        this.selected_canvas.ctx.stroke();
      }
    }
    save(){
      let my_data={
          type:this.type,
          is_in_theme:this.is_in_theme,
          x:this.x,
          y:this.y,
          l:this.l,
          L:this.L,
          size_border:this.size_border,
          border_color:this.border_color,
          fill_color:this.fill_color,
          text:this.text,
          text_color:this.text_color,
          size:this.size,
          margin_text:this.margin_text,
          margin_text_x:this.margin_text_x
        }
        return my_data;
  }
  read(file){
      this.type=file.type;
      this.is_in_theme=file.is_in_theme
      this.x=file.x;
      this.y=file.y;
      this.l=file.l;
      this.L=file.L;
      this.size_border=file.size_border;
      this.border_color=file.border_color;
      this.fill_color=file.fill_color;
      this.text=file.text;
      this.text_color=file.text_color;
      this.size=file.size;
      this.margin_text=file.margin_text;
      this.margin_text_x=file.margin_text_x;
  }
}