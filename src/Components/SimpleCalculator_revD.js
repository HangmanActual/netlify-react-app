import React from "react";
import './SimpleCalculator.css';

class SimpleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedValue: "0",
            displayedWork: "0",
            storedValue: 0,
            expression: "",
            result: 0,
            // operator: 0,
            // result: 0,
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
        this.root = this.root.bind(this);
        this.equals = this.equals.bind(this);
        this.backspace = this.backspace.bind(this);
        this.history = this.history.bind(this);
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
            displayedValue: "0",
            displayedWork: "0",
            storedValue: 0,
            oeprator: 0,
            result: 0,
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
        }));
    }

    // ========== APPEND ALL THE NUMBERS ==========
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
    // Once an operator is clicked, the displayed number value is sent to state.storedValue;
    // The displayed number value is still displayed until the next number is clicked;
    // Clicking an operator sets state.counter:0, so clicking next number replaces display;
    add () { // ADD
        if (this.state.operatorCounter == 0) { // If new operation
            this.setState((state) => ({
                storedValue: Number(state.displayedValue), // Store displayedValue upon click
                operator: "add", // Identifies operator
                operatorCounter: state.operatorCounter + 1, // Iterates operator counter
            }))
        } else { // If continuing operation
            let calculatedValue = this.state.storedValue + Number(this.state.displayedValue);
            this.setState((state) => ({
                // Equavalent action to equals().
                displayedValue: calculatedValue,
                storedValue: calculatedValue,
                operator: "add",
            }))
        }

        // This setState intentionally downstream
        this.setState((state) => ({
            displayedWork: state.displayedValue + " + ", // Show work 
            counter: 0,
            decimalCounter: 0,
        })) 
    }

    subtract () { // SUBTRACT
        if (this.state.operatorCounter == 0) {
            this.setState((state) => ({
                storedValue: Number(state.displayedValue), 
                operator: "subtract",
                operatorCounter: state.operatorCounter + 1,
            }))
        } else {
            let calculatedValue = this.state.storedValue - Number(this.state.displayedValue);
            this.setState((state) => ({
                // Equavalent action to equals().
                displayedValue: calculatedValue,
                storedValue: calculatedValue, 
                operator: "subtract",
            }))
        }

        this.setState((state) => ({
            displayedWork: state.displayedValue + " - ", // Show work 
            counter: 0,
            decimalCounter: 0,
        }))
    }
    multiply () { // MULTIPLY
        if (this.state.operatorCounter == 0) {
            this.setState((state) => ({
                storedValue: Number(state.displayedValue), // Store displayedValue, ready for next number.
                operator: "multiply",
                operatorCounter: state.operatorCounter + 1,
            }))
        } else {
            let calculatedValue = this.state.storedValue * Number(this.state.displayedValue);
            this.setState((state) => ({
                // Equavalent action to equals().
                displayedValue: calculatedValue,
                storedValue: calculatedValue, // Store displayedValue, ready for next number.
                operator: "multiply",
            }))
        }

        this.setState((state) => ({
            counter: 0,
            decimalCounter: 0,
        }))
    }

    divide () { // DIVIDE
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "Are you sure?"
            }));
        } else {
            if (this.state.operatorCounter == 0) {
                this.setState((state) => ({
                    storedValue: Number(state.displayedValue), // Store displayedValue, ready for next number.
                    operator: "divide",
                    operatorCounter: state.operatorCounter + 1,
                }))
            } else {
                let calculatedValue = this.state.storedValue / Number(this.state.displayedValue);
                this.setState((state) => ({
                    // Equavalent action to equals().
                    displayedValue: calculatedValue,
                    storedValue: calculatedValue, // Store displayedValue, ready for next number.
                    operator: "divide",
                }))
            }
        }

        this.setState((state) => ({
            counter: 0,
            decimalCounter: 0,
        }))
    }
    power () { // POWER
        if (this.state.operatorCounter == 0) {
            this.setState((state) => ({
                storedValue: Number(state.displayedValue), // Store displayedValue, ready for next number.
                operator: "power",
                operatorCounter: state.operatorCounter + 1,
            }))
        } else {
            let calculatedValue = this.state.storedValue ** Number(this.state.displayedValue);
            this.setState((state) => ({
                // Equavalent action to equals().
                displayedValue: calculatedValue,
                storedValue: calculatedValue, // Store displayedValue, ready for next number.
                operator: "power",
            }))
        }

        this.setState((state) => ({
            counter: 0,
            decimalCounter: 0,
        }))
    
    }
    root () { // ROOT
        if (this.state.counter == 0) {
            this.setState((state) => ({
                displayedValue: "sqrt()",
                operator: "root",
            }));
        } else {
            if (this.state.operatorCounter == 0) {
                let calculatedValue = Math.sqrt(Number(this.state.displayedValue));
                this.setState((state) => ({
                    displayedValue: calculatedValue,
                    storedValue: calculatedValue, // Store displayedValue, ready for next number.
                    operator: "instant_root",
                    operatorCounter: state.operatorCounter + 1,
                }))
            } else {
                let calculatedValue = Math.sqrt(Number(this.state.displayedValue));
                this.setState((state) => ({
                    // Equavalent action to equals().
                    displayedValue: calculatedValue,
                    storedValue: calculatedValue, // Store displayedValue, ready for next number.
                    operator: "root",
                }))
            }
        }

        this.setState((state) => ({
            counter: 0,
            decimalCounter: 0,
        }))
    }

    equals () { // EQUALS
        switch (this.state.operator) {
            case "add":
                this.setState((state) => ({
                    displayedValue: state.storedValue + Number(state.displayedValue),
                }));
                break;
            case "subtract":
                this.setState((state) => ({
                    displayedValue: state.storedValue - Number(state.displayedValue),
                }));
                break;
            case "multiply":
                this.setState((state) => ({
                    displayedValue: state.storedValue * Number(state.displayedValue),
                }));
                break;
            case "divide":
                this.setState((state) => ({
                    displayedValue: state.storedValue / Number(state.displayedValue),
                }));
                break;
            case "power":
                this.setState((state) => ({
                    displayedValue: state.storedValue ** Number(state.displayedValue),
                }));
                break;
        }

        this.setState((state) => ({ // Separately set counter: 0.
            counter: 0,
            decimalCounter: 0,
            operatorCounter: 0,
        }))
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

    // ==================== RENDER ====================
    render() {
        return (
            <div id="calculator">
                <div id="display">
                    <p id="displayContent">
                        displayedValue = {this.state.displayedValue} 
                        <br/>displayedWork = {this.state.displayedWork}
                        <br/>storedValue = {this.state.storedValue}, result = {this.state.result}
                        <br/> Counter {this.state.counter},
                        operatorCounter {this.state.operatorCounter},
                        {/* Sanity checks
                        <br/>displayedValue is a {typeof this.state.displayedValue}
                        <br/> storedValue is a {typeof this.state.storedValue}
                        stringLength = {this.state.displayedValue.length},
                        //
                        // this.state.displayedValue.at(-1) led to error after storing
                        // result in state.displayedValue instead of state.result.
                        lastChara = {this.state.displayedValue.at(-1)},
                        //
                        <br/>operator = {this.state.operator}
                        <br/>storedValue = {this.state.storedValue}
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
                        <button className="operatorButton" id="history">History</button>
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
                        onClick={() => {this.iterateCounter(); this.equals()}}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleCalculator;