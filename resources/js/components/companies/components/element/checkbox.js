import { image } from "./image";

export class checkbox extends image{
    type="checkbox";
    checked=true;
    constructor(selected_canvas,x,y,l,L){
        super(selected_canvas,x,y,l,L);
    }
    set CHECKED(value){
        this.checked=value;
        super.refreche();
    }
    draw(){
        var markerObj = new Image();
        if(this.checked){
            
            markerObj.src = 'https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/512/checked_checkbox.png';
            this.selected_canvas.ctx.drawImage(markerObj,this.x,this.y,this.l,this.L);
        }
        else{
            markerObj.src = 'https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/512/unchecked_checkbox.png';
            this.selected_canvas.ctx.drawImage(markerObj,this.x,this.y,this.l,this.L);
        }
    }
    save(){
        let my_data={
            type:this.type,
            x:this.x,
            y:this.y,
            l:this.l,
            L:this.L,
            url:this.url,
            checked:this.checked
        }
        return my_data;
    }
    read(file){
        this.type=file.type;
        this.x=file.x;
        this.y=file.y;
        this.l=file.l;
        this.L=file.L;
        this.url=file.url;
        this.checked=file.checked;
    }
}