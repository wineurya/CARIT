window.onload = function() {
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
  } else if (studentStatus === "graduate") {
    undergraduateCourses.forEach(course => course.style.display = "none");
    graduateCourses.forEach(course => course.style.display = "block");
  } else {
    undergraduateCourses.forEach(course => course.style.display = "none");
    graduateCourses.forEach(course => course.style.display = "none");
  }
}


  // calculate average grade and display result
  function evaluateGrades() {
    const courseSelects = document.querySelectorAll("#courses-container select");
    let displayedCourses = 0;
    let totalPoints = 0;
  
    for (let i = 0; i < courseSelects.length; i++) {
      if (courseSelects[i].parentElement.style.display !== "none") {
        displayedCourses++;
        const letterGrade = courseSelects[i].value;
        const pointGrade = pointGrades[letterGrade];
        totalPoints += pointGrade;
      }
    }
  
    if (displayedCourses > 0) {
      const averageGrade = totalPoints / displayedCourses;
      let message = `Your average grade is ${averageGrade.toFixed(2)}.`;
      if (averageGrade >= 3.0) {
        message += " Congratulations, you meet the average grade requirement. <br> <a href='apply.html'> Click here to start your application </a>";
      } else {
        message += " Thank you for your interest.";
      }
      resultContainer.innerHTML = `<p class="result-message">${message}</p>`;
    } else {
      resultContainer.innerHTML = "";
    }
  }
  
  // add event listeners
  studentStatusSelect.addEventListener("change", displayCourseInputs);
  evaluateBtn.addEventListener("click", evaluateGrades);

  // display course inputs initially
  displayCourseInputs();
}
