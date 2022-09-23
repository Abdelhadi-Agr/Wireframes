export class radio{
    x;
    y;
    r;
    clicked=false;
    selected_canvas;
    type="radio";
    centerX;
    centerY;
    constructor(selected_canvas,x=100,y=100,r=40){
        this.x=x;
        this.y=y;
        this.r=r;
        this.selected_canvas=selected_canvas;
        this.centerX=this.x;
        this.centerY=this.y;
    }
    set X(value){
        this.x=value;
        this.centerX=this.x;
        this.centerY=this.y;
        this.refreche();
    }

    set Y(value){
        this.y=value;
        this.centerX=this.x;
        this.centerY=this.y;
        this.refreche();
    }

    set R(value){
        if(value<10){
            this.r=10;
        }
        else if(value>50){
            this.r=50;
        }
        else{
            this.r=value;
        }
        this.refreche();
    }

    set CLICKED(value){
        for(let event in this.selected_canvas.events){
            if(this.selected_canvas.events[event].type=='radio'){
                this.selected_canvas.events[event].clicked=false; 
            }
        }
        this.clicked=value;
        this.refreche();
    }
    draw(){
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.strokeStyle = 'black';
        this.selected_canvas.ctx.lineWidth = 1;
        this.selected_canvas.ctx.arc(this.x,this.y,this.r, 0, 2 * Math.PI);
        this.selected_canvas.ctx.stroke();
        this.selected_canvas.ctx.beginPath();
        let old_color=this.selected_canvas.ctx.fillStyle;
        if(this.clicked){
            this.selected_canvas.ctx.arc(this.x,this.y,this.r/2, 0, 2 * Math.PI);
            this.selected_canvas.ctx.fillStyle='#6495ED';
            this.selected_canvas.ctx.fill();
        }
        this.selected_canvas.ctx.stroke();
        this.selected_canvas.ctx.fillStyle=old_color;
    }
    in_it(mouseX,mouseY)
    {
        return (mouseX>=this.x-this.r && mouseX<=this.x+this.r && mouseY>=this.y-this.r && mouseY<=this.y+this.r);
    }
    encapsule(){
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.lineWidth = 1;
        this.selected_canvas.ctx.strokeStyle = 'tomato';
        this.selected_canvas.ctx.rect(this.x-this.r-2, this.y-this.r-2,2*this.r+4,2*this.r+4);
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
            r:this.r,
            clicked:this.clicked,
        }
        return my_data;
    }
    read(file){
        this.type=file.type;
        this.x=file.x;
        this.y=file.y;
        this.r=file.r;
        this.clicked=file.clicked;
    }
}