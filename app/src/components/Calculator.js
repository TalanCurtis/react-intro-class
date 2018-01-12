import React ,{ Component} from 'react';
import calculatorImg from '../images/calculator.png';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Calculator",
            display: "0",
            operator:"",
            temp:0,
            resetDisplay:false
        }
    }

    clearDisplay(){
        this.setState({
            display: "0",
            operator:"",
            temp:0,
            resetDisplay:false
        })
    }

    calculate(){
        if(!this.state.operator) return;
        let result;
        switch(this.state.operator){
            case "+":
                result = Number(this.state.temp) + Number(this.state.display)
                break;
            case "-":
                result = Number(this.state.temp) - Number(this.state.display)
                break;
            case "/":
                result = Number(this.state.temp) / Number(this.state.display)
                break;
            case "*":
                result = Number(this.state.temp) * Number(this.state.display)
                break;
            default:
                console.log('defaultCalculate')
                break;
        }
        this.setState({
            display:result.toString(),
            operator:"",
            resetDisplay:true})
    }

    setOperator(operator){
        if(!this.state.operator){
            this.setState({
                temp:this.state.display,
                display:"0",
                operator: operator
            })
        }
    }

    setDisplay(num){
        if(this.state.resetDisplay===true){
            this.setState({
                display: num,
                resetDisplay: false
            })
        }else{
            let display = (this.state.display==="0")?num: this.state.display+num
            if(this.state.display.length<13){
                this.setState({display:display})
            }
        }
    }

    updateHeader(val){
        this.setState({header:val})

    }

    render(){
        return(
            <div id="calculator-container">
                <input id="header-input" onChange={(event)=>(this.updateHeader(event.target.value))}/>
                <h1 id="header"> {this.state.header} </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                    <span className="total">{this.state.display}</span>
                </div>

                <div className="btn clear" onClick={e=>{this.clearDisplay()}}></div>

                <div className="btn zero" onClick={(e)=>{this.setDisplay('0')}}></div>
                <div className="btn one" onClick={(e)=>{this.setDisplay('1')}}></div>
                <div className="btn two" onClick={(e)=>{this.setDisplay('2')}}></div>
                <div className="btn three" onClick={(e)=>{this.setDisplay('3')}}></div>
                <div className="btn four" onClick={(e)=>{this.setDisplay('4')}}></div>
                <div className="btn five" onClick={(e)=>{this.setDisplay('5')}}></div>
                <div className="btn six" onClick={(e)=>{this.setDisplay('6')}}></div>
                <div className="btn seven" onClick={(e)=>{this.setDisplay('7')}}></div>
                <div className="btn eight" onClick={(e)=>{this.setDisplay('8')}}></div>
                <div className="btn nine" onClick={(e)=>{this.setDisplay('9')}}></div>

                <div className="btn equal" onClick={(e)=>{this.calculate()}}></div>
                <div className="btn multiply" onClick={(e)=>{this.setOperator("*")}}></div>
                <div className="btn divide" onClick={(e)=>{this.setOperator("/")}}></div>
                <div className="btn subtract" onClick={e=>{this.setOperator('-')}}></div>
                <div className="btn add" onClick={e=>{this.setOperator('+')}}></div>
                </div>
            </div>
        )
    }
}

export default Calculator;