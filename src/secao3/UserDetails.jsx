import React from "react";

const UserDetails = (props) => (
    props.map( (pessoa) => (
        (pessoa.idade >= 18) $$ 
            return (<p>{pessoa.nome}, {pessoa.idade}, {pessoa.profissao}</p>);
        
        // if (props.idade >= 18) $$ 

    ))


export default UserDetails;