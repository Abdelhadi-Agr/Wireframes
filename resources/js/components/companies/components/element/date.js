import { text } from "./text";
export class date extends text{
    type="date";
    constructor(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color){
        super(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color);
    }
}