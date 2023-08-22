const basicUrl = 'https://jsonplaceholder.typicode.com/';
fetch(`${basicUrl}users`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error:${response.status} `);
    }
    response.json();
  })
  .then();
