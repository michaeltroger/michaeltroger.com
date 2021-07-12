/**
 * Copyright 2016 - Michael Troger <https://michaeltroger.com>
 */
function latinToCyrillic() {
    var latin = document.getElementById("latin");
    var cyrillic = document.getElementById("cyrillic");
    var exchanged = "";
    for(var i=0; i<latin.value.length; i++) {
        switch (latin.value.charAt(i)) {
            case "a":   exchanged += "а";    break;
            case "b":   exchanged += "б";    break;
            case "v":   exchanged += "в";    break;
            case "g":   exchanged += "г";    break;
            case "đ":   exchanged += "ђ";    break;
            case "e":   exchanged += "е";    break;
            case "ž":   exchanged += "ж";    break;
            case "z":   exchanged += "з";    break;
            case "i":   exchanged += "и";    break;
            case "j":   exchanged += "ј";    break;
            case "k":   exchanged += "к";    break;
            case "l":
                if(latin.value.charAt(i+1) == "j") {  exchanged += "љ";   i++;  }
                else {  exchanged += "л";   }
                break;
            case "m":   exchanged += "м";    break;
            case "n":
                if(latin.value.charAt(i+1) == "j") {   exchanged += "њ";    i++;   }
                else {  exchanged += "н";   }
                break;
            case "o":   exchanged += "о";    break;
            case "p":   exchanged += "п";    break;
            case "r":   exchanged += "р";    break;
            case "s":   exchanged += "с";    break;
            case "t":   exchanged += "т";    break;
            case "ć":   exchanged += "ћ";    break;
            case "u":   exchanged += "у";    break;
            case "f":   exchanged += "ф";    break;
            case "h":   exchanged += "х";    break;
            case "c":   exchanged += "ц";    break;
            case "č":   exchanged += "ч";    break;
            case "d":
                if(latin.value.charAt(i+1) == "ž") {   exchanged += "џ";   i++; }
                else {   exchanged += "д"; }
                break;
            case "š":   exchanged += "ш";    break;

            case "A":   exchanged += "А";    break;
            case "B":   exchanged += "Б";    break;
            case "V":   exchanged += "В";    break;
            case "G":   exchanged += "Г";    break;
            case "Đ":   exchanged += "Ђ";    break;
            case "E":   exchanged += "Е";    break;
            case "Ž":   exchanged += "Ж";    break;
            case "Z":   exchanged += "З";    break;
            case "I":   exchanged += "И";    break;
            case "J":   exchanged += "Ј";    break;
            case "K":   exchanged += "К";    break;
            case "L":
                if(latin.value.charAt(i+1) == "j") {  exchanged += "Љ";   i++;  }
                else {  exchanged += "Л";   }
                break;
            case "M":   exchanged += "М";    break;
            case "N":
                if(latin.value.charAt(i+1) == "j") {   exchanged += "Њ";    i++;   }
                else {  exchanged += "Н";   }
                break;
            case "O":   exchanged += "О";    break;
            case "P":   exchanged += "П";    break;
            case "R":   exchanged += "Р";    break;
            case "S":   exchanged += "С";    break;
            case "T":   exchanged += "Т";    break;
            case "Ć":   exchanged += "Ћ";    break;
            case "U":   exchanged += "У";    break;
            case "F":   exchanged += "Ф";    break;
            case "H":   exchanged += "Х";    break;
            case "C":   exchanged += "Ц";    break;
            case "Č":   exchanged += "Ч";    break;
            case "D":
                if(latin.value.charAt(i+1) == "ž") {    exchanged += "Џ";   i++;   }
                else {   exchanged += "Д";  }
                break;

            case "Š":   exchanged += "Ш";    break;

            default: exchanged += latin.value.charAt(i);
        }
    }
    cyrillic.value = exchanged;
}

function cyrillicToLatin() {
    var latin = document.getElementById("latin");
    var cyrillic = document.getElementById("cyrillic");
    var exchanged = "";
    for(var i=0; i<cyrillic.value.length; i++) {
        switch (cyrillic.value.charAt(i)) {
            case "а":   exchanged += "a";    break;
            case "б":   exchanged += "b";    break;
            case "в":   exchanged += "v";    break;
            case "г":   exchanged += "g";    break;
            case "ђ":   exchanged += "đ";    break;
            case "е":   exchanged += "e";    break;
            case "ж":   exchanged += "ž";    break;
            case "з":   exchanged += "z";    break;
            case "и":   exchanged += "i";    break;
            case "ј":   exchanged += "j";    break;
            case "к":   exchanged += "k";    break;
            case "л":   exchanged += "l";   break;
            case "љ":   exchanged += "lj";   break;
            case "м":   exchanged += "m";    break;
            case "н":   exchanged += "n";    break;
            case "њ":   exchanged += "nj";    break;
            case "о":   exchanged += "o";    break;
            case "п":   exchanged += "p";    break;
            case "р":   exchanged += "r";    break;
            case "с":   exchanged += "s";    break;
            case "т":   exchanged += "t";    break;
            case "ћ":   exchanged += "ć";    break;
            case "у":   exchanged += "u";    break;
            case "ф":   exchanged += "f";    break;
            case "х":   exchanged += "h";    break;
            case "ц":   exchanged += "c";    break;
            case "ч":   exchanged += "č";    break;
            case "д":   exchanged += "d";    break;
            case "џ":   exchanged += "dž";    break;
            case "ш":   exchanged += "š";    break;

            case "А":   exchanged += "A";    break;
            case "Б":   exchanged += "B";    break;
            case "В":   exchanged += "V";    break;
            case "Г":   exchanged += "G";    break;
            case "Ђ":   exchanged += "Đ";    break;
            case "Е":   exchanged += "E";    break;
            case "Ж":   exchanged += "Ž";    break;
            case "З":   exchanged += "Z";    break;
            case "И":   exchanged += "I";    break;
            case "Ј":   exchanged += "J";    break;
            case "К":   exchanged += "K";    break;
            case "Л":  exchanged += "L";     break;
            case "Љ":  exchanged += "Lj";     break;
            case "М":   exchanged += "M";    break;
            case "Н": exchanged += "N";     break;
            case "Њ": exchanged += "Nj";     break;
            case "О":   exchanged += "O";    break;
            case "П":   exchanged += "P";    break;
            case "Р":   exchanged += "R";    break;
            case "С":   exchanged += "S";    break;
            case "Т":   exchanged += "T";    break;
            case "Ћ":   exchanged += "Ć";    break;
            case "У":   exchanged += "U";    break;
            case "Ф":   exchanged += "F";    break;
            case "Х":   exchanged += "H";    break;
            case "Ц":   exchanged += "C";    break;
            case "Ч":   exchanged += "Č";    break;
            case "Д":  exchanged += "D";   break;
            case "Џ":  exchanged += "Dž";   break;
            case "Ш":   exchanged += "Š";    break;

            default: exchanged += cyrillic.value.charAt(i);
        }
    }
    latin.value = exchanged;
}
