export default async function getFeed(){
    const response = await fetch('/api/post/get-all-post')
    const data = await response.json()

    console.log(data.data)
    return data.data
}