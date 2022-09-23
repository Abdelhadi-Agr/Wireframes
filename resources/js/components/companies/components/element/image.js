export class image {
    x;
    y;
    l;
    L;
    url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png';
    type="image";
    selected_canvas;
    centerX;
    centerY;
    constructor(selected_canvas,x=100,y=100,l=100,L=100){
        this.x=x;
        this.y=y;
        this.l=l;
        this.L=L;
        this.selected_canvas=selected_canvas;
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
    }
    set X(value){
        this.x=value;
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set Y(value){
        this.y=value;
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set LONG(value){
        if(value<50){
            this.l=50;
        }
        else{
            this.l=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set LARG(value){
        if(value<50){
            this.L=50;
        }
        else{
            this.L=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set URL(value){
        this.url=value;
        this.refreche();
    }
    draw(){
        var markerObj = new Image();
        markerObj.src = this.url;
        this.selected_canvas.ctx.drawImage(markerObj,this.x,this.y,this.l,this.L);
    }
    in_it(mouseX,mouseY)
    {
        return (mouseX>=this.x && mouseX<=this.x+this.l && mouseY>=this.y && mouseY<=this.y+this.L);
    }
    encapsule(){
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.lineWidth = 1;
        this.selected_canvas.ctx.strokeStyle = 'tomato';
        this.selected_canvas.ctx.rect(this.x-2, this.y-2,this.l+4,this.L+4);
        this.selected_canvas.ctx.stroke();
    }
    delete(){
        this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
        for(let event in this.selected_canvas.events){
            if(this.selected_canvas.events[event]==this){
                this.selected_canvas.events.splice(event,1);
                break;
            }
        }
        for(let event in this.selected_canvas.events){
            this.selected_canvas.events[event].draw();
        }
    }
    decapsule(){
        this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
        for(let event in this.selected_canvas.events){
            this.selected_canvas.events[event].draw();
        }
    }
    refreche(){
        this.decapsule();
    }
    save(){
        let my_data={
            type:this.type,
            x:this.x,
            y:this.y,
            l:this.l,
            L:this.L,
            url:this.url,
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
    }
}
