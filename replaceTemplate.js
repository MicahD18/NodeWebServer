module.exports = (temp, country) => {
    let output = temp.replace(/{%COUNTRYNAME%}/g, country.countryName);
    output = output.replace(/{%FLAG%}/g, country.flag);
    output = output.replace(/{%RANKING%}/g, country.ranking);
    output = output.replace(/{%POPULATION%}/g, country.population);
    output = output.replace(/{%MONEY%}/g, country.money);
    output = output.replace(/{%LEADER%}/g, country.leader);
    output = output.replace(/{%CAPITAL%}/g, country.capital);
    output = output.replace(/{%CURRENCY%}/g, country.currency);
    output = output.replace(/{%LANGUAGE%}/g, country.language);
    output = output.replace(/{%DESCRIPTION%}/g, country.description);
    output = output.replace(/{%ID%}/g, country.id);
    return output;
}