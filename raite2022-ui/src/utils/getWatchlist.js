export default async function getWatchlist(id) {
    const response = await fetch('/api/user/get-watchlist/'+id)

    const data = await response.json()
    return data.data
}