



const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=leo&day=today",
    "method": "POST",
    "headers": {
        "x-rapidapi-key": "aec57077b7mshe7c9917e3720dc3p12dae9jsn6c72418df371",
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

function zodiacSign(day, month) {
    var zodiacSigns = {
        ari: "Aries",
        taur: "Taurus",
        gem: "Gemini",
        can: "Cancer",
        leo: "Leo",
        vir: "Virgo",
        lib: "Libra",
        sco: "Scorpio",
        sag: "Sagittarius",
        cap: "Capricorn",
        aqu: "Aquarius",
        pis: "Pisces",
    };

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return zodiacSigns.cap;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return zodiacSigns.aqu
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return zodiacSigns.pis
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return zodiacSigns.ari
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return zodiacSigns.taur
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        return zodiacSigns.gem
    } else if (( month == 6 && day >=22) || ( month == 7 && day <=22)) {
        return zodiacSigns.can
    } else if (( month == 7 && day >=23) || ( month == 8 && day <= 22)) {
        return zodiacSigns.leo
    } else if (( month == 8 && day >=23) || ( month == 9 && day <= 22)) {
        return zodiacSigns.vir
    } else if (( month == 9 && day >=23) || ( month == 10 && day <=23 )) {
        return zodiacSigns.lib
    } else if (( month == 10 && day >=24) || ( month == 11 && day <= 21)) {
        return zodiacSigns.sco
    } else if (( month == 11 && day >=22) || ( month == 12 && day <= 21)) {
        return zodiacSigns.sag
    }
}

