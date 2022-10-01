export default async function login(email,password){
  console.log(email,password)
    const response = await fetch('/api/loginUser/',{
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password
      })
    })
}

// export default async function login(username,password){
//     const response = await fetch('/api/loginUser/',{
//         method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username, password
//       })
//     })
// }

// export default async function login(username,password){
//     const response = await fetch('/api/loginUser/',{
//         method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username, password
//       })
//     })
// }

// export default async function login(username,password){
//     const response = await fetch('/api/loginUser/',{
//         method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username, password
//       })
//     })
// }