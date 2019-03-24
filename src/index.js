// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H = 50, Q = 25, D = 10, N  = 5, P = 1;
    var result = {};
    if (currency <= 0) return result = {};
    if (currency > 10000) return result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var H1 = currency - Math.floor(currency / H) * H;
    var Q1 = H1 - Math.floor(H1 / Q) * Q;
    var D1 = Q1 - Math.floor(Q1 / D) * D;
    var N1 = D1 - Math.floor(D1 / N) * N;
    var P1 = N1 - Math.floor(N1 / P) * P;
    for (var i = 1; i <= 5; i++) {
        if (Math.floor(currency / H) && i == 1) {
            result["H"] = Math.floor(currency / H);
        } 
        if (Math.floor(H1 / Q) && i == 2) {
            result["Q"] = Math.floor(H1 / Q);
        } 
        if (Math.floor(Q1 / D) && i == 3) {
            result["D"] = Math.floor(Q1 / D);
        } 
        if (Math.floor(D1 / N) && i == 4) {
            result["N"] = Math.floor(D1 / N);
        } 
        if (Math.floor(N1 / P) && i == 5) {
            result["P"] = Math.floor(N1 / P);
        }
    }
    return result;
}
