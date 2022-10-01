export default async function addCoinToWatchlist (userName, coinName) {
    console.log(userName)
    console.log(coinName)
    const response = await fetch ('/api/user/add-coin-to-watchlist/' + userName,{
        method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				coinName
			})
    })

}