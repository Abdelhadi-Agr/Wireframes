export class rectangle{
    x;
    y;
    l;
    L;
    size_border=1;
    border_color='black';
    fill_color='';
    text='placeholder';
    text_color='black';
    type='rectangle';
    selected_canvas;
    size=20;
    margin_text=20;//margin y of text in rectangle.
    margin_text_x=0;//margin x of text in rectangle. 
    centerX;
    centerY; //calculable.
    surface;
    constructor(selected_canvas,x='100',y='100',l='100',L='45',size_bolder='1',border_color='black',fill_color='',text='placeholder',text_color='black'){
      //alert('constructor');
      this.x=x;
      this.y=y;
      this.l=l;
      this.L=L;
      this.size_border=size_bolder;
      this.border_color=border_color;
      this.fill_color=fill_color;
      this.text=text;
      this.text_color=text_color;
      this.selected_canvas=selected_canvas;
      this.centerX=this.x+l/2;
      this.centerY=this.y+L/2;
      this.surface=this.l*this.L;
    }
    set X(value){
        if(value+this.l>=this.selected_canvas.c.width){
            this.x=this.selected_canvas.c.width-this.l;
        }
        else if(value<0){
            this.x=0;
        }
        else{
            this.x=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set Y(value){
        if(value+this.L>=this.selected_canvas.c.height){
            this.y=this.selected_canvas.c.height-this.L;
        }
        else if(value<0){
            this.y=0;
        }
        else{
            this.y=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.refreche();
    }

    set LONG(value){
        if(this.x+value>this.selected_canvas.c.width){
            value=this.selected_canvas.c.width-this.x;
        }
        if(value<this.text.length*this.size/2){
            this.l=this.text.length*this.size/2;
        }
        else{
            this.l=value;
        }
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.surface=this.l*this.L;
        this.ordered();
        this.refreche();
    }

    set LARG(value){
        
       if(value<this.margin_text+5){
           this.L=this.margin_text+5;
       }
       else{
           this.L=value;
       }
       this.centerX=this.x+this.l/2;
       this.centerY=this.y+this.L/2;
       this.surface=this.l*this.L;
       this.ordered();
        this.refreche();
    }

    set BORDER_COLOR(value){
        this.border_color=value;
        this.refreche();
    }

    set FILL_COLOR(value){
        this.fill_color=value;
        this.refreche();
    }

    set SIZE_BORDER(value){
        this.size_border=value;
        this.refreche();
    }

    set TEXT(value){
        if(this.l<value.length*this.size*0.55){
            this.LONG=value.length*this.size*0.6;
        }
        this.text=value;
        this.refreche();
    }

    set TEXT_COLOR(value){
        this.text_color=value;
        this.refreche();
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
    }
    in_it(mouseX,mouseY)
    {
        return (mouseX>=this.x && mouseX<=this.x+this.l && mouseY>=this.y && mouseY<=this.y+this.L);
    }
    encapsule(x='tomato'){
        this.selected_canvas.ctx.beginPath();
        this.selected_canvas.ctx.lineWidth = 1;
        this.selected_canvas.ctx.strokeStyle = x;
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
        this.selected_canvas.ctx.fillStyle=this.selected_canvas.color;
        this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
        for(let event in this.selected_canvas.events){
            this.selected_canvas.events[event].draw();
        }
    }
    refreche(){
        this.decapsule();
    }
    ordered(){
    let div_numbers=0;
      for(let i=0;i<this.selected_canvas.events.length;i++){
        if(this.selected_canvas.events[i].type=='div' || this.selected_canvas.events[i].type=='blank'){
          div_numbers=i;
        }
      }
      div_numbers++;
      for(let i=0;i<div_numbers;i++){
       let max=i;
       for(let j=i;j<div_numbers;j++){
         if(this.selected_canvas.events[j].calcul_surface()>this.selected_canvas.events[max].calcul_surface()){
           max=j;
           console.log(max);
         }         
       }
       let c=this.selected_canvas.events[max];
         this.selected_canvas.events[max]=this.selected_canvas.events[i];
         this.selected_canvas.events[i]=c;
      }
      console.log("variable desire est : "+div_numbers)
      console.log(this.selected_canvas.events);
      for(let i=0;i<div_numbers;i++){
        console.log(this.selected_canvas.events[i].type+" "+this.selected_canvas.events[i].calcul_surface())
    }
    }
    save(){
        let my_data={
            type:this.type,
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
    calcul_surface(){
        return this.l*this.L;
    }
  }   