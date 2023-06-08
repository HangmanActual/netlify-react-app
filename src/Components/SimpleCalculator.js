import React from "react";
import './SimpleCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
// import MathJax from 'react-mathjax';

class SimpleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedValue: "0",
            displayedWork: "",
            storedValue1: 0,
            storedValue2: 0,
            storedValue3: 0,
            flooredValue: 0,
            valueArray: [],
            operator: "",
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
            // caretCounter: 0,
            minusCounter: 0,
            divideCounter: 0,
            undoCounter: 0,
            tester: "",
        }
        // ==================== BIND EVENTS ====================
        this.clear = this.clear.bind(this);
        this.appendNum = this.appendNum.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.square = this.square.bind(this);
        this.power = this.power.bind(this);
        this.root = this.root.bind(this);
        this.negNum = this.negNum.bind(this);
        this.equals = this.equals.bind(this);
        this.equalsButton = this.equalsButton.bind(this);
        this.appendToArray = this.appendToArray.bind(this);
        this.backspace = this.backspace.bind(this);
        this.undo = this.undo.bind(this);
        this.answer = this.answer.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.handleKeyRelease = this.handleKeyRelease.bind(this);
        this.iterateCounter = this.iterateCounter.bind(this);
    } /* Events appear below in the order as their handles appear above.*/

    // ======================================== EVENTS ========================================
    clear () { // Clears everything to 0.
        this.setState((state) => ({
            displayedValue: "0",
            displayedWork: "",
            storedValue1: 0,
            storedValue2: 0,
            storedValue3: 0,
            valueArray: [],
            flooredValue: 0,
            operator: "",
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
            // caretCounter: 0,
            minusCounter: 0,
            divideCounter: 0,
            undoCounter: 0,
            tester: "",
        }));
    }
    
    // ========== APPEND NUMBERS from onClick ==========
    // onClick triggers appendNum(), which reads element value to decide case.
    appendNum (event) { // Appends characters to end of displayedValue string.
        if (this.state.displayedValue == "0" // Initial state
            || this.state.counter == 0) { // After an operator
                switch (event.target.value) { 
                case "one":
                    this.setState((state) => ({
                        displayedValue: "1",}));
                    break;
                case "two":
                    this.setState((state) => ({
                        displayedValue: "2",
                    }));
                    break;
                case "three":
                    this.setState((state) => ({
                        displayedValue: "3",
                    }));
                    break;
                case "four":
                    this.setState((state) => ({
                        displayedValue: "4",
                    }));
                    break;
                case "five":
                    this.setState((state) => ({
                        displayedValue: "5",
                    }));
                    break;
                case "six":
                    this.setState((state) => ({
                        displayedValue: "6",
                    }));
                    break;
                case "seven":
                    this.setState((state) => ({
                        displayedValue: "7",
                    }));
                    break;
                case "eight":
                    this.setState((state) => ({
                        displayedValue: "8",
                    }));
                    break;
                case "nine":
                    this.setState((state) => ({
                        displayedValue: "9",
                    }));
                    break;
                case "zero":
                    this.setState((state) => ({
                        displayedValue: "0",
                    }));
                    break;
                case "decimal":
                    if (this.state.decimalCounter == 0) { 
                        // Only appends if no decimals currently.
                        this.setState((state) => ({
                            displayedValue: "0.",
                            decimalCounter: state.decimalCounter + 1,
                        }));
                    }
            }
        } else {
            switch (event.target.value) { // For counter > 0
                case "one":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "1",
                    }));
                    break;
                case "two":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "2",
                    }));
                    break;
                case "three":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "3",
                    }));
                    break;
                case "four":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "4",
                    }));
                    break;
                case "five":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "5",
                    }));
                    break;
                case "six":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "6",
                    }));
                    break;
                case "seven":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "7",
                    }));
                    break;
                case "eight":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "8",
                    }));
                    break;
                case "nine":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "9",
                    }));
                    break;
                case "zero":
                    this.setState((state) => ({
                        displayedValue: state.displayedValue + "0",
                    }));
                    break;
                case "decimal":
                    if (this.state.decimalCounter == 0) {
                        this.setState((state) => ({
                            displayedValue: state.displayedValue + ".",
                            decimalCounter: state.decimalCounter + 1,
                        }));
                    };
            }
        }        
        
        this.iterateCounter(); // Iterates counter with almost every click.
    }

    // ========== OPERATORS ==========
    // Once an operator is clicked, the displayed number value is sent to state.storedValue1;
    // The displayed number value is still displayed until the next number is clicked;
    // Clicking an operator sets state.counter:0, so clicking next number replaces display;
    add () { // ADD
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // Stores displayedValue
                operator: "add", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator != 0 && this.state.counter == 0) {
            // If an operator clicked but no numbers appended yet;
            // For when user changed their mind on what operator to use.
            this.setState((state) => ({
                lastOperator: state.operator,
                operator: "add" // Informs switch in this.equals().
            }))
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                lastOperator: state.operator,
                operator: "add",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " + ", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    subtract () { // SUBTRACT
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "subtract", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator != 0 && this.state.counter == 0) {
            this.setState((state) => ({
                lastOperator: state.operator,
                operator: "subtract"
            }))
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                lastOperator: state.operator,
                operator: "subtract",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " - ", // Shows work 
            counter: 0,
            decimalCounter: 0,
            minusCounter: 1,
        }))     
    }

    multiply () { // MULTIPLY
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "multiply", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator != 0 && this.state.counter == 0) {
            this.setState((state) => ({
                lastOperator: state.operator,
                operator: "multiply"
            }))
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                lastOperator: state.operator,
                operator: "multiply",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " x ", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    divide () { // DIVIDE
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "divide", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator != 0 && this.state.counter == 0) {
            this.setState((state) => ({
                lastOperator: state.operator,
                operator: "divide"
            }))
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                lastOperator: state.operator,
                operator: "divide",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " / ", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }
    
    square () { // square
        this.setState((state) => ({
            displayedValue: Number(state.displayedValue) ** 2,
            storedValue2: state.displayedValue,
            displayedWork: state.displayedValue + "^2", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
        
        this.appendToArray();
    }

    power() {        
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                displayedWork: state.displayedValue + "^",
                storedValue1: Number(state.displayedValue),
                operator: "power", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else { // If clicking ^ twice.
            this.square();
            this.setState((state) => ({
                operatorCounter: 0,
            }))
        }
        
        /*
        else if (this.state.operator == "power" 
                && this.state.counter == 0) { // If just finished a power operation; 
            // Do nothing.
        } 
        
        /* There should not be any continuing operation with the power operator.
        else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                lastOperator: state.operator,
                operator: "power",
            }))
        }
        */

        // This setState intentionally downstream
        this.setState((state) => ({
             // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    root () { // ROOT
        this.setState ((state) => ({
            displayedValue: Math.sqrt(Number(state.displayedValue)),
            storedValue1: Number(state.displayedValue),
        }))
        this.iterateCounter();
        this.appendToArray();
    }

    negNum() { // displayedValue * -1
        this.setState((state) => ({
            displayedValue: Number(state.displayedValue) * -1,
            // storedValue1: Number(state.displayedValue) * -1,
        }))
        this.iterateCounter();
    }

    equals () { // EQUALS
        switch (this.state.operator) {
            case "add":
                this.setState((state) => ({
                    displayedValue: state.storedValue1 + state.storedValue2,
                }));
                break;
            case "subtract":
                this.setState((state) => ({
                    displayedValue: state.storedValue2 - state.storedValue1,
                }));
                break;
            case "multiply":
                this.setState((state) => ({
                    displayedValue: state.storedValue1 * state.storedValue2,
                }));
                break;
            case "divide":
                this.setState((state) => ({
                    displayedValue: state.storedValue2 / state.storedValue1,
                }));
                break;
            case "power":
                this.setState((state) => ({
                    displayedValue: state.storedValue2 ** state.storedValue1,
                    }));
                break;
        }

        this.appendToArray();
    }

    equalsButton () {
        document.activeElement.blur(); // Takes focus off of any clicked element,
        // Otherwise, "enter" will activiate that element.

        if (this.state.operatorCounter > 0) { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
        } else if (this.state.operatorCounter == 0) {
            this.appendToArray();
            /* Gives ability to simply add an answer if the user so wanted.*/
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: "", // Shows work 
            storedValue1: Number(state.displayedValue),
            counter: 0,
            operatorCounter: 0,
            decimalCounter: 0,
        }))
    }

    appendToArray () {
        if (this.state.displayedValue != 0
            && this.state.displayedValue != "") {
            this.setState((state) => ({
                valueArray: [...state.valueArray, Number(state.displayedValue)]
            }))
        }

        this.setState((state) => ({
            undoCounter: 0,
        }))
        
    }

    // ========== Fundamental Buttons ==========
    backspace() {
        let displayedValue = this.state.displayedValue;
        if (displayedValue.length > 1) {
            if (displayedValue.at(-1) == ".") {
                this.setState ((state) => ({
                    decimalCounter: 0,
                }))
            }
            this.setState((state) => ({
                displayedValue: displayedValue.slice(0,-1),
                // Slices from the 0th to the last, but counting backwards.
            }));
        } else if (displayedValue.length == 1 && displayedValue != 0) {
            this.setState ((state) => ({
                displayedValue: "0",
            }));
        }
    }

    undo() {
        let arrayLength = this.state.valueArray.length;
        let lastItemIndex = this.state.valueArray.length - 1;
        let secondLastItemIndex = this.state.valueArray.length - 2;
        if (arrayLength > 0) {
            if (this.state.undoCounter == 0) { // If a new result is passed to displayedValue
                this.setState((state) => ({
                    displayedValue: state.valueArray.splice(secondLastItemIndex, 1),
                    /* This splice works, but if using .pop() or splice(-1, 1), two items are
                        removed instead of just one.*/
                    undoCounter: state.undoCounter + 1,
                }))
            } else { // If user started typing, but hasn't pressed enter yet.
                this.setState((state) => ({
                    displayedValue: state.valueArray.splice(lastItemIndex, 1),
                }))
            }
        } else {
            this.setState ((state) => ({
                displayedValue: 0
            }))
        }
        
        this.setState((state) => ({
            displayedWork: "",
        }))
        
    }

    answer() {
        let lastItemIndex = this.state.valueArray.length - 1;
        this.setState((state) => ({
            displayedValue: state.valueArray.slice(lastItemIndex)
        }))
    }

    // ========== Keyboard Events ==========
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount () {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.shiftKey) {
            switch (event.keyCode) {
                case 187: document.getElementById("add").click(); break;
                case 56: document.getElementById("multiply").click(); break;
                case 54 /*^*/: document.getElementById("power").click(); break;
            }
        } else if (event.ctrlKey){
            switch (event.keyCode) {
                case 90/*ctrl+z*/: document.getElementById("undo").click(); break;
            }
        } else {
            switch (event.keyCode) {
                // keyboard 
                case 49: 
                    document.getElementById("one").click(); 
                    // document.getElementById("one").style.background = "pink"; 
                    break;
                case 50: document.getElementById("two").click(); break;
                case 51: document.getElementById("three").click(); break;
                case 52: document.getElementById("four").click(); break;
                case 53: document.getElementById("five").click(); break;
                case 54: document.getElementById("six").click(); break;
                case 55: document.getElementById("seven").click(); break;
                case 56: document.getElementById("eight").click(); break;
                case 57: document.getElementById("nine").click(); break;
                case 48: document.getElementById("zero").click(); break;
                case 190: document.getElementById("decimal").click(); break;
                // add event captured in event.shiftKey if-else statement
                case 189: document.getElementById("subtract").click(); break;
                // multiply event captured by above event.shiftKey if-else
                case 191: document.getElementById("divide").click(); break;
                // case 83 /*s-key*/: document.getElementById("square").click(); break;
                // power event captured in event.shiftKey if-else
                case 78 /*n-key*/: document.getElementById("negNum").click(); break;
                // case 82 /*r-key*/: document.getElementById("root").click(); break;
                // Trying to route to element doesn't work. Dunno why.
                case 82: this.root(); break;
                case 187: document.getElementById("equals").click(); break;
                case 13: document.getElementById("equals").click(); break;
                case 8: document.getElementById("backspace").click(); break;
                case 46 /*delete*/: document.getElementById("clear").click(); break;
                case 32 /*spacebar*/: document.getElementById("answer").click(); break;

                // numpad
                case 97: document.getElementById("one").click(); break;
                case 98: document.getElementById("two").click(); break;
                case 99: document.getElementById("three").click(); break;
                case 100: document.getElementById("four").click(); break;
                case 101: document.getElementById("five").click(); break;
                case 102: document.getElementById("six").click(); break;
                case 103: document.getElementById("seven").click(); break;
                case 104: document.getElementById("eight").click(); break;
                case 105: document.getElementById("nine").click(); break;
                case 96: document.getElementById("zero").click(); break;
                case 110: document.getElementById("decimal").click(); break;
                case 107: document.getElementById("add").click(); break;
                case 109: document.getElementById("subtract").click(); break;
                case 106: document.getElementById("multiply").click(); break;
                case 111: document.getElementById("divide").click(); break;
                // No square^ button on numpad.
                case 13: document.getElementById("equals").click(); break;
            }
        }
    }    

    /*
    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyRelease);
    }
    componentWillUnmount () {
        document.removeEventListener("keyup", this.handleKeyRelease);
    }

    handleKeyRelease(event) {
        switch (event.keyCode) {
            // keyboard 
            case 49: 
                document.getElementById("one").click(); 
                document.getElementById("one").style.background = "blue"; 
                break;
        }
    }
    */
    

    iterateCounter () { // Counts how many buttons have been pressed.
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    // ==================== RENDER ====================
    render() {
        // No curly brackets requires; yes this.state. notation.
        // let lastDigit = this.state.displayedValue.at(-1);

        return (
            <div id="calculator">
                <title>Simple Calculator</title>
                <div className="container" id="displayScreen">
                    <p className="display" id="displayedWork">
                        {this.state.displayedWork}
                    </p>
                    <p className="display" id="displayedValue">
                        {this.state.displayedValue} 
                    </p>
                    <p className="display" id="displayedTests">
                        {/*
                        caretCounter: {this.state.caretCounter}, 
                        operator: {this.state.operator}, 
                        this.state.counter: {this.state.counter}
                        valueArray: [{this.state.valueArray.join(", ")}] {typeof this.state.valueArray},
                        <br/> 
                        sV1: {this.state.storedValue1} {typeof this.state.storedValue1},
                        sV2: {this.state.storedValue2} {typeof this.state.storedValue2},
                        sV3: {this.state.storedValue3} {typeof this.state.storedValue3}
                        <br/> 
                        counter: {this.state.counter},
                        decimalCounter: {this.state.decimalCounter}, 
                        undoCounter: {this.state.undoCounter}
                        last digit: {this.state.displayedValue.at(-1)},
                        fV: {this.state.flooredValue} {typeof this.state.flooredValue}
                        */}
                    </p>
                </div>
                <div id="interface">
                    {/*===== Numbers =====*/}
                    <div className="container" id="numbersContainer">
                        {/*Row 1*/}
                        <div className="container numberButtonContainer" id="numbers_rowOne">
                            <button className="button numberButton" id="one" value="one"
                            onClick={this.appendNum}>
                                1
                            </button>
                            <button className="button numberButton" id="two" value="two"
                            onClick={this.appendNum}>
                                2
                            </button>
                            <button className="button numberButton" id="three" value="three"
                            onClick={this.appendNum}>
                                3
                            </button>
                        </div>
                        {/*Row 2*/}
                        <div className="container numberButtonContainer" id="numbers_rowTwo">
                            <button className="button numberButton" id="four" value="four"
                            onClick={this.appendNum}>
                                4
                            </button>
                            <button className="button numberButton" id="five" value="five"
                            onClick={this.appendNum}>
                                5
                            </button>
                            <button className="button numberButton" id="six" value="six"
                            onClick={this.appendNum}>
                                6
                            </button>
                        </div>
                        {/*Row 3*/}
                        <div className="container numberButtonContainer" id="numbers_rowThree">
                            <button className="button numberButton" id="seven" value="seven"
                            onClick={this.appendNum}>
                                7
                            </button>
                            <button className="button numberButton" id="eight" value="eight"
                            onClick={this.appendNum}>
                                8
                            </button>
                            <button className="button numberButton" id="nine" value="nine"
                             onClick={this.appendNum}>
                                9
                            </button>
                        </div>
                        {/*Row 4*/}
                        <div className="container numberButtonContainer" id="numbers_rowFour">
                            <button className="button numberButton" id="zero" value="zero"
                            onClick={this.appendNum}>
                                0
                            </button>
                            <button className="button numberButton" id="decimal" value="decimal"
                            onClick={this.appendNum}>
                                .
                            </button>
                        </div>
                    </div>
                    {/*===== Operators Top Row =====*/}
                    <div className="container" id="operators_topRowOne">
                        <button className="button operatorButton textButton" id="answer"
                        onClick={() => {this.iterateCounter(); this.answer()}}>
                            Ans
                            <p className="subtitle">Space</p>
                        </button>
                        <button className="button operatorButton textButton" id="undo"
                        onClick={() => {this.iterateCounter(); this.undo()}}>
                            Undo
                            <p className="subtitle">Ctrl+Z</p>
                        </button>
                        <button className="button operatorButton textButton" id="clear"
                        onClick={this.clear}>
                            AC
                            <p className="subtitle">Delete</p>
                        </button>
                    </div>

                    {/*===== Operators Second Row =====*/}
                    <div className="container" id="operators_topRowTwo">
                            <button className="button operatorButton textButton" id="power"
                            onClick={() => {this.iterateCounter(); this.power()}}>
                                Ans<sup>^</sup>
                                <p className="subtitle">Shift+6</p>
                            </button>
                            <button className="button operatorButton textButton" id="root"
                            onClick={() => {this.iterateCounter(); this.root()}}>
                                <span id="sqrt">&#8730;</span>Ans
                                <p className="subtitle">R</p>
                            </button>
                            <button className="button operatorButton textButton" id="negNum"
                            onClick={this.negNum}>
                                -(Num)
                                <p className="subtitle">N</p>
                            </button>
                    </div>
                    {/*===== Operators Right Column =====*/}
                    <div className="container" id="operators_rightColumn">
                        <button className="button operatorButton textButton" id="backspace"
                        onClick={this.backspace}>
                            Backspace
                        </button>
                        <button className="button operatorButton" id="add"
                        onClick={() => {this.iterateCounter(); this.add()}}>
                            <FontAwesomeIcon icon={faPlus} size="xs" style={{color: "#000000",}} />
                        </button>
                        <button className="button operatorButton" id="subtract"
                        onClick={() => {this.iterateCounter(); this.subtract()}}>
                            <FontAwesomeIcon icon={faMinus} size="xs" style={{color: "#000000",}} />
                        </button>
                        <button className="button operatorButton" id="multiply"
                        onClick={() => {this.iterateCounter(); this.multiply()}}>
                            <FontAwesomeIcon icon={faXmark} size="xs" style={{color: "#000000",}} />
                        </button>
                        <button className="button operatorButton" id="divide"
                        onClick={() => {this.iterateCounter(); this.divide()}}>
                            <FontAwesomeIcon icon={faDivide} size="xs" style={{color: "#000000",}} />
                        </button>
                        <button className="button operatorButton" id="equals"
                        onClick={() => {this.iterateCounter(); this.equalsButton()}}>
                            <FontAwesomeIcon icon={faEquals} size="xs" style={{color: "#000000",}} />
                        </button>
                    </div>
                </div>
                <div id="endCreditContainer">
                    <p id="endCredit">
                    Simple Calculator 2023
                    <br/>Designed and Coded By 
                    <br/> Jason Wei
                    </p>
                </div>
            </div>
        )
    }
}

export default SimpleCalculator;