import React from "react";


import FormField from "../FormField/FormField";
import { statement } from "@babel/template";




export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formFieldList: null,
            formFieldsValues: new Array(this.props.loginConfig.length)
        }
    }


    //updates formFieldsValues Array with current value of input fields, Array length is equal to objects quantity in config Array
    controlInputValue = (value, index) => {
        const updatedFormFieldsValues = this.state.formFieldsValues;
        updatedFormFieldsValues[index] = value;
        this.setState({formFieldsValues:updatedFormFieldsValues})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.validate(this.state.formFieldsValues);
    }
    // tutaj powinien być obiekt konfiguracyjny zawierający wszystkie
    // propsy przekazywane do FormField, powinna zostać następnie napisana
    // funkcja, która iteruje się po obiekcie konfiguracyjnym i zwraca listę pól w formularzu
    // oprócz tego powinna być też funkcja, która się wywołuje po wywołaniu funkcji 
    // obsługującej "submit", wtedy ta funkcja poiterowałaby się po istniejących polach formularza
    // i posprawdzała czy są poprawne, jak tak to robi submit, jak nie to zwraca tablicę
    // z FormField z propsami włączającymi odpowiedni komunikat o błędzie, jeśli jednak to przejdzie bo 
    // na froncie zostanie wszystko dobrze wpisane to powinno pójść zapytanie na serwer, jesli się uda zarejestrować
    // użytkownika to spoko, jeśli nie (bo np. użytkownik już istnieje) to leci zwrotka i wywołuje się funckja 
    // generująca listę z FormFields z błędami, czyli trzeba mieć osobno funkcję która generuje z błędami,
    // osobno sprawdzającą błędy (ta powinna zwracać obiekt konfiguracyjny plus error messages) i osobno robiącą pierwsze puste pola
    
    //it creates initial FormFields basing on config objects Array passed as props
    componentWillMount() {
        const formFieldList = this.props.loginConfig.map((item, index)=>{
            return <FormField 
                key ={index} 
                index={index} 
                labelText={item.labelText} 
                type={item.type} 
                placeholder={item.placeholder} 
                controlInputValue={this.controlInputValue}/>
        })
        this.setState({
            formFieldList
        })
    }
    
    render() {
        return (
            <form action="post" onSubmit={this.handleSubmit}>
                <h1 className="title is-3">Zaloguj się</h1>
                    {this.state.formFieldList}
                    {console.log(this.state.formFieldsValues)}

                <div className="control">
                    <button className="button is-primary">Zaloguj</button>
                </div>

            </form>
        )
    }
}