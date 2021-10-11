var buttonEl = document.querySelector(".exerButton");

var results = document.querySelector('#resContainer');

async function getExercises (exercisePreference) {
    var exerUrl = "https://exercisedb.p.rapidapi.com/exercises?q=" + exercisePreference; 
        const response = await fetch (exerUrl, {
	"method": "GET",
	"headers": {
	"x-rapidapi-host": "exercisedb.p.rapidapi.com",
	"x-rapidapi-key": "cc5b458f13msh8736ff6b356ddffp1a89bcjsn5bea7e7081e7"
	},
});

    const exerData = await response.json();
    console.log(exerData);

    for (i=0; i<10; i++) {
      const currentExercise = exerData[i];
      const exerciseDiv = document.createElement("div");
      const exerciseImage = document.createElement("img");
      exerciseImage.setAttribute("src", currentExercise.gifUrl);
      exerciseDiv.appendChild(exerciseImage);
      results.appendChild(exerciseDiv);
    }
    
}
buttonEl.addEventListener("click", getExercises);

// Back button functionality

var exerciseSection = document.querySelector(".hide");
var srchBmiOutput = document.querySelector("#BMI-suggestions");
var srchOutput = document.querySelector("#exerBack");
var outPut = document.querySelector("#exercisePreference");
var buttonExer = document.querySelector(".exerButton");
var planExer = document.querySelector(".exerPlan");
var containerRes = document.querySelector("#resContainer");

function backExerButton() {
  srchBmiOutput.classList.add("hide");
  exerciseSection.classList.remove("hide");
  srchOutput.classList.add("hide");
  outPut.classList.add("hide");
  buttonExer.classList.add("hide");
  planExer.classList.add("hide");
  containerRes.classList.add("hide");
}

