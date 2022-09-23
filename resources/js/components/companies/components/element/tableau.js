import { div } from "./div";
export class tableau extends div{
    type='tableau';
    ligne=3;
    colone=3;
    constructor(selected_canvas,x,y,l,L,size,border_color){
        super(selected_canvas,x,y,l,L,size,border_color,'','','');
    }
    draw(){
      let old_color=this.selected_canvas.ctx.fillStyle;
      this.selected_canvas.ctx.beginPath();
      this.selected_canvas.ctx.lineWidth = this.size_border;
      this.selected_canvas.ctx.strokeStyle = this.border_color;
      this.selected_canvas.ctx.rect(this.x, this.y,this.l,this.L);
      this.selected_canvas.ctx.stroke();
      this.selected_canvas.ctx.beginPath();
      for(let i=0;i<this.ligne;i++){
        let px1=this.x;
        let py1=this.y+(i+1)*(this.L)/this.ligne;
        let px2=this.x+this.l;
        let py2=py1;
        this.selected_canvas.ctx.moveTo(px1,py1);
        this.selected_canvas.ctx.lineTo(px2, py2);
      }
      for(let j=0;j<this.colone;j++){
        let px1=this.x+(j+1)*(this.l)/this.colone;
        let py1=this.y;
        let px2=px1;
        let py2=this.y+this.L;
        this.selected_canvas.ctx.moveTo(px1,py1);
        this.selected_canvas.ctx.lineTo(px2, py2);
      }

      this.selected_canvas.ctx.stroke();
      this.selected_canvas.ctx.fillStyle=old_color;
    }
    save(){
      let my_data={
        type:this.type,
        x:this.x,
        y:this.y,
        l:this.l,
        L:this.L,
        size_border:this.size_border,
        fill_color:this.fill_color,
        text:this.text,
        text_color:this.text_color,
        size:this.size,
        margin_text:this.margin_text,
        margin_text_x:this.margin_text_x,
        ligne:this.ligne,
        colone:this.colone
      }
      return my_data;
    }
    read(file){
      this.type=file.type;
      this.x=file.x;
      this.y=file.y;
      this.l=file.l;
      this.L=file.L;
      this.size_border=file.size_border;
      this.fill_color=file.fill_color;
      this.text=file.text;
      this.text_color=file.text_color;
      this.size=file.size;
      this.margin_text=file.margin_text;
      this.margin_text_x=file.margin_text_x;
      this.ligne=file.ligne;
      this.colone=file.colone;
    }
    set LIGNE(value){
      this.ligne=value;
      this.refreche();
    }
    set COLONE(value){
      this.colone=value;
      this.refreche();
    }
}