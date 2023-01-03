/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let res=0,len=(piles.length*(2/3))
    piles.sort((a,b)=> b-a)
    for(let i=0;i<len;i+=1){
        if(i%2===1){
            res+=piles[i]
        }

    }

    return res
};
