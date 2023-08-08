"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
                ? "<div class=\"class-response-disable\">"
                : "<div class=\"class-response\">", "\n                                <select id=\"lect\" name=\"lect\" required >\n                                    <option value=\"Mr. Frank's Class B\" ").concat(cd.profClass === "Mr. Frank's Class B"
                ? "selected"
                : "", ">Mr. Frank's Class B</option>\n                                    <option value=\"No Classes\" disabled ").concat(cd.profClass === "No Classes"
                ? "selected"
                : "", ">No Classes</option>\n                                    <option value=\"Mr. Frank's Class A\" ").concat(cd.profClass === "Mr. Frank's Class A"
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
        notificationTemplate.map(function (template) {
            return (notificationcard.innerHTML += template);
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
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("./index.json")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var sortByLecture = function (a, b) {
    return a.lecture.localeCompare(b.lecture);
};
var sortByGrade = function (a, b) {
    return a.grade - b.grade;
};
var sortBySubject = function (a, b) {
    return a.subject.localeCompare(b.subject);
};
var renderCourses = function (courses) {
    var contentCard = document.getElementById("main-content");
    contentCard.innerHTML = "";
    courses.forEach(function (course) {
        contentCard.innerHTML += "<div class=\"card\">\n        <div class=\"card-content\">\n            <p>".concat(course.lecture, "</p>\n            <p>Grade ").concat(course.grade, "</p>\n            <p>").concat(course.subject, "</p>\n        </div>\n    </div>");
    });
};
var applySort = function (sortBy) {
    fetchData().then(function (courses) {
        courses.sort(sortBy);
        renderCourses(courses);
    });
};
window.onload = function () {
    fetchData().then(function (courses) {
        renderCourses(courses);
    });
    var sortSelect = document.getElementById("sort");
    sortSelect.addEventListener("change", function () {
        var sortByOption = sortSelect.value;
        if (sortByOption === "lecture") {
            applySort(sortByLecture);
        }
        else if (sortByOption === "grade") {
            applySort(sortByGrade);
        }
        else if (sortByOption === "subject") {
            applySort(sortBySubject);
        }
    });
    var customIcon = document.querySelector(".custom-icon");
    customIcon.addEventListener("click", function () {
        var sortByOption = sortSelect.value;
        if (sortByOption === "lecture") {
            applySort(sortByLecture);
        }
        else if (sortByOption === "grade") {
            applySort(sortByGrade);
        }
        else if (sortByOption === "subject") {
            applySort(sortBySubject);
        }
    });
};
window.onload = function () {
    CardsTemplate();
    announcementsTemplate();
    alertsTemplate();
};
