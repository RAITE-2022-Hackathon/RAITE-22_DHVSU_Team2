export default async function singleCoinChart(id){
    const response = await fetch("https://api.coingecko.com/api/v3/coins/"+ id+"/market_chart?vs_currency=usd&days=7");

    const data = await response.json()
    console.log(data)

    return data
}