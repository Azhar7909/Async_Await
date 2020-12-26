console.log("Fetch Api");

// const api = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(function(res) {
//     console.log(res, "res");
// })
// console.log(api,"api");

async function getData() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(api, "api");
  const json = await api.json();
  console.log(json, "json");
}
// getData();

async function postApi() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Smart",
      body: "Wellcome",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  console.log(api, "api");
  const json = await api.json();
  console.log(json, "json");
}
postApi()
