const CardTemplate = () => {
  fetch("./index.json")
    .then((res) => res.json())
    .then((courseDetails) => {
      let contentCard = document.getElementById("main-content");
      console.log(courseDetails);

      const courseTemplate = courseDetails.map((cd, key) => {
        return `<div class="card">
                ${
                  cd.isexpired ? '<div class="expired-label">EXPIRED</div>' : ""
                }
                <div class="card-sub">
                    <div class="card-img">
                        <img src="${cd.lectImg}" alt="course-img">
                    </div>
                    <div class="card-content">
                        <p id="topic"> ${cd.lecture}</p>
                        <div class="fav-star">
                            ${
                              cd.favStarDisable
                                ? `<img id="disable" src="./assets/icons/favourite.svg" alt="star">`
                                : `<img src="./assets/icons/favourite.svg" alt="star">`
                            }
                        </div>
                        <div class="sub-grade">
                            <span><p>${cd.subject}</p></span>
                            <span><p>Grade ${cd.grade} <a href="#"> ${
          cd.gradeExtends
        }</a></p></span>
                        </div>
                        ${
                          cd.syllabus
                            ? `<div class="syllabus">
                        <p>
                            ${
                              cd.syllabus.units
                                ? `<b> ${cd.syllabus.units} </b> Units`
                                : " "
                            } 
                            ${
                              cd.syllabus.lessons
                                ? `<b> ${cd.syllabus.lessons}</b> Lessons`
                                : " "
                            }
                            ${
                              cd.syllabus.topics
                                ? `<b> ${cd.syllabus.topics}</b> Topics`
                                : " "
                            }
                        </p> 
                        </div>`
                            : " "
                        }

                        <div class="lectures">
                            ${
                              cd.profClass === "No Classes"
                                ? `<div class="class-response-disable">`
                                : `<div class="class-response">`
                            }
                                <select id="lect" name="lect" required >
                                    <option value="Mr. Frank's Class B" ${
                                      cd.profClass === "Mr. Frank's Class B"
                                        ? "selected"
                                        : ""
                                    }>Mr. Frank's Class B</option>
                                    <option value="No Classes" disabled ${
                                      cd.profClass === "No Classes"
                                        ? "selected"
                                        : ""
                                    }>No Classes</option>
                                    <option value="Mr. Frank's Class A" ${
                                      cd.profClass === "Mr. Frank's Class A"
                                        ? "selected"
                                        : ""
                                    }>Mr. Frank's Class A</option>
                                    <option value="All Classes" ${
                                      cd.profClass === "All Classes"
                                        ? "selected"
                                        : ""
                                    }>All Classes</option>
                                </select>
                            </div>

                            ${
                              cd.studentsEnrolled || cd.startDate || cd.endDate
                                ? `<div class="attendance">
                                ${
                                  cd.studentsEnrolled
                                    ? `<span><p>${cd.studentsEnrolled} students</p></span>`
                                    : ""
                                }
                                ${
                                  cd.startDate
                                    ? `<span><p>${cd.startDate} - ${cd.endDate}</p></span>`
                                    : ""
                                }
                            </div> `
                                : " "
                            }
                        </div>
                    </div>
                </div>

                <div class="icon-footer">
                    ${
                      cd.preview
                        ? `<img src="./assets/icons/preview.svg" alt="preview">`
                        : `<img src="./assets/icons/preview.svg" alt="preview" class="disabled">`
                    }
                    ${
                      cd.manageCourse
                        ? `<img src="./assets/icons/manage course.svg" alt="manage-course">`
                        : `<img src= "./assets/icons/manage course.svg" alt="manage-course" class="disabled">`
                    }
                    ${
                      cd.gradeSubmission
                        ? `<img src= "./assets/icons/grade submissions.svg" alt="grade-submission">`
                        : `<img src= "./assets/icons/grade submissions.svg" alt="grade-submission" class="disabled">`
                    }
                    ${
                      cd.report
                        ? `<img src="./assets/icons/reports.svg" alt="reports">`
                        : `<img src="./assets/icons/reports.svg" alt="reports" class="disabled">`
                    }
                </div>
        </div>`;
      });

      courseTemplate.map((template) => {
        return (contentCard.innerHTML += template);
      });
    })
    .catch((err) => {
      console.log("JSON Error:", err);
    });
};

const announcementTemplate = () => {
  fetch("./announcements.json")
    .then((res) => res.json())
    .then((announcementNotification) => {
      let notificationcard = document.getElementById("announcement-notify");
      console.log(announcementNotification);

      const notificationTemplate = announcementNotification.map((an, key) => {
        return `
        ${
          an.msgStatus === "unread"
            ? '<div id="unread" class="ann-notification">'
            : '<div class="ann-notification">'
        }
          <div class="ann-head">
            <p>PA: <span class="PA"> ${an.PA} </span></p>
            <img
              src="./assets/icons/${an.status}.png"
              alt="status"
              class="status"
            />
          </div>
          <div class="main-msg">
          ${an.notificationMsg}
          </div>
          ${an.course ? `<p class="course-ann">Course: ${an.course}</p>` : " "}
          <p class="msg-foot">
            ${
              an.attachments
                ? `<span class="attachments">
              <img src="/assets/icons/paperclip.png" alt="attach" />
              ${an.attachments}
            </span>`
                : " "
            }
            <span class="date-time"> ${an.date} at ${an.time} </span>
          </p>
        </div>`;
      });
      notificationTemplate.map((template) => {
        return (notificationcard.innerHTML += template);
      });
    })
    .catch((err) => {
      console.log("JSON Error:", err);
    });
};

const alertTemplate = () => {
  fetch("./alerts.json")
    .then((res) => res.json())
    .then((alertNotification) => {
      let alertCard = document.getElementById("alert-notify");
      console.log(alertNotification);

      const alertTemplate = alertNotification.map((at, key) => {
        return `
        ${
          at.id === "unread"
            ? '<div id="unread" class="ann-notification">'
            : '<div class="ann-notification">'
        }
                  <div class="ann-head">
                    <div class="alt-msg">
                      ${at.alertMsg}
                    </div>
                    <img
                      src="./assets/icons/${at.status}.png"
                      alt="status"
                      class="status"
                    />
                  </div>
                  ${
                    at.course
                      ? `<p class="course-ann">
                    Course: <span class="alt-course">${at.course}</span>
                  </p>`
                      : " "
                  }
                  <p class="msg-foot">
                    <span class="date-time"> ${at.date} at ${at.time} </span>
                  </p>
                </div>
        `;
      });
      alertTemplate.map((template) => {
        return (alertCard.innerHTML += template);
      });
    })
    .catch((err) => {
      console.log("JSON Error:", err);
    });
};

window.onload = () => {
  CardTemplate();
  announcementTemplate();
  alertTemplate();
};
