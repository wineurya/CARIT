// get form elements
const studentStatusSelect = document.getElementById("student-status");
const coursesContainer = document.getElementById("courses-container");
const evaluateBtn = document.getElementById("evaluate-btn");
const resultContainer = document.getElementById("result-container");

// define courses for different student statuses
const courses = {
  undergraduate: ["Course 1", "Course 2", "Course 3"],
  graduate: ["Course 4", "Course 5", "Course 6"],
};

// define point grades for letter grades
const pointGrades = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

// create course grade inputs
function createCourseInputs(courses) {
  let html = "";
  for (let i = 0; i < courses.length; i++) {
    html += `<div class="form-group">
              <label for="course${i + 1}">${courses[i]}</label>
              <select id="course${i + 1}" name="course${i + 1}" class="form-control">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>`;
  }
  return html;
}

// display course grade inputs based on student status
function displayCourseInputs() {
  const studentStatus = studentStatusSelect.value;
  const studentCourses = courses[studentStatus];
  const courseInputsHtml = createCourseInputs(studentCourses);
  coursesContainer.innerHTML = courseInputsHtml;
}

// calculate average grade and display result
function evaluateGrades() {
  const courseSelects = coursesContainer.querySelectorAll("select");
  let totalPoints = 0;
  for (let i = 0; i < courseSelects.length; i++) {
    const letterGrade = courseSelects[i].value;
    const pointGrade = pointGrades[letterGrade];
    totalPoints += pointGrade;
  }
  const averageGrade = totalPoints / courseSelects.length;
  const message = `Your average grade is ${averageGrade.toFixed(2)}.`;
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
