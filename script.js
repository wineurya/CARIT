// get form elements
const studentStatusSelect = document.getElementById("student-status");
const evaluateBtn = document.getElementById("evaluate-btn");
const resultContainer = document.getElementById("result-container");

// define point grades for letter grades
const pointGrades = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

// toggle course display based on student status
function displayCourseInputs() {
  const studentStatus = studentStatusSelect.value;
  const undergraduateCourses = document.querySelectorAll(".undergraduate-course");
  const graduateCourses = document.querySelectorAll(".graduate-course");

  if (studentStatus === "undergraduate") {
    undergraduateCourses.forEach(course => course.style.display = "block");
    graduateCourses.forEach(course => course.style.display = "none");
  } else {
    undergraduateCourses.forEach(course => course.style.display = "none");
    graduateCourses.forEach(course => course.style.display = "block");
  }
}

// calculate average grade and display result
function evaluateGrades() {
  const courseSelects = document.querySelectorAll("#courses-container select");
  let totalPoints = 0;
  for (let i = 0; i < courseSelects.length; i++) {
    const letterGrade = courseSelects[i].value;
    const pointGrade = pointGrades[letterGrade];
    totalPoints += pointGrade;
  }
  const averageGrade = totalPoints / courseSelects.length;
  let message = `Your average grade is ${averageGrade.toFixed(2)}.`;
  if (averageGrade >= 3.0) {
    message += " Congratulations, you meet the average grade requirement.";
  } else {
    message += " Thank you for your interest.";
  }
  resultContainer.innerHTML = message;
}

// add event listeners
studentStatusSelect.addEventListener("change", displayCourseInputs);
evaluateBtn.addEventListener("click", evaluateGrades);

// display course inputs initially
displayCourseInputs();
