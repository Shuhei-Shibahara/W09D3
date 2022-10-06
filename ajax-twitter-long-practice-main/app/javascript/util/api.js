const csrfToken = document.querySelector("meta[name=csrf-token]").content;

// async function customFetch(url, options = {}) {


//   return await fetch(url, options);
// }

export async function followUser(id){

  return await fetch(`/users/${id}/follow`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      'X-CSRF-TOKEN': csrfToken
    }
  }).then((res) => {
    if (!res.ok) { throw res; }
    return res.json();
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}



export async function unfollowUser(id){
// debugger
  return await fetch(`/users/${id}/follow`, {
    method: "DELETE",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      'X-CSRF-TOKEN': csrfToken
    }
  }).then((res) => {
    if (!res.ok) {throw res; }
    return res.json();
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

