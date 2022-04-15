// API url
const baseUrl = "HTTP://localhost:3000/";

// GET functie
const getData = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  const data = await res.json();
  console.log(data);
  return data;
};

// POST functie
const postData = async () => {
  const input = {description: inputTask.value, done: false}
  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {'Content-Type': 'application/json'},
  })
};

// DELETE functie
const deleteData = async (deleteInput) => {
  fetch(baseUrl + deleteInput, {
    method: 'DELETE'
  })
};

