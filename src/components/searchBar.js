import React, {Component} from 'react'; 

export default class SearchBar extends Component {
    state = { term: "" }     //*
   
    onChange = e => {
    this.setState({term: e.target.value})     // evenement.input(la balise ce qu'on vise pour déclancher l'evenement).valeur (ce que y'a a l'intérieur)
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.onForSubmit(this.state.term)

    }
    
    render(){
        return (
            <div className='card mb-3'>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='nom'>Recherche : </label>
                            <input 
                            type='text' 
                            className='form-control form-control-lg'
                            value={this.state.term}
                            onChange={this.onChange}   />     
                        </div> 
                    </form>

                </div>

            </div>
        )
    }
}

// * term = ce que j'ai tape dans la barre de recherche
//**// le 2eme onChange=toto */