import React from 'react';

class TodoItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isCompleted: false
    };
  }
  
  pipoca(e){
    e.preventDefault();
    this.checkbox.checked = !this.checkbox.checked  
    console.log();
    if (this.state.isCompleted) {
      this.setState({isCompleted: false});
    }else{
      this.setState({isCompleted: true})
    }
  }

  componentDidUpdate(prevprops, prevState){
    if(prevState.isCompleted !== this.state.isCompleted){
      this.props.onChangeState(this.state.isCompleted); 
    }
    
  }

  render(){
    return (
        <spam>
          <label className="control control--checkbox" style={{textDecoration: this.state.isCompleted ? 'line-through' : 'none'}}
                  onClick={this.pipoca.bind(this)}>{this.props.pamonha}
            <input ref={(cb) => {this.checkbox = cb; }} type="checkbox" />
            <div className="control__indicator"></div>  
        </label>
        </spam>
    )
  }
}

export default TodoItem