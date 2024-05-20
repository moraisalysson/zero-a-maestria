import React from "react";

const UserDetails = ({pessoas}) => {
    return (
        <>
            {pessoas.map( 
                (pessoa, index) =>
                    <p key={index}>{pessoa.nome}, {pessoa.idade}, {pessoa.profissao}, {pessoa.idade >= 18 ? "Pode tirar CNH" : <b>"Não pode tirar CNH"</b>}</p>  
            )}
        </>
    );
}

export default UserDetails;