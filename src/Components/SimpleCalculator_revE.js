import React from "react";
import './SimpleCalculator.css';

class SimpleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBox: "",
            displayedValue: "0",
            displayedWork: "0",
            storedValue1: 0,
            storedValue2: 0,
            expression: "",
            // operator: 0,
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
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
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.power = this.power.bind(this);
        // this.root = this.root.bind(this);
        this.equals = this.equals.bind(this);
        this.equalsButton = this.equalsButton.bind(this);
        this.backspace = this.backspace.bind(this);
        this.history = this.history.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // ======================================== EVENTS ========================================
    // ========== FOUNDATIONS ==========
    iterateCounter () { // Counts how many buttons have been pressed.
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    clear () { // Clears everything to 0.
        this.setState((state) => ({
            inputBox: "",
            displayedValue: "0",
            displayedWork: "0",
            storedValue1: 0,
            storedValue2: 0,
            oeprator: 0,
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
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
        // if key is num1, trigger appendNum1()
        if (event.keyCode === 49) {
            this.appendNum1(); // YEEESSS IT WOOOORRKKSSS
        }
    }

    // ========== APPEND NUMBERS from onClick ==========
    // Clicking on a number will append that number to the display.
    appendNum1 () { // ONE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "1"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "1",
            }));
        }
    }
    appendNum2 () { // TWO
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "2"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "2",
            }));
        }
    }
    appendNum3 () { // THREE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "3"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "3",
            }));
        }
    }
    appendNum4 () { // FOUR
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "4"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "4",
            }));
        }
    }
    appendNum5 () { // FIVE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "5"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "5",
            }));
        }
    }
    appendNum6 () { // SIX
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "6"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "6",
            }));
        }
    }
    appendNum7 () { // SEVEN
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "7"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "7",
            }));
        }
    }
    appendNum8 () { // EIGHT
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "8"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "8",
            }));
        }
    }
    appendNum9 () { // NINE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "9"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "9",
            }));
        }
    }
    appendNum0 () { // ZERO
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "0"
            }));
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + "0",
            }));
        }
    }
    appendNumDot () { // DECIMAL
        if (this.state.decimalCounter == 0) {
            this.setState((state) => ({
                displayedValue: state.displayedValue + ".",
                decimalCounter: state.decimalCounter + 1,
            }));
        }
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
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
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
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
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
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
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
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
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
        } else { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
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
            storedValue1: state.displayedValue,
        }))

/*
        // this.equals(); // Passes result to dV
            ^Using this method, which every other operator uses, successfully passes dV to sV1, but does not
            pass the calculated result to dV. I don't know why.
*/
    }

    equalsButton () {
        if (this.state.operatorCounter > 0) { // If continuing operation
            this.setState((state) => ({ // First pass sV1 to sV2
                storedValue2: state.storedValue1,
                storedValue1: Number(state.displayedValue),
            }))
            this.equals(); // Passes result to dV
            this.setState((state) => ({
                storedValue1: state.displayedValue, // New result passed to sV1
                operator: "",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: "", // Shows work 
            counter: 0,
            decimalCounter: 0,
        })) 
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
            /*
            case "root":
                this.setState((state) => ({
                    displayedValue: Math.sqrt(state.storedValue1),
                }));
                break;
            */
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

    history() {

    }

    handleChange(event) {
        /*
        // A rather roundabout way to pass keyboard inputs into <input>, but otherwise
            it wouldn't work.
        // <input value=inputBox>, then inputBox=event.target.value. Keyboard inputs
            update inputBox, which then updates <input value= >.
        // If <input> is directy filled with keyboard inputs, then I don't know how to
            extract the inputted string and use it, but if keyboard inputs directly
            update a state, and then that state is passed to <input value= >, then that's
            fine because I can use the string stored in that state.
        */
        this.setState({
            inputBox: event.target.value,
        })
        
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: state.inputBox,
            }))
        } else {
            this.setState((state) => ({
                displayedValue: state.displayedValue + state.inputBox.at(-1),
            }))
        }

        this.setState((state) => ({
            counter: state.counter + 1,
            // Tried triggering this.iterateCounter in <input>, but that caused errors.
        }))
    }

    // ==================== RENDER ====================
    render() {
        return (
            <div id="calculator">
                <div id="display">
                    <p id="displayContent">
                        <input autoFocus 
                        value={this.state.inputBox}
                        onChange={this.handleChange}></input>
                        <br/>displayedValue = {this.state.displayedValue} 
                        <br/>displayedWork = {this.state.displayedWork}
                        <br/>storedValue1 = {this.state.storedValue1}, storedValue2 = {this.state.storedValue2}
                        <br/> Counter {this.state.counter},
                        operatorCounter {this.state.operatorCounter},
                        {/* Sanity checks
                        <br/>displayedValue is a {typeof this.state.displayedValue}
                        <br/> storedValue1 is a {typeof this.state.storedValue1}
                        stringLength = {this.state.displayedValue.length},
                        <br/>operator = {this.state.operator}
                        <br/>storedValue1 = {this.state.storedValue1}
                        */}
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
                    <div className="container" id="operators_topRowTwo">
                        <button className="operatorButton" id="history"
                        onClick={() => {this.iterateCounter(); this.history()}}>
                            History
                        </button>
                    </div>
                    {/*===== Operators Right Column =====*/}
                    <div className="container" id="operators_rightColumn">
                        <button className="operatorButton" id="Backspace"
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
                        <button className="operatorButton" id="multiple"
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