import React, {Component} from "react";




class ClassComponent extends React.Component{

    state = {
        prenom : ''
    };
    
    


    handleClick = () => {
       this.setState({prenom : 'koffi'});
    }

   // handleToggle = () => {
   //     setVisible((curent) => !curent);
   // };

   render(){
        return(
            <div>
                <h3>Class Component - Auteur = {this.state.prenom} </h3>
                <button onClick={this.handleClick}>AFFICHER/MASQUER</button>
                {/*<button onClick={this.handleToggle}>AFFICHER/MASQUER</button>*/}
            </div>
        )
    }
}
export default ClassComponent;
