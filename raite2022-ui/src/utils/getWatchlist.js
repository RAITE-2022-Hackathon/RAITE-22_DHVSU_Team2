export default async function getWatchlist(id) {
    const response = await fetch('/api/user/get-watchlist/'+id)

    const data = await response.json()
    console.log('here watch')
    console.log(data.data)
    return data
}