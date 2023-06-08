import React from "react";
import './SimpleCalculator.css';

let initialNumber = "0";

class SimpleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "0",
            counter: 0,
        }
        // ==================== BIND EVENTS ====================
        this.iterateCounter = this.iterateCounter.bind(this);
        this.clear = this.clear.bind(this);
        this.appendNum1 = this.appendNum1.bind(this);
        this.appendNum2 = this.appendNum2.bind(this);
        this.appendNum3 = this.appendNum3.bind(this);
        this.appendNum4 = this.appendNum4.bind(this);
        this.appendNum5 = this.appendNum5.bind(this);
        this.appendNum6 = this.appendNum6.bind(this);
        this.appendNum7 = this.appendNum7.bind(this);
        this.appendNum8 = this.appendNum8.bind(this);
        this.appendNum9 = this.appendNum9.bind(this);
        this.appendNum0 = this.appendNum0.bind(this);
        this.appendNumDot = this.appendNumDot.bind(this);
        this.appendAdd = this.appendAdd.bind(this);
        this.appendSubtract = this.appendSubtract.bind(this);
        this.appendMultiply = this.appendMultiply.bind(this);
        this.appendDivide = this.appendDivide.bind(this);
    }

    // ==================== EVENTS ====================
    iterateCounter () { // Counts how many buttons have been pressed.
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    clear () { // Clears everything to 0.
        this.setState((state) => ({
            number: 0,
            counter: 0,
        }));
    }

    // ========== APPEND ALL THE NUMBERS ==========
    appendNum1 () { // ONE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "1"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "1",
            }));
        }
    }
    appendNum2 () { // TWO
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "2"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "2",
            }));
        }
    }
    appendNum3 () { // THREE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "3"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "3",
            }));
        }
    }
    appendNum4 () { // FOUR
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "4"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "4",
            }));
        }
    }
    appendNum5 () { // FIVE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "5"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "5",
            }));
        }
    }
    appendNum6 () { // SIX
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "6"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "6",
            }));
        }
    }
    appendNum7 () { // SEVEN
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "7"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "7",
            }));
        }
    }
    appendNum8 () { // EIGHT
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "8"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "8",
            }));
        }
    }
    appendNum9 () { // NINE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "9"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "9",
            }));
        }
    }
    appendNum0 () { // ZERO
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "0"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "0",
            }));
        }
    }
    appendNumDot () { // DECIMAL
        this.setState((state) => ({
            number: state.number + ".",
        }));
    }

    /* 
    // Removed for simple-calculator
    appendOpenPare () { // OPEN PARENTHESES
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "("
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "(",
            }));
        }
    }
    
    appendClosePare () { // CLOSE PARENTHESES
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "Can't close what ain't open"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + ")",
            }));
        }
    }
    */

    // ========== APPEND OPERATORS ==========
    appendAdd () { // ADD
        this.setState((state) => ({
            number: state.number + " + ",
        }));
    }
    appendSubtract () { // SUBTRACT
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "-"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + " - ",
            }));
        }
    }
    appendMultiply () { // MULTIPLY
        this.setState((state) => ({
            number: state.number + " x ",
        }));
    }
    appendDivide () { // DIVIDE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "Are you sure?"
            }));
        } else {
            this.setState((state) => ({
                number: state.number + " / ",
            }));
        }
    }
    appendPower () { // POWER
        this.setState((state) => ({
            number: state.number + "^",
        }));
    }
    appendRoot () { // ROOT
        if (this.state.counter == 0) {
            this.setState((state) => ({
                number: "Root("
            }));
        } else {
            this.setState((state) => ({
                number: state.number + "Root(",
            }));
        }
    }

    // ==================== RENDER ====================
    render() {
        return (
            <div id="calculator">
                <div id="display">
                    <p id="displayContent">
                        Number {this.state.number}
                        <br/>Count {this.state.counter}
                    </p>
                </div>
                <div id="interface">
                    {/*===== Numbers =====*/}
                    <div className="container" id="numbersContainer">
                        {/*Row 1*/}
                        <div className="container numberButtonContainer" id="numbers_rowOne">
                            <button className="numberButton" id="one" 
                            onClick={() => {this.iterateCounter(); this.appendNum1()}}>
                                1
                            </button>
                            <button className="numberButton" id="two"
                            onClick={() => {this.iterateCounter(); this.appendNum2()}}>
                                2
                            </button>
                            <button className="numberButton" id="three"
                            onClick={() => {this.iterateCounter(); this.appendNum3()}}>
                                3
                            </button>
                        </div>
                        {/*Row 2*/}
                        <div className="container numberButtonContainer" id="numbers_rowTwo">
                            <button className="numberButton" id="four"
                            onClick={() => {this.iterateCounter(); this.appendNum4()}}>
                                4
                            </button>
                            <button className="numberButton" id="five"
                            onClick={() => {this.iterateCounter(); this.appendNum5()}}>
                                5
                            </button>
                            <button className="numberButton" id="six"
                            onClick={() => {this.iterateCounter(); this.appendNum6()}}>
                                6
                            </button>
                        </div>
                        {/*Row 3*/}
                        <div className="container numberButtonContainer" id="numbers_rowThree">
                            <button className="numberButton" id="seven"
                            onClick={() => {this.iterateCounter(); this.appendNum7()}}>
                                7
                            </button>
                            <button className="numberButton" id="eight"
                            onClick={() => {this.iterateCounter(); this.appendNum8()}}>
                                8
                            </button>
                            <button className="numberButton" id="nine"
                            onClick={() => {this.iterateCounter(); this.appendNum9()}}>
                                9
                            </button>
                        </div>
                        {/*Row 4*/}
                        <div className="container numberButtonContainer" id="numbers_rowFour">
                            <button className="numberButton" id="zero"
                            onClick={() => {this.iterateCounter(); this.appendNum0()}}>
                                0
                            </button>
                            <button className="numberButton" id="decimal"
                            onClick={() => {this.iterateCounter(); this.appendNumDot()}}>
                                .
                            </button>
                        </div>
                    </div>
                    {/*===== Operators Top Row =====*/}
                    <div className="container" id="operators_topRowOne">
                        <button className="operatorButton" id="power">^</button>
                        <button className="operatorButton" id="root">Root</button>
                        <button className="operatorButton" id="clear"
                        onClick={this.clear}>
                            AC
                        </button>
                        {/*
                        <div className="button operatorButton" id="openPare"></div>
                        <div className="button operatorButton" id="closePare"></div>
                        <div className="button operatorButton" id="square"></div>
                        <div className="button operatorButton" id="power"></div>
                        <div className="button operatorButton" id="root"></div>
                        */}
                    </div>
                    <div className="container" id="operators_topRowTwo">
                        {/*
                        // Removed for simple-calculator
                        <button className="operatorButton" id="openPare"
                        onClick={() => {this.iterateCounter(); this.appendOpenPare()}}>
                            (
                        </button>
                        <button className="operatorButton" id="closePare"
                        onClick={() => {this.iterateCounter(); this.appendClosePare()}}>
                            )
                        </button>
                        */}
                        <button className="operatorButton" id="history">History</button>
                    </div>
                    {/*===== Operators Right Column =====*/}
                    <div className="container" id="operators_rightColumn">
                        <button className="operatorButton" id="Backspace">Backspace</button>
                        <button className="operatorButton" id="add"
                        onClick={() => {this.iterateCounter(); this.appendAdd()}}>
                            +
                        </button>
                        <button className="operatorButton" id="subtract"
                        onClick={() => {this.iterateCounter(); this.appendSubtract()}}>
                            -
                        </button>
                        <button className="operatorButton" id="multiple"
                        onClick={() => {this.iterateCounter(); this.appendMultiply()}}>
                            x
                        </button>
                        <button className="operatorButton" id="divide"
                        onClick={() => {this.iterateCounter(); this.appendDivide()}}>
                            /
                        </button>
                        <button className="operatorButton" id="equals">=</button>
                        {/*
                        <div className="button operatorButton" id="add"></div>
                        <div className="button operatorButton" id="subtract"></div>
                        <div className="button operatorButton" id="multiple"></div>
                        <div className="button operatorButton" id="divide"></div>
                        <div className="button operatorButton" id="clear"></div>
                        <div className="button operatorButton" id="equals"></div>
                        */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleCalculator;