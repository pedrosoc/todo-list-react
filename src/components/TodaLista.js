import TodoItem from './TodoItem';
import React from 'react';

class TodaLista extends React.Component{
  constructor(props){
    super(props)
    this.pedrosos = this.props.pedrosos
    this.item = this.props.item
    this.state = {
      filhos: this.pedrosos,
      contador: 0
    }
  }
  pegarArrayComponents(){
    var retorno = [];
    for (var i=0; i < this.state.filhos.length; i++) {
        var coisa = this.state.filhos[i];
        retorno.push(<TodoItem onChangeState={this.changedState.bind(this)} key={i} pamonha={coisa}  />);
    }    
    return retorno
  }

  changedState(hasBeenCompleted){
    var contadorAtual = this.state.contador;
    
    if(hasBeenCompleted){
      this.setState({contador: contadorAtual + 1});
    } else {
      this.setState({contador: contadorAtual - 1});
    }
    // if(hasBeenCompleted){
    //   x
    // }else{
    //   
    // }
  }
  
  adicionarItem(e) {
    e.preventDefault();
    var nome = this.textInput.value;
    this.textInput.value = '';
    this.pedrosos.push(nome);
    this.setState({filhos: this.pedrosos});
  }
  
  render(){
    var filhosComponents = this.pegarArrayComponents();
    var contador = filhosComponents.length;
    
    return (
      <form className="form" onSubmit={this.adicionarItem.bind(this)}>
        {/*<img src="lista.jpg" />*/}
        <div className="filter"></div>
        <div className="afterfilter">
          <h1> ToDo List </h1> <br/>
          {filhosComponents}

          <br/>
            <input type="text" ref={(input) => {this.textInput = input; }}/>
            <button> Adicionar item </button>

          <br/><br/>
          <div> Itens na lista: {contador} </div>
          <div> Atividades completas: {this.state.contador} </div>
      </div>
        

      </form>   
    )
  }
}
export default TodaLista