const btns = document.querySelectorAll(".btn"),
  form = document.forms[0];

btns[0].addEventListener("click", (event) => {
  event.preventDefault();

  const newUser = {
    login: form.login.value,
    pas: form.pas.value,
  };

  console.log(newUser);

  fetch(
    "https://xander-firstdb-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  form.reset();
});

btns[1].addEventListener("click", async () => {
  async function getData(){
   return fetch(
      "https://xander-firstdb-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    )
      .then((response) => response.json())
      .then(data=>Object.values(data));
      // .then((data) => console.log(data));
  }

  let info = await getData()
  console.log(info)
});

//xander-firstdb
//https://xander-firstdb-default-rtdb.europe-west1.firebasedatabase.app/
// Xander-firstApp

// async function getData(){
//  fetch(
//     "https://xander-firstdb-default-rtdb.europe-west1.firebasedatabase.app/users.json"
//   )
//     .then((response) => response.json())
//     .then(data=>Object.values(data))
//     .then((data) => console.log(data));
// }

// let info = await getData()
// console.log(info);
// console.log('after info')