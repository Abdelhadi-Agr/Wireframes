import { rectangle } from "./rectangle";

export class div extends rectangle{
    type='div';
    div_elements=[];
    child_divs=[];
    constructor(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color){
        super(selected_canvas,x,y,l,L,size,border_color,fill_color,text,text_color);
    }
    get_div_elements(){
        this.div_elements=[];
        this.child_divs=[];
        for(let i=0;i<this.selected_canvas.events.length;i++){
            if(this.selected_canvas.events[i]!=this){
                if(this.selected_canvas.events[i].type=='div')
                {
                    if(this.in_it(this.selected_canvas.events[i].centerX,this.selected_canvas.events[i].centerY) && this.surface>this.selected_canvas.events[i].surface){
                        this.div_elements.push(this.selected_canvas.events[i]);
                        this.child_divs.push(this.selected_canvas.events[i]);
                    }
                }
                else{
                    if(this.in_it(this.selected_canvas.events[i].centerX,this.selected_canvas.events[i].centerY)){
                    let result=false;
                      for(let j=this.child_divs.length-1;j>=0;j--){
                        if(this.child_divs[j].in_it(this.selected_canvas.events[i].centerX,this.selected_canvas.events[i].centerY)){
                            result=true;
                            break;
                        }
                      }
                      if(!result){
                        this.div_elements.push(this.selected_canvas.events[i]);
                      }
                    }
                }
            }
        }
    }
    set X(value){
        let delta=value-this.x;
        super.X=value;
        this.get_div_elements();
        if(this.div_elements.length!=0){
            for(let i=0;i<this.div_elements.length;i++){
                this.div_elements[i].X=this.div_elements[i].x+delta;
            }
        }
    }
    set Y(value){
        let delta=value-this.y;
        super.Y=value;
        this.get_div_elements();
        if(this.div_elements.length!=0){
            for(let i=0;i<this.div_elements.length;i++){
                this.div_elements[i].Y=this.div_elements[i].y+delta;
            }
        }
       
    }
    set LARG(value){
        if(this.y+value>this.selected_canvas.c.height){
            value=this.selected_canvas.c.height-this.y;
            console.log('im here')
        }
        console.log(this.selected_canvas.c.height+' '+value+' '+this.y+' '+(value+this.y));
        this.L=value;
        this.centerX=this.x+this.l/2;
        this.centerY=this.y+this.L/2;
        this.surface=this.l*this.L;
        this.ordered();
        this.refreche();
    }
}
