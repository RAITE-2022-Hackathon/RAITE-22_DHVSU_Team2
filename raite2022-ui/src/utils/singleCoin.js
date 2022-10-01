export default async function singleCoin(id){
    const response = await fetch("https://api.coingecko.com/api/v3/coins/"+ id);

    const data = await response.json()
    console.log(data)

    return data
}