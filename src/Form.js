import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {

        super(props)

        this.state = {
            nome: '',
            endereco: '',
            telefone: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);

    }
    
    handleInputChange(e){
        this.setState({
            nome: e.target.value,
            endereco: e.target.value,
            telefone: e.target.value
        })
    }
    render() {
        return (
            <section>   
               <form>
                   <label>
                       nome:
                       <input onChange={this.handleInputChange} type= 'text' placeholder='nome'/>

                   </label>
                   
                   <label>
                       endereco:
                       <input onChange={this.handleInputChange} type= 'text' placeholder='endereco'/>

                   </label>

                   <label>
                       telefone:
                       <input onChange={this.handleInputChange} type= 'text' placeholder='telefone'/>

                   </label>


                   <button type='submit'>Enviar</button>
               </form>
            </section>
        )
    }
}


export default Form;