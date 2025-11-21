//6.4: async/await syntax

const githubRequest = async (login) => {
  let response = await fetch(
    `https://api.github.com/users/${login}`
  );
  let json = await response.json();
  console.log(json)

  let summary = `${json.name}, ${json.company}`;
  console.log(summary);
};

githubRequest("eveporcello");