import { rectangle } from "./rectangle";

export class button extends rectangle{
    type="button";
    margin_text_x=this.l*0.4;
    constructor(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color){
        super(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color);
    }
    set LONG(value){
        if(value<this.text.length*this.size/2+this.margin_text_x){
            this.l=this.text.length*this.size/2;
        }
        else{
            this.l=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.surface=this.l*this.L;
        this.margin_text_x=this.l/2-this.text.length*this.size/4;
        this.ordered();
        this.refreche();
    }
    set TEXT(value){
        if(this.l<value.length*this.size*0.55+this.margin_text_x){
            this.LONG=value.length*this.size*0.6+this.margin_text_x;
        }
        this.text=value;
        this.margin_text_x=this.l/2-this.text.length*this.size/4;
        this.refreche();
    }
    hover(){
        let old_color=this.selected_canvas.ctx.fillStyle;
        this.selected_canvas.ctx.fillStyle ="#6495ED";
        this.selected_canvas.ctx.fillRect(this.x,this.y,this.l,this.L);
        this.selected_canvas.ctx.fillStyle=old_color;
    }
    dishover(){
        this.refreche();
    }
}