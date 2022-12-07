import React, { useState, useEffect } from "react";
import "../estilo.css";

function TelaMatch() {

    const [champsMatch, setChampsMatch] = useState([])
    
    useEffect(() => {
        getChampsMatch();
    }, [])

    function getChampsMatch(){

        var data = [
            {"id": 1,"name": "Master Yi","image": "1"},
            {"id": 2,"name": "Rammus",   "image": "2"},
            {"id": 3,"name": "Vi",   "image": "2"},
            {"id": 4,"name": "Leona",   "image": "2"},
            {"id": 5,"name": "Darius",   "image": "2"}
        ];
        
        setChampsMatch( data );
    }


    return(
        <div className="divPrincipal" >
            <table>
                <tbody>
                    <tr>
                        <th></th> 
                        <th>
                            <h1 className="texto">LoL Random Match</h1>
                        </th>
                        <th></th> 
                    </tr>

                    <tr>
                        <th> 
                            {champsMatch.map( c1 => (
                                <div className="divTeam01" key={c1.id} >
                                    <img src={ require('../imgs/'+ c1.id +'.jpg') } alt="mapa Summoner's Rift" /> 
                                    <label className="texto" > {c1.name} </label>
                                </div>      
                            ) )}
                        </th>

                        <th>
                            <img src={ require('../imgs/mapa.png') } alt="mapa Summoner's Rift" className="img" /> 
                        </th>

                        <th className="tr" >    
                            {champsMatch.map( c1 => (
                                <div className="divTeam01, divTeam02" key={c1.id} >
                                    <label className="texto" > {c1.name} </label>
                                    <img src={ require('../imgs/'+ c1.id +'.jpg') } alt="mapa Summoner's Rift" /> 
                                </div>      
                            ) )}
                        </th>

                    </tr>
                </tbody>
            </table>
        </div>

    );
    
}

export default TelaMatch;