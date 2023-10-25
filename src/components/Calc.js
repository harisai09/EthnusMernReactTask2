import {Component}  from "react";
import './style.css';
export class Calculator extends Component{
    constructor(){
        super();
        this.state={exp:"",history:""};
    }
    add=(event)=>{
        this.setState({
            exp:this.state.exp+event.target.id
        });
    }
    calc=()=>{
        try{
            let m=eval(this.state.exp);
            this.setState({
                exp:m,
                history:this.state.history+'\n'+this.state.exp

            });
        }
        catch(err){
            this.setState({
                exp:"Error"
            });
        }
    }
    clear =()=>{
        this.setState({exp:""});
    };
    render(){
        return(
            <div id="container">
            <div id="screen">
                <div className="camera"></div>
                <p className="history">{this.state.history}</p>
              <div className="exp"> <h2>{this.state.exp}</h2></div>
            </div>
            <div id="keys">
            <div id="left">
           <div class="key" id="7" onClick={this.add} >７</div>
           <div class="key" id="8" onClick={this.add} >８</div>
           <div class="key" id="9" onClick={this.add} >９</div>
           <div class="key" id="4" onClick={this.add} >４</div>
           <div class="key" id="5" onClick={this.add} >５</div>
           <div class="key" id="6" onClick={this.add} >６</div>
           <div class="key" id="1" onClick={this.add} >１</div>
           <div class="key" id="2" onClick={this.add} >２</div>
           <div class="key" id="3" onClick={this.add} >３</div>
           <div class="key" id="0" onClick={this.add} >０</div>
           <div class="key" id="." onClick={this.add} >.</div>
           <div class="key" id="calc" onClick={this.calc} >🟰</div>
           </div>
           <div id="right">
           <div class="key" id="back" onClick={this.clear}>🔙</div>
           <div class="key" id="/" onClick={this.add} >➗</div>
           <div class="key" id="*" onClick={this.add} >✖</div>
           <div class="key" id="-" onClick={this.add} >➖</div>
           <div class="key" id="+" onClick={this.add} >➕</div>
            </div>
            </div>
            </div>
        )
    }
}

