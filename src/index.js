console.log('loaded!');

// this variable has global scope
const NUMBER_OF_DOGS = 15;

const state = {
  dogImage: null,
  addDogButton: null,
  dogImageContainer: null,
  dogCountLabel: null,
  dogCount: 1
};

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS + 1);
};

const setRandomDog = () => {
  // const dogImg = document.getElementById('dog-image');
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  state.dogImage.src = newImgName;
};

const handleAddButtonClicked = (event) => {
  //get random num
  //to create image name
  //create new image element
  //new image elements src set to the new image name
  //prepend the new image to the image container
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A Random doggo!';
  state.dogImageContainer.prepend(newDog);
  ++state.dogCount;
  state.dogCountLabel.textContent = state.dogCount;
};

const registerEvents = () => {
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
};
const onLoaded = () => {
  // console.log(pickRandomNumber());
  loadControls();
  // setRandomDog();
  registerEvents();
};

const loadControls = () => {
  state.dogImage = document.getElementById('dog-image');
  state.addDogButton = document.getElementById('add-dog-button');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dog-count-label');
};

onLoaded();

