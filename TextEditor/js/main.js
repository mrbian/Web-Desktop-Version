/**
 * Created by bian on 2015/10/29.
 */
function NaiveStrMatching(T,P){
    var p = 0;
    var t = 0;
    var plen = P.length;
    var tlen = T.length;
    if(tlen < plen)
        return false;
    while(p < plen && t < tlen){
        if(T[t] == P[p]){
            p++;
            t++;
        }else{
            t = t - p + 1;
            p = 0;
        }
    }
    if(p >= plen){
        return t-plen+1;
    }
    else
        return false;
}

function Strcmp(s,t){
    if(s.length > t.length){
        return 1;
    }else if(s.length < t.length){
        return -1;
    }else if(s.length == t.length){
        return 0;
    }
}


function FindPos(T,P){
    var p = P.length - 1;
    var t = T.length - 1;
    var plen = P.length;
    var tlen = T.length;
    if(tlen < plen)
        return false;
    while(p > 0  && t > 0 ){
        if(T[t] == P[p]){
            p--;
            t--;
        }else{
            t = t - p;
            p = P.length - 1;
        }
    }
    if(p <= plen){
        return t-plen + 1;
    }
    else
        return false;
}

T = "abbcdd";
P = "ddfasdff";

console.log(FindPos(T,P));
console.log(Strcmp(T,P));