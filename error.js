async function getData() {
  const response = fetch("https://api.example.com/users");

  const data = response.json();

  console.log(data);
}

getData();