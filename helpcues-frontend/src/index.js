const baseURL = "http://localhost:3000/api/v1/"
const doneURL = "http://localhost:3000/api/v1/done"
const userDoneURL = "http://localhost:3000/api/v1/user-done"
const allButton = document.querySelector("#all-categories")
const animalsButton = document.querySelector("#animals")
const environmentButton = document.querySelector("#environment")
const familyButton = document.querySelector("#family")
const charityButton = document.querySelector("#charity")
const workButton = document.querySelector("#work")
const actImageEl = document.querySelector('#act-img')
const actTextEl = document.querySelector('#act-text')
const generateButton = document.querySelector(".generate-button")
const doneButton = document.querySelector(".done-button")
const doneCountEl = document.querySelector('#done-streak')
const newActForm = document.querySelector('#new-act-form')
const newActInput = document.querySelector('#new-act-input')
const newActCat = document.querySelector('#new-act-cat')
const signupButton = document.querySelector('.sign-up-button')
const signupForm = document.querySelector('#signup-form')
const signupFormCollapse = document.querySelector('.signup-form')
const signupInput = document.querySelector('#signup-input')
const welcomeMessage = document.querySelector('.welcome-message')
const newActCollapsibleButton = document.querySelector('.collapsible')
const newActCollapsibleForm = document.querySelector('.new-act-collapsible')
const loginButton = document.querySelector('.login-button')
const loginFormEl = document.querySelector('#login-form')
const loginFormCollapse = document.querySelector('.login-form')
const loginSelectUserEl= document.querySelector('#login-select-user')

const arrayOfCategories = [animalsButton, environmentButton, familyButton, charityButton, workButton]

let state = {
  acts: [],
  users: [],
  currentUser: 2,
  selectedCategories: new Set([]),
  newGif: ""
}

const categories = {
  animals: null,
  environment: null,
  family: null,
  charity: null,
  work: null,
}

//----------------Event Listeners-----------------------------

allButton.addEventListener(`click`, onAllButton)
animalsButton.addEventListener(`click`, onCatButton)
environmentButton.addEventListener(`click`, onCatButton)
familyButton.addEventListener(`click`, onCatButton)
charityButton.addEventListener(`click`, onCatButton)
workButton.addEventListener(`click`, onCatButton)
generateButton.addEventListener(`click`, onGenerateButton)
doneButton.addEventListener(`click`, onDoneButton)
newActForm.addEventListener(`submit`, onNewActSubmit)
signupForm.addEventListener(`submit`, onSignupFormSubmit)
newActCollapsibleButton.addEventListener(`click`, onCollapseButton)
loginFormEl.addEventListener(`submit`, onLoginFormSubmit)
signupButton.addEventListener(`click`, onSignUpButton)
loginButton.addEventListener(`click`, onLoginButton)

//----------Get data from API---------------

function fetchActsFromAPI() {
  return fetch('http://localhost:3000/api/v1/acts')
  .then(res => res.json())
  .then(res => state.acts = res)
}

function fetchUsersFromAPI() {
  return fetch('http://localhost:3000/api/v1/users')
  .then(res => res.json())
  .then(res => state.users = res)
}

function categoriesToState(categoriesReturn) {
  categories.animals = categoriesReturn.filter(cat => cat.name === "Animals")[0].id
  categories.environment = categoriesReturn.filter(cat => cat.name === "Environment")[0].id
  categories.family = categoriesReturn.filter(cat => cat.name === "Family/Friends")[0].id
  categories.charity = categoriesReturn.filter(cat => cat.name === "Charity")[0].id
  categories.work = categoriesReturn.filter(cat => cat.name === "At Work")[0].id
}

function fetchCategoriesFromAPI() {
  return fetch('http://localhost:3000/api/v1/categories')
  .then(res => res.json())
  .then(res => categoriesToState(res))
}

function init() {
  fetchCategoriesFromAPI()
  fetchActsFromAPI()
  fetchUsersFromAPI()
  .then(() => populateLoginForm())
}

//-----------Event Listener Functions----------

function onCatButton(event) {
  event.preventDefault()
  const catID = categories[event.target.id]
  allButton.classList.remove('focus')
  event.target.classList.toggle('focus')
  if (event.target.class === "active") {
    event.target.class = ""
    state.selectedCategories.delete(catID)
  }
  else {
    event.target.class = "active"
    state.selectedCategories.add(catID)
  }
}

function removeFocus(){
  const allFocus = document.querySelectorAll('.focus');
  [].forEach.call(allFocus, (el) => {
      el.classList.remove('focus')
  })
}

function onAllButton(event) {
  event.preventDefault()
  if (!event.target.classList.contains('focus')) {
    removeFocus()
    event.target.classList.add('focus')
      state.selectedCategories = new Set(Object.values(categories))
      allButton.class = "active"
      arrayOfCategories.forEach(category => category.class = "active")
    // }
  }  else {
    removeFocus()
    allButton.class = ""
    state.selectedCategories = new Set([])
    arrayOfCategories.forEach(category => category.class = "")
  }

}

function onLoginFormSubmit(event) {
  event.preventDefault()
  const targetUser = state.users.find(user => user.name === loginSelectUserEl.value)
  state.currentUser = targetUser
  loginFormEl.classList.toggle('visible')
  signupForm.classList.remove('visible')
  welcomeUser(targetUser.name)
}


function onDoneButton() {
    const selectedId = event.target.dataset.id
    const targetAct = state.acts.find(act => act.id === parseInt(selectedId))
    targetAct.done_count ++
    state.currentUser.done_count ++
    doneCountEl.innerText = `This act has been done ${targetAct.done_count} times.`
    displayUserDoneCount(state.currentUser)
    updateDoneDatabase(selectedId)
    if (state.currentUser !== 2) {
      updateUserDoneCountInAPI(state.currentUser.id)
    }

}

function displayUserDoneCount(targetUser) {
  if (targetUser.done_count > 0 && targetUser.done_count < 3) {
  welcomeMessage.innerText = `Well done, ${targetUser.name}. You have performed ${targetUser.done_count} acts of kindness.`
}
else if (targetUser.done_count > 2) {
  welcomeMessage.innerText = `You're on a roll ${targetUser.name}. You have performed ${targetUser.done_count} acts of kindness.`
}
}

  function updateDoneDatabase(id) {
    fetch(doneURL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          act_id: id,
          user_id: id
      })
    })
  }

  function updateUserDoneCountInAPI(user) {
    fetch(userDoneURL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user_id: state.currentUser.id
      })
    })
  }




//----------Render Act data to page--------------------


function renderAct(id) {
  const targetAct = state.acts.find(act => act.id === id)
  actImageEl.src = targetAct.image_url
  actTextEl.innerText = targetAct.content
  doneButton.style = "dislay: block;"
  doneButton.dataset.id = id
  doneCountEl.innerText = `This act has been done ${targetAct.done_count} times.`

}
//renders Act with a given ID


function getRandomIndex(actArray) {
  return Math.floor(Math.random() * actArray.length);
}
//returns random index within

function randomActFromSelectedCategoryIDs() {
  debugger
  const actArray = state.acts.filter(act => state.selectedCategories.has(act.category_id))
  const actIndex = getRandomIndex(actArray)
  return actArray[actIndex]
}
//selects random Act that matches the filtered categories

function onGenerateButton() {

  if (state.selectedCategories.size > 0) {
    const id = randomActFromSelectedCategoryIDs().id
    renderAct(id)

  }
  else {
    actImageEl.src = ""
    actTextEl.innerText = "Please select a category"
    doneCountEl.innerText = ``
    doneButton.style.display = "none"
  }
}
//final function to call when generate button clicked

//----------------Signup----------------------

function createNewUser(name) {
  return fetch(baseURL + "users", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name
    })
  })
}

function onSignupFormSubmit(event) {
  event.preventDefault()
  if (signupInput.value.length > 0) {
  const name = signupInput.value
  createNewUser(name)
  .then(() => fetchUsersFromAPI())
  .then(() => welcomeUser(name))
  .then(() => state.currentUser = state.users.find(user => user.name === name))
  .then(() => signupForm.classList.toggle('visible'))
  .then(() => loginFormEl.classList.remove('visible'))
  }
}

function populateLoginForm() {
    state.users.forEach((user) => {
    const eachUser = document.createElement('option')
    eachUser.innerText = user.name
    loginSelectUserEl.append(eachUser)
    })
}


function welcomeUser(name) {
  welcomeMessage.innerText = `Welcome, ${name} ♡`
}


//---------------Add new act--------------------

function onNewActSubmit(event) {
  event.preventDefault()

  let userID

  if (state.currentUser === 2) {
    userID = state.users[0].id
  }
  else {
    userID = state.currentUser.id
  }

  if (newActInput.value.length > 0 && newActCat.value.length > 0) {
      const content = newActInput.value
      const catID = categories[newActCat.value]
      let newAct;
      debugger
      searchGifs(content).then(() => {
        return newAct = {content: content, user_id: userID, category_id: catID, image_url: state.newGif}
        }).then((res) => saveNewActToAPI(res))
          .then(() => fetchActsFromAPI())
          .then(() => renderAct(state.acts.find(act => act.content === content).id))
    newActForm.reset()
  }
}

function saveNewActToAPI(newAct) {

  return fetch(`http://localhost:3000/api/v1/acts/`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAct)
  })
}


//---------------Giphy--------------


function searchGifs(searchTerm) {
  searchTerm = searchTerm.trim().replace(/ /g, "+");
  const key = "UJDWiFrHozRQi5duuiI3YDFSgqIcbnqC"

  return fetch('http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=UJDWiFrHozRQi5duuiI3YDFSgqIcbnqC')
    .then(request => request.json())
    .then(res => res.data[0].id)
    .then(res => state.newGif = `https://media.giphy.com/media/${res}/giphy.gif`)
}
//returns promise of url of first gif from search on giphy


//-------- collapsible form to create new act ---------------------

function onCollapseButton() {
    newActCollapsibleForm.classList.toggle('visible');
    loginFormCollapse.classList.remove('visible');
    signupFormCollapse.classList.remove('visible');
  }

function onSignUpButton(){
  signupFormCollapse.classList.toggle('visible');
  loginFormCollapse.classList.remove('visible');
  newActCollapsibleForm.classList.remove('visible');
  }


function onLoginButton(){
    loginFormCollapse.classList.toggle('visible');
    signupFormCollapse.classList.remove('visible');
    newActCollapsibleForm.classList.remove('visible');
  }


init()
