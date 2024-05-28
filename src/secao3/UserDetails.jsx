import React from "react";

<<<<<<< HEAD
const UserDetails = ({pessoas}) => {
    return (
        <>
        <h2>People (section 3)</h2>
            {pessoas.map( 
                (pessoa, index) =>
                    <p key={index}>
                        {pessoa.nome}, 
                        {pessoa.idade}, 
                        {pessoa.profissao}, 
                        {pessoa.idade >= 18 ? "Pode tirar CNH" : <b>"Não pode tirar CNH"</b>}</p>  
            )}
        </>
    );
=======
const UserDetails = (props) => {
    console.log(props);
    {props.map( (pessoa) => {// (pessoa.idade >= 18) && 
            console.log(pessoa);
            <p>{pessoa.nome}, {pessoa.idade}, {pessoa.profissao}</p>
    }) }
>>>>>>> ad7e273 (update)
}

export default UserDetails;