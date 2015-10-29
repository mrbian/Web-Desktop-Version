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