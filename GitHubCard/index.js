/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const GITHUB_API = 'https://api.github.com/users/';

const addGithubCard = (username) => {
  const githubLink = `${GITHUB_API}${username}`
  axios.get(githubLink)
    .then(response => response.data)
    .then(data => {
      const parent = document.querySelector('.cards');
      const gCard = GithubCard(data);
      parent.appendChild(gCard);
    })
}

addGithubCard('Omulosi');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]

followersArray.forEach((username) => {
  addGithubCard(username);
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function GithubCard(data) {
  const {
    avatar_url, 
    name, 
    login, 
    location, 
    url, 
    followers, 
    following, 
    bio
  } = data;

  const card = document.createElement('div');
  const imgURL = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameElem = document.createElement('h3');
  const username = document.createElement('p');
  const locationElem = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersElem = document.createElement('p');
  const followingElem = document.createElement('p');
  const bioElem = document.createElement('p');

  card.classList.add('card');
  imgURL.setAttribute('src', avatar_url);
  nameElem.classList.add('name');
  nameElem.textContent = name;
  username.classList.add('username');
  username.textContent = login;
  locationElem.textContent = `Location: ${location}`;
  profile.textContent = `Profile: `;
  profileLink.textContent = url;
  profileLink.setAttribute('href', url);
  followersElem.textContent = `Followers: ${followers}`;
  followingElem.textContent= `Following: ${following}`;
  bioElem.textContent =`Bio: ${bio}`;

  profile.appendChild(profileLink);

  cardInfo.appendChild(nameElem);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationElem);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followersElem);
  cardInfo.appendChild(followingElem);
  cardInfo.appendChild(bioElem);

  card.appendChild(imgURL)
  card.appendChild(cardInfo);

  //create a container for embedding github contribution graph
  // const graphDiv = document.createElement('div');
  // graphDiv.classList.add('calendar');

  // card.appendChild(graphDiv);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
