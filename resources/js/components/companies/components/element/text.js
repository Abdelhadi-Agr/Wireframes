import { rectangle } from "./rectangle";

export class text extends rectangle{
    type="text";
    constructor(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color){
        super(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color);
    }
    set SIZE(value){
        if(value<25){
            this.size=25;
        }
        else if(value>150){
           this.size=150;
        }
        else{
            this.size=value;
        }
        this.margin_text=this.size;
        this.LARG=1.5*this.margin_text;
        this.LONG=this.text.length*this.size/2;
        this.refreche();
    }
}