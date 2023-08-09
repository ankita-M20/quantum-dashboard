var CardsTemplate = function () {
    fetch("./index.json")
        .then(function (res) { return res.json(); })
        .then(function (courseDetails) {
        var contentCard = document.getElementById("main-content");
        console.log(courseDetails);
        var courseTemplate = courseDetails.map(function (cd, key) {
            return "<div class=\"card\">\n                ".concat(cd.isexpired ? '<div class="expired-label">EXPIRED</div>' : "", "\n                <div class=\"card-sub\">\n                    <div class=\"card-img\">\n                        <img src=\"").concat(cd.lectImg, "\" alt=\"course-img\">\n                    </div>\n                    <div class=\"card-content\">\n                        <p id=\"topic\"> ").concat(cd.lecture, "</p>\n                        <div class=\"fav-star\">\n                            ").concat(cd.favStarDisable
                ? "<img id=\"disable\" src=\"./assets/icons/favourite.svg\" alt=\"star\">"
                : "<img src=\"./assets/icons/favourite.svg\" alt=\"star\">", "\n                        </div>\n                        <div class=\"sub-grade\">\n                            <span><p>").concat(cd.subject, "</p></span>\n                            <span><p>Grade ").concat(cd.grade, " <a href=\"#\"> ").concat(cd.gradeExtends, "</a></p></span>\n                        </div>\n                        ").concat(cd.syllabus
                ? "<div class=\"syllabus\">\n                        <p>\n                            ".concat(cd.syllabus.units
                    ? "<b> ".concat(cd.syllabus.units, " </b> Units")
                    : " ", " \n                            ").concat(cd.syllabus.lessons
                    ? "<b> ".concat(cd.syllabus.lessons, "</b> Lessons")
                    : " ", "\n                            ").concat(cd.syllabus.topics
                    ? "<b> ".concat(cd.syllabus.topics, "</b> Topics")
                    : " ", "\n                        </p> \n                        </div>")
                : " ", "\n\n                        <div class=\"lectures\">\n                            ").concat(cd.profClass === "No Classes"
                ? "<div class=\"class-response\">"
                : "<div class=\"class-response-disable\">", "\n                                <select id=\"lect\" name=\"lect\" required ").concat(cd.profClass === "No Classes"
                ? "disabled"
                : "", ">                       \n                                ").concat(cd.profClass === "No Classes"
                ? '<option value="No Classes">No Classes</option>'
                : "", " \n                                    <option value=\"Mr. Frank's Class B\" ").concat(cd.profClass === "Mr. Frank's Class B"
                ? "selected"
                : "", ">Mr. Frank's Class B</option>\n                                    <option value=\"Mr. Frank's Class A\" ").concat(cd.profClass === "Mr. Frank's Class A"
                ? "selected"
                : "", ">Mr. Frank's Class A</option>\n                                    <option value=\"All Classes\" ").concat(cd.profClass === "All Classes"
                ? "selected"
                : "", ">All Classes</option>\n                                </select>\n                            </div>\n\n                            ").concat(cd.studentsEnrolled || cd.startDate || cd.endDate
                ? "<div class=\"attendance\">\n                                ".concat(cd.studentsEnrolled
                    ? "<span><p>".concat(cd.studentsEnrolled, " students</p></span>")
                    : "", "\n                                ").concat(cd.startDate
                    ? "<span><p>".concat(cd.startDate, " - ").concat(cd.endDate, "</p></span>")
                    : "", "\n                            </div> ")
                : " ", "\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"icon-footer\">\n                    ").concat(cd.preview
                ? "<img src=\"./assets/icons/preview.svg\" alt=\"preview\">"
                : "<img src=\"./assets/icons/preview.svg\" alt=\"preview\" class=\"disabled\">", "\n                    ").concat(cd.manageCourse
                ? "<img src=\"./assets/icons/manage course.svg\" alt=\"manage-course\">"
                : "<img src= \"./assets/icons/manage course.svg\" alt=\"manage-course\" class=\"disabled\">", "\n\n                    ").concat(cd.gradeSubmission
                ? "<img src= \"./assets/icons/grade submissions.svg\" alt=\"grade-submission\">"
                : "<img src= \"./assets/icons/grade submissions.svg\" alt=\"grade-submission\" class=\"disabled\">", "\n                    ").concat(cd.report
                ? "<img src=\"./assets/icons/reports.svg\" alt=\"reports\">"
                : "<img src=\"./assets/icons/reports.svg\" alt=\"reports\" class=\"disabled\">", "\n                </div>\n        </div>");
        });
        courseTemplate.map(function (template) {
            return (contentCard.innerHTML += template);
        });
    })
        .catch(function (err) {
        console.log("JSON Error:", err);
    });
};
var announcementsTemplate = function () {
    fetch("./announcements.json")
        .then(function (res) { return res.json(); })
        .then(function (announcementNotification) {
        var notificationcard = document.getElementById("announcement-notify");
        console.log(announcementNotification);
        var notificationTemplate = announcementNotification.map(function (an, key) {
            return "\n        ".concat(an.msgStatus === "unread"
                ? '<div id="unread" class="ann-notification">'
                : '<div class="ann-notification">', "\n          <div class=\"ann-head\">\n            <p>PA: <span class=\"PA\"> ").concat(an.PA, " </span></p>\n            <img\n              src=\"./assets/icons/").concat(an.status, ".png\"\n              alt=\"status\"\n              class=\"status\"\n            />\n          </div>\n          <div class=\"main-msg\">\n          ").concat(an.notificationMsg, "\n          </div>\n          ").concat(an.course ? "<p class=\"course-ann\">Course: ".concat(an.course, "</p>") : " ", "\n          <p class=\"msg-foot\">\n            ").concat(an.attachments
                ? "<span class=\"attachments\">\n              <img src=\"/assets/icons/paperclip.png\" alt=\"attach\" />\n              ".concat(an.attachments, "\n            </span>")
                : " ", "\n            <span class=\"date-time\"> ").concat(an.date, " at ").concat(an.time, " </span>\n          </p>\n        </div>");
        });
        notificationcard.innerHTML = notificationTemplate.join(""); // Join the templates into a single string
        // Add the animation class to each notification element
        var notificationElements = document.querySelectorAll(".ann-notification");
        notificationElements.forEach(function (element) {
            element.classList.add("downfall");
        });
    })
        .catch(function (err) {
        console.log("JSON Error:", err);
    });
};
var alertsTemplate = function () {
    fetch("./alerts.json")
        .then(function (res) { return res.json(); })
        .then(function (alertNotification) {
        var alertCard = document.getElementById("alert-notify");
        console.log(alertNotification);
        var alertTemplate = alertNotification.map(function (at, key) {
            return "\n        ".concat(at.id === "unread"
                ? '<div id="unread" class="ann-notification">'
                : '<div class="ann-notification">', "\n                  <div class=\"ann-head\">\n                    <div class=\"alt-msg\">\n                      ").concat(at.alertMsg, "\n                    </div>\n                    <img\n                      src=\"./assets/icons/").concat(at.status, ".png\"\n                      alt=\"status\"\n                      class=\"status\"\n                    />\n                  </div>\n                  ").concat(at.course
                ? "<p class=\"course-ann\">\n                    Course: <span class=\"alt-course\">".concat(at.course, "</span>\n                  </p>")
                : " ", "\n                  <p class=\"msg-foot\">\n                    <span class=\"date-time\"> ").concat(at.date, " at ").concat(at.time, " </span>\n                  </p>\n                </div>\n        ");
        });
        alertTemplate.map(function (template) {
            return (alertCard.innerHTML += template);
        });
    })
        .catch(function (err) {
        console.log("JSON Error:", err);
    });
};
var currentSortOrder = "asc"; // Initialize the current sort order
var SortCardsTemplate = function () {
    fetch("./index.json")
        .then(function (res) { return res.json(); })
        .then(function (courseDetails) {
        var contentCard = document.getElementById("main-content");
        var imgElement = document.querySelector(".custom-icon");
        var selectElement = document.getElementById("sort");
        var updateContentCard = function (sortedCards) {
            if (contentCard) {
                contentCard.innerHTML = sortedCards;
            }
        };
        var generateCourseTemplate = function (cd) {
            return "\n      <div class=\"card\">\n      ".concat(cd.isexpired ? '<div class="expired-label">EXPIRED</div>' : "", "\n      <div class=\"card-sub\">\n          <div class=\"card-img\">\n              <img src=\"").concat(cd.lectImg, "\" alt=\"course-img\">\n          </div>\n          <div class=\"card-content\">\n              <p id=\"topic\"> ").concat(cd.lecture, "</p>\n              <div class=\"fav-star\">\n                  ").concat(cd.favStarDisable
                ? "<img id=\"disable\" src=\"./assets/icons/favourite.svg\" alt=\"star\">"
                : "<img src=\"./assets/icons/favourite.svg\" alt=\"star\">", "\n              </div>\n              <div class=\"sub-grade\">\n                  <span><p>").concat(cd.subject, "</p></span>\n                  <span><p>Grade ").concat(cd.grade, " <a href=\"#\"> ").concat(cd.gradeExtends, "</a></p></span>\n              </div>\n              ").concat(cd.syllabus
                ? "<div class=\"syllabus\">\n              <p>\n                  ".concat(cd.syllabus.units
                    ? "<b> ".concat(cd.syllabus.units, " </b> Units")
                    : " ", " \n                  ").concat(cd.syllabus.lessons
                    ? "<b> ".concat(cd.syllabus.lessons, "</b> Lessons")
                    : " ", "\n                  ").concat(cd.syllabus.topics
                    ? "<b> ".concat(cd.syllabus.topics, "</b> Topics")
                    : " ", "\n              </p> \n              </div>")
                : " ", "\n\n              <div class=\"lectures\">\n                  ").concat(cd.profClass === "No Classes"
                ? "<div class=\"class-response-disable\">"
                : "<div class=\"class-response\">", "\n                      <select id=\"lect\" name=\"lect\" required >\n                          <option value=\"Mr. Frank's Class B\" ").concat(cd.profClass === "Mr. Frank's Class B"
                ? "selected"
                : "", ">Mr. Frank's Class B</option>\n                          <option value=\"No Classes\" disabled ").concat(cd.profClass === "No Classes" ? "selected" : "", ">No Classes</option>\n                          <option value=\"Mr. Frank's Class A\" ").concat(cd.profClass === "Mr. Frank's Class A"
                ? "selected"
                : "", ">Mr. Frank's Class A</option>\n                          <option value=\"All Classes\" ").concat(cd.profClass === "All Classes" ? "selected" : "", ">All Classes</option>\n                      </select>\n                  </div>\n\n                  ").concat(cd.studentsEnrolled || cd.startDate || cd.endDate
                ? "<div class=\"attendance\">\n                      ".concat(cd.studentsEnrolled
                    ? "<span><p>".concat(cd.studentsEnrolled, " students</p></span>")
                    : "", "\n                      ").concat(cd.startDate
                    ? "<span><p>".concat(cd.startDate, " - ").concat(cd.endDate, "</p></span>")
                    : "", "\n                  </div> ")
                : " ", "\n              </div>\n          </div>\n      </div>\n\n      <div class=\"icon-footer\">\n          ").concat(cd.preview
                ? "<img src=\"./assets/icons/preview.svg\" alt=\"preview\">"
                : "<img src=\"./assets/icons/preview.svg\" alt=\"preview\" class=\"disabled\">", "\n          ").concat(cd.manageCourse
                ? "<img src=\"./assets/icons/manage course.svg\" alt=\"manage-course\">"
                : "<img src= \"./assets/icons/manage course.svg\" alt=\"manage-course\" class=\"disabled\">", "\n\n          ").concat(cd.gradeSubmission
                ? "<img src= \"./assets/icons/grade submissions.svg\" alt=\"grade-submission\">"
                : "<img src= \"./assets/icons/grade submissions.svg\" alt=\"grade-submission\" class=\"disabled\">", "\n          ").concat(cd.report
                ? "<img src=\"./assets/icons/reports.svg\" alt=\"reports\">"
                : "<img src=\"./assets/icons/reports.svg\" alt=\"reports\" class=\"disabled\">", "\n      </div>\n</div>\n");
        };
        var sortCourses = function (sortBy, courses, sortOrder) {
            var cards = courses.slice(); // Create a copy of the array to avoid modifying the original data
            if (sortBy === "lecture" || sortBy === "subject") {
                // For "lecture" and "subject" sorting, use localeCompare and reverse the order for "desc"
                cards.sort(function (a, b) {
                    return sortOrder === "asc"
                        ? a[sortBy].localeCompare(b[sortBy])
                        : b[sortBy].localeCompare(a[sortBy]);
                });
            }
            else if (sortBy === "grade" || sortBy === "studentsEnrolled") {
                // For numeric sorting, reverse the order for "desc"
                cards.sort(function (a, b) {
                    return sortOrder === "asc"
                        ? Number(a[sortBy]) - Number(b[sortBy])
                        : Number(b[sortBy]) - Number(a[sortBy]);
                });
            }
            var sortedCards = cards.map(generateCourseTemplate).join("");
            updateContentCard(sortedCards);
        };
        var updateSort = function (sortBy) {
            if (sortBy === "lecture" || sortBy === "subject") {
                // For "lecture" and "subject" sorting, always set sortOrder to "asc" and remove the CSS class to reset the image rotation
                currentSortOrder = "asc";
                imgElement.classList.remove("rotate-180");
            }
            else if (sortBy === "grade" || sortBy === "studentsEnrolled") {
                // For numeric sorting, always set sortOrder to "desc" initially and apply image rotation
                currentSortOrder = "desc";
                imgElement.classList.add("rotate-180");
            }
            sortCourses(sortBy, courseDetails, currentSortOrder);
        };
        if (imgElement && selectElement) {
            imgElement.addEventListener("click", function () {
                var sortBy = selectElement.value;
                currentSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
                imgElement.classList.toggle("rotate-180", currentSortOrder === "desc");
                sortCourses(sortBy, courseDetails, currentSortOrder);
            });
            selectElement.addEventListener("change", function (event) {
                var selectElement = event.target;
                var sortBy = selectElement.value;
                updateSort(sortBy);
            });
        }
        // Initialize cards with the default sorting (e.g., "lecture")
        updateSort("lecture");
    });
};
function toggleSection(section) {
    var sections = document.querySelectorAll(".Section");
    sections.forEach(function (sec) {
        var _a, _b;
        if (sec.id === section) {
            sec.classList.add("selected");
            (_a = sec.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("move-right", "move-left");
            (_b = sec.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add(section === "courses" ? "move-left" : "move-right");
        }
        else {
            sec.classList.remove("selected");
        }
    });
}
window.onload = function () {
    CardsTemplate();
    announcementsTemplate();
    alertsTemplate();
    SortCardsTemplate(); // sorting of cards
    var sections = document.querySelectorAll(".Section");
    // Automatically select the "Courses" section on page load
    toggleSection("courses");
    sections.forEach(function (sec) {
        sec.addEventListener("click", function () {
            if (sec.id === "classes") {
                toggleSection("classes"); // Select only the "Classes" section
            }
            else {
                toggleSection(sec.id);
            }
        });
    });
};
