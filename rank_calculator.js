//calcular nivel ranqueada 
const {level, rankTitle} = calculatorRank();
console.log(`O Herói tem um saldo de ${level} e está no nível ${rankTitle}`);

function calculatorRank(){
    let level = rank (150, 5);
    let rankTitle = rankName(level);
    return {level, rankTitle};

}

function rank(victorys, defeats){
    
    let rankLevel = victorys - defeats;
    return rankLevel;


}

function rankName(rankLevel){
    if (rankLevel <= 10){
        return "Ferro";
    }
    else if (rankLevel >= 11 && rankLevel <= 20){
        return "Bronze";
    }
    else if (rankLevel >= 21 && rankLevel <=50){
        return "Prata";
    }
    else if (rankLevel >= 51 && rankLevel <= 80){
        return "Ouro";
    }
    else if (rankLevel >= 81 && rankLevel <= 90){
        return "Diamante";
    }
    else if (rankLevel >= 91 && rankLevel <= 100){
        return "Lendário";
    }
    else if (rankLevel >= 101){
        return "Imortal";
    }
    else {
        return "Ainda sem classificação";
    }
    
    return rankName;
}
