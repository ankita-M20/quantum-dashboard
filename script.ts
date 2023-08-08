const CardsTemplate = (): void => {
  fetch("./index.json")
    .then((res: Response) => res.json())
    .then((courseDetails: any[]) => {
      let contentCard = document.getElementById("main-content");
      console.log(courseDetails);

      const courseTemplate = courseDetails.map((cd: any, key: number) => {
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
        return (contentCard!.innerHTML += template);
      });
    })
    .catch((err: Error) => {
      console.log("JSON Error:", err);
    });
};

const announcementsTemplate = (): void => {
  fetch("./announcements.json")
    .then((res: Response) => res.json())
    .then((announcementNotification: any[]) => {
      let notificationcard = document.getElementById("announcement-notify");
      console.log(announcementNotification);

      const notificationTemplate = announcementNotification.map(
        (an: any, key: number) => {
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
        }
      );
      notificationTemplate.map((template) => {
        return (notificationcard!.innerHTML += template);
      });
    })
    .catch((err: Error) => {
      console.log("JSON Error:", err);
    });
};

const alertsTemplate = (): void => {
  fetch("./alerts.json")
    .then((res: Response) => res.json())
    .then((alertNotification: any[]) => {
      let alertCard = document.getElementById("alert-notify");
      console.log(alertNotification);

      const alertTemplate = alertNotification.map((at: any, key: number) => {
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
        return (alertCard!.innerHTML += template);
      });
    })
    .catch((err: Error) => {
      console.log("JSON Error:", err);
    });
};

interface Course {
  lecture: string;
  subject: string;
  grade: string;
  syllabus?: {
    units?: number;
    lessons?: number;
    topics?: number;
  };
  profClass?: string;
  studentsEnrolled?: string;
  startDate?: string;
  endDate?: string;
  isexpired?: boolean;
  lectImg?: string;
  favStarDisable?: boolean;
  gradeExtends?: string;
  preview?: boolean;
  manageCourse?: boolean;
  gradeSubmission?: boolean;
  report?: boolean;
}

let currentSortOrder: "asc" | "desc" = "asc"; // Initialize the current sort order

const SortCardsTemplate = (): void => {
  fetch("./index.json")
    .then((res: Response) => res.json())
    .then((courseDetails: Course[]) => {
      const contentCard = document.getElementById("main-content");
      const imgElement = document.querySelector(".custom-icon");
      const selectElement = document.getElementById(
        "sort"
      ) as HTMLSelectElement;

      const updateContentCard = (sortedCards: string) => {
        if (contentCard) {
          contentCard.innerHTML = sortedCards;
        }
      };

      const generateCourseTemplate = (cd: Course): string => {
        return `
      <div class="card">
      ${cd.isexpired ? '<div class="expired-label">EXPIRED</div>' : ""}
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
                            cd.profClass === "No Classes" ? "selected" : ""
                          }>No Classes</option>
                          <option value="Mr. Frank's Class A" ${
                            cd.profClass === "Mr. Frank's Class A"
                              ? "selected"
                              : ""
                          }>Mr. Frank's Class A</option>
                          <option value="All Classes" ${
                            cd.profClass === "All Classes" ? "selected" : ""
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
</div>
`;
      };

      const sortCourses = (
        sortBy: string,
        courses: Course[],
        sortOrder: "asc" | "desc"
      ) => {
        const cards = courses.slice(); // Create a copy of the array to avoid modifying the original data

        if (sortBy === "lecture" || sortBy === "subject") {
          // For "lecture" and "subject" sorting, use localeCompare and reverse the order for "desc"
          cards.sort((a, b) =>
            sortOrder === "asc"
              ? a[sortBy].localeCompare(b[sortBy])
              : b[sortBy].localeCompare(a[sortBy])
          );
        } else if (sortBy === "grade" || sortBy === "studentsEnrolled") {
          // For numeric sorting, reverse the order for "desc"
          cards.sort((a, b) =>
            sortOrder === "asc"
              ? Number(a[sortBy]) - Number(b[sortBy])
              : Number(b[sortBy]) - Number(a[sortBy])
          );
        }

        const sortedCards = cards.map(generateCourseTemplate).join("");
        updateContentCard(sortedCards);
      };

      const updateSort = (sortBy: string): void => {
        if (sortBy === "lecture" || sortBy === "subject") {
          // For "lecture" and "subject" sorting, always set sortOrder to "asc" and remove the CSS class to reset the image rotation
          currentSortOrder = "asc";
          imgElement.classList.remove("rotate-180");
        } else if (sortBy === "grade" || sortBy === "studentsEnrolled") {
          // For numeric sorting, always set sortOrder to "desc" initially and apply image rotation
          currentSortOrder = "desc";
          imgElement.classList.add("rotate-180");
        }

        sortCourses(sortBy, courseDetails, currentSortOrder);
      };

      if (imgElement && selectElement) {
        imgElement.addEventListener("click", () => {
          const sortBy = selectElement.value;
          currentSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
          imgElement.classList.toggle(
            "rotate-180",
            currentSortOrder === "desc"
          );
          sortCourses(sortBy, courseDetails, currentSortOrder);
        });

        selectElement.addEventListener("change", (event) => {
          const selectElement = event.target as HTMLSelectElement;
          const sortBy = selectElement.value;
          updateSort(sortBy);
        });
      }

      // Initialize cards with the default sorting (e.g., "lecture")
      updateSort("lecture");
    });
};

function toggleSection(section: string): void {
  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll(".Section");

  sections.forEach((sec: HTMLElement) => {
    if (sec.id === section) {
      sec.classList.add("selected");
      sec.parentElement?.classList.remove("move-right", "move-left");
      sec.parentElement?.classList.add(
        section === "courses" ? "move-left" : "move-right"
      );
    } else {
      sec.classList.remove("selected");
    }
  });
}

window.onload = () => {
  CardsTemplate();
  announcementsTemplate();
  alertsTemplate();
  SortCardsTemplate(); // sorting of cards

  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll(".Section");

  // Automatically select the "Courses" section on page load
  toggleSection("courses");

  sections.forEach((sec: HTMLElement) => {
    sec.addEventListener("click", () => {
      if (sec.id === "classes") {
        toggleSection("classes"); // Select only the "Classes" section
      } else {
        toggleSection(sec.id);
      }
    });
  });
};
