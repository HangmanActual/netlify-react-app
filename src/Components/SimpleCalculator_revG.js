import React from "react";
import './SimpleCalculator.css';

class SimpleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedValue: "0",
            displayedWork: "",
            storedValue1: 0,
            storedValue2: 0,
            flooredValue: 0,
            operator: "",
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
            decimalPlaces: 10,
            tester: "",
        }
        // ==================== BIND EVENTS ====================
        this.iterateCounter = this.iterateCounter.bind(this);
        this.clear = this.clear.bind(this);
        this.appendNum = this.appendNum.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.power = this.power.bind(this);
        this.equals = this.equals.bind(this);
        this.equalsButton = this.equalsButton.bind(this);
        this.backspace = this.backspace.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.threeDecimalPlaces = this.threeDecimalPlaces.bind(this);
        this.moveDecimalLeft = this.moveDecimalLeft.bind(this);
        this.moveDecimalRight = this.moveDecimalRight.bind(this);
    }

    // ======================================== EVENTS ========================================
    // ========== WORKSPACE ==========
    moveDecimalLeft() {
        if (this.state.decimalPlaces > 0) {
            this.setState ((state) => ({
                decimalPlaces: state.decimalPlaces - 1,
                //displayedValue: Number(state.displayedValue).toFixed(state.decimalPlaces),
            }))
        };
    }

    threeDecimalPlaces() {
        this.setState ((state) => ({
            decimalPlaces: 3,
            //displayedValue: Number(state.displayedValue).toFixed(state.decimalPlaces),
        }))
    }

    moveDecimalRight() {
        this.setState ((state) => ({
            decimalPlaces: state.decimalPlaces + 1,
            //displayedValue: Number(state.displayedValue).toFixed(state.decimalPlaces)
        }))
    }
    // ========== FOUNDATIONS ==========
    iterateCounter () { // Counts how many buttons have been pressed.
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    clear () { // Clears everything to 0.
        this.setState((state) => ({
            displayedValue: "0",
            displayedWork: "",
            storedValue1: 0,
            storedValue2: 0,
            flooredValue: 0,
            oeprator: 0,
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
            tester: "",
        }));
    }

    // ========== APPEND NUMBERS from keydown ==========
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
                case 54: document.getElementById("power").click(); break;
            }
        } else {
            switch (event.keyCode) {
                // keyboard 
                case 49: document.getElementById("one").click(); break;
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
                // power event captured in event.shiftKey if-else
                case 187: document.getElementById("equals").click(); break;
                case 13: document.getElementById("equals").click(); break;
                case 8: document.getElementById("backspace").click(); break;
                case 46: document.getElementById("clear").click(); break;
                
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
                // No power^ button on numpad.
                case 13: document.getElementById("equals").click(); break;
            }
        }
    }

    // ========== APPEND NUMBERS from onClick ==========
    // onClick triggers appendNum(), which reads element value to decide case.

    appendNum (event) { // YES THIS WORKS TOO
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
        
        this.iterateCounter();
    }

    // ========== OPERATORS ==========
    // Once an operator is clicked, the displayed number value is sent to state.storedValue1;
    // The displayed number value is still displayed until the next number is clicked;
    // Clicking an operator sets state.counter:0, so clicking next number replaces display;
    add () { // ADD
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "add", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator == "add" && this.state.counter == 0) {
            // do nothing
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
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
        } else if (this.state.operator == "subtract" && this.state.counter == 0) {
            // do nothing
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                operator: "subtract",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " - ", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    multiply () { // MULTIPLY
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "multiply", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator == "multiply" && this.state.counter == 0) {
            // do nothing
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
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
        } else if (this.state.operator == "divide" && this.state.counter == 0) {
            // do nothing
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
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
    

    power () { // POWER
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue),
                operator: "power", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else if (this.state.operator == "power" && this.state.counter == 0) {
            // do nothing
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                operator: "power",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + "^", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    root () { // ROOT
        this.setState ((state) => ({
            displayedValue: Math.sqrt(Number(state.displayedValue)),
            storedValue1: Number(state.displayedValue),
        }))
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
            /* Not needed.
            this.setState((state) => ({
                storedValue1: Number(state.displayedValue), // New result passed to sV1
                operator: ""
            }))
            */
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: "", // Shows work 
            storedValue1: 0,
            storedValue2: 0,
            flooredValue: Math.floor(state.displayedValue),
            counter: 0,
            operatorCounter: 0,
            decimalCounter: 0,
        }))

        if (this.state.flooredValue > 10) {
            this.setState((state) => ({
                tester: "true"
            }))
        } else {
            this.setState((state) => ({
                tester: "false"
            }))
        }
        // state.displayedValue = current state;
        // this.state.displayedValue = previous state (?) 
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
    }
    // ========== FINISHING TOUCHES ==========
    backspace() {
        let displayedValue = this.state.displayedValue;
        if (displayedValue.length > 1) {
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

    // ==================== RENDER ====================
    render() {
        // No curly brackets requires; yes this.state. notation.
        // let lastDigit = this.state.displayedValue.at(-1);

        return (
            <div id="calculator">
                <div className="container" id="displayScreen">
                    <p className="display" id="displayedWork">
                        {this.state.displayedWork}
                    </p>
                    <p className="display" id="displayedValue">
                        {this.state.displayedValue} {typeof this.state.displayedValue}
                        <br/> 
                        sV1: {this.state.storedValue1} {typeof this.state.storedValue1},
                        sV2: {this.state.storedValue2} {typeof this.state.storedValue2},
                        fV: {this.state.flooredValue} {typeof this.state.flooredValue}
                        <br/> 
                        counter: {this.state.counter},
                        decimalCounter: {this.state.decimalCounter},
                        decimalPlaces: {this.state.decimalPlaces},
                        tester: {this.state.tester}
                        {/*
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
                            <button className="numberButton" id="one" value="one"
                            onClick={this.appendNum}>
                                1
                            </button>
                            <button className="numberButton" id="two" value="two"
                            onClick={this.appendNum}>
                                2
                            </button>
                            <button className="numberButton" id="three" value="three"
                            onClick={this.appendNum}>
                                3
                            </button>
                        </div>
                        {/*Row 2*/}
                        <div className="container numberButtonContainer" id="numbers_rowTwo">
                            <button className="numberButton" id="four" value="four"
                            onClick={this.appendNum}>
                                4
                            </button>
                            <button className="numberButton" id="five" value="five"
                            onClick={this.appendNum}>
                                5
                            </button>
                            <button className="numberButton" id="six" value="six"
                            onClick={this.appendNum}>
                                6
                            </button>
                        </div>
                        {/*Row 3*/}
                        <div className="container numberButtonContainer" id="numbers_rowThree">
                            <button className="numberButton" id="seven" value="seven"
                            onClick={this.appendNum}>
                                7
                            </button>
                            <button className="numberButton" id="eight" value="eight"
                            onClick={this.appendNum}>
                                8
                            </button>
                            <button className="numberButton" id="nine" value="nine"
                            onClick={this.appendNum}>
                                9
                            </button>
                        </div>
                        {/*Row 4*/}
                        <div className="container numberButtonContainer" id="numbers_rowFour">
                            <button className="numberButton" id="zero" value="zero"
                            onClick={this.appendNum}>
                                0
                            </button>
                            <button className="numberButton" id="decimal" value="decimal"
                            onClick={this.appendNum}>
                                .
                            </button>
                        </div>
                    </div>
                    {/*===== Operators Top Row =====*/}
                    <div className="container" id="operators_topRowOne">
                        <button className="operatorButton" id="power"
                        onClick={() => {this.iterateCounter(); this.power()}}>
                            ^
                        </button>
                        <button className="operatorButton" id="root"
                        onClick={() => {this.iterateCounter(); this.root()}}>
                            Root
                        </button>
                        <button className="operatorButton" id="clear"
                        onClick={this.clear}>
                            AC
                        </button>
                    </div>

                    {/*===== Operators Second Row =====*/}
                    <div className="container" id="operators_topRowTwo">
                        <button className="operatorButton" id="moveDecimalLeft"
                        onClick={() => {this.iterateCounter(); this.moveDecimalLeft()}}>
                            Move Decimal Left
                        </button>
                        <button className="operatorButton" id="threeDecimalPlaces"
                        onClick={() => {this.iterateCounter(); this.threeDecimalPlaces()}}>
                            Three Decimal Places
                        </button>
                        <button className="operatorButton" id="moveDecimalRight"
                        onClick={() => {this.iterateCounter(); this.moveDecimalRight()}}>
                            Move Decimal Right
                        </button>
                    </div>
                    {/*===== Operators Right Column =====*/}
                    <div className="container" id="operators_rightColumn">
                        <button className="operatorButton" id="backspace"
                        onClick={this.backspace}>
                            Backspace
                        </button>
                        <button className="operatorButton" id="add"
                        onClick={() => {this.iterateCounter(); this.add()}}>
                            +
                        </button>
                        <button className="operatorButton" id="subtract"
                        onClick={() => {this.iterateCounter(); this.subtract()}}>
                            -
                        </button>
                        <button className="operatorButton" id="multiply"
                        onClick={() => {this.iterateCounter(); this.multiply()}}>
                            x
                        </button>
                        <button className="operatorButton" id="divide"
                        onClick={() => {this.iterateCounter(); this.divide()}}>
                            /
                        </button>
                        <button className="operatorButton" id="equals"
                        onClick={() => {this.iterateCounter(); this.equalsButton()}}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleCalculator;