// Add smooth scrolling for navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const targetSection =
      this.querySelector(".content")?.textContent.toLowerCase();
    if (targetSection) {
      const section = document.querySelector(`.${targetSection}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Add hover effects for project items
document.querySelectorAll(".project__item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.transition = "transform 0.3s ease";
    this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Add animation for skill bars
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-skill");
    }
  });
}, observerOptions);

document.querySelectorAll(".skill").forEach((skill) => {
  observer.observe(skill);
});

// Email verification functionality
document.addEventListener("DOMContentLoaded", function () {
  const verificationForm = document.getElementById("email-verification");
  if (verificationForm != null) {
    const emailInput = document.getElementById("verify-email");
    const personalContent = document.getElementById("personal-content");
    const invalidFeedback = document.querySelector(".invalid-feedback");

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const correctEmail = "ducttfx61260@funix.edu.vn";

    verificationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();

      // Kiểm tra định dạng email
      if (!emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        invalidFeedback.textContent = "Email không đúng định dạng";
        invalidFeedback.style.display = "block";
        return;
      }

      // Kiểm tra email có đúng không
      if (email === correctEmail) {
        // Show personal content
        personalContent.classList.remove("d-none");
        verificationForm.classList.add("d-none");

        // Add fade-in animation
        personalContent.style.opacity = "0";
        personalContent.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          personalContent.style.opacity = "1";
        }, 10);
      } else {
        // Show error message for incorrect email
        emailInput.classList.add("is-invalid");
        invalidFeedback.textContent = "Email không chính xác";
        invalidFeedback.style.display = "block";
      }
    });
  }

  // Remove error state when user starts typing
  emailInput.addEventListener("input", function () {
    emailInput.classList.remove("is-invalid");
    invalidFeedback.style.display = "none";
  });

  // Initialize detail sections
  const detailItems = document.querySelectorAll(".detail-item");
  if (detailItems != null) {
    detailItems.forEach((item) => {
      const body = item.querySelector(".detail-item__body");

      // Wrap content and add toggle button
      const content = document.createElement("div");
      content.className = "detail-item__content";
      while (body.firstChild) {
        content.appendChild(body.firstChild);
      }
      body.appendChild(content);

      const toggle = document.createElement("div");
      toggle.className = "detail-item__toggle";
      const toggleBtn = document.createElement("button");
      toggleBtn.className = "btn btn-primary btn-sm view-toggle";
      toggleBtn.textContent = "View More";
      toggle.appendChild(toggleBtn);
      item.appendChild(toggle);

      // Toggle content visibility
      toggleBtn.addEventListener("click", () => {
        const isVisible = body.classList.contains("show");

        if (isVisible) {
          body.classList.remove("show");
          toggleBtn.textContent = "View More";

          // Add fade out animation
          body.style.opacity = "0";
          setTimeout(() => {
            body.style.display = "none";
          }, 300);
        } else {
          body.style.display = "block";
          body.classList.add("show");
          toggleBtn.textContent = "View Less";

          // Add fade in animation
          setTimeout(() => {
            body.style.opacity = "1";
          }, 10);
        }
      });
    });
  }
});

// Handle project details
const projectData = {
  1: {
    title: "CV CÁ NHÂN",
    goals: {
      business: [
        "Xây dựng CV trực tuyến để giới thiệu bản thân",
        "Tạo portfolio để showcase các project đã làm",
      ],
      user: [
        "Dễ dàng xem thông tin ứng viên",
        "Có thể xem CV trên nhiều thiết bị khác nhau",
      ],
    },
    scope: {
      in: [
        "Xây dựng giao diện responsive",
        "Hiển thị thông tin cá nhân",
        "Hiển thị các kỹ năng và kinh nghiệm",
        "Hiển thị các chứng chỉ và giải thưởng",
      ],
      out: [
        "Chức năng đăng nhập/đăng ký",
        "Chức năng chỉnh sửa thông tin trực tiếp",
      ],
    },
    team: {
      developer: {
        name: "Trương Tiến Đức",
        tasks: [
          "Phát triển giao diện",
          "Tối ưu responsive",
          "Testing và debug",
        ],
      },
      mentor: {
        name: "FUNiX",
        tasks: ["Code review", "Đánh giá và góp ý"],
      },
    },
    primary: {
      must: [
        "Giao diện responsive trên các thiết bị",
        "Hiển thị đầy đủ thông tin CV",
        "Navigation menu dễ sử dụng",
      ],
      nice: ["Animation và hiệu ứng chuyển động", "Dark/Light mode"],
    },
    timeline: [
      {
        date: "01/09/2023",
        title: "Bắt đầu dự án",
        tasks: ["Phân tích yêu cầu", "Thiết kế giao diện"],
      },
      {
        date: "15/09/2023",
        title: "Phát triển",
        tasks: ["Xây dựng HTML structure", "Styling với CSS"],
      },
      {
        date: "01/10/2023",
        title: "Responsive",
        tasks: ["Tối ưu cho tablet", "Tối ưu cho mobile"],
      },
      {
        date: "15/10/2023",
        title: "Hoàn thành",
        tasks: ["Testing và debug", "Deploy lên hosting"],
      },
    ],
  },
  2: {
    title: "TRANG WEB QUẢN LÝ THÚ CƯNG",
    goals: {
      business: [
        "Xây dựng hệ thống quản lý thú cưng cho phòng khám",
        "Tối ưu quy trình làm việc của nhân viên",
      ],
      user: [
        "Dễ dàng theo dõi tình trạng thú cưng",
        "Đặt lịch khám và nhận thông báo",
      ],
    },
    scope: {
      in: [
        "Quản lý thông tin thú cưng",
        "Quản lý lịch khám",
        "Quản lý tiêm chủng",
        "Thống kê báo cáo",
      ],
      out: ["Thanh toán trực tuyến", "Tích hợp camera theo dõi"],
    },
    team: {
      developer: {
        name: "Trương Tiến Đức",
        tasks: ["Phát triển backend", "Thiết kế database", "API integration"],
      },
      mentor: {
        name: "FUNiX",
        tasks: ["Code review", "Tư vấn kiến trúc"],
      },
    },
    primary: {
      must: [
        "Quản lý thông tin cơ bản",
        "Đặt lịch khám",
        "Theo dõi tiêm chủng",
      ],
      nice: ["Thống kê nâng cao", "Nhắc nhở tự động"],
    },
    timeline: [
      {
        date: "01/03/2023",
        title: "Khởi động",
        tasks: ["Phân tích yêu cầu", "Thiết kế database"],
      },
      {
        date: "15/03/2023",
        title: "Backend",
        tasks: ["Xây dựng API", "Unit testing"],
      },
      {
        date: "01/04/2023",
        title: "Frontend",
        tasks: ["Xây dựng giao diện", "Tích hợp API"],
      },
      {
        date: "15/04/2023",
        title: "Hoàn thiện",
        tasks: ["Testing tổng thể", "Triển khai thử nghiệm"],
      },
    ],
  },
  3: {
    title: "TRANG WEB XEM TIN TỨC",
    goals: {
      business: [
        "Xây dựng nền tảng tin tức tổng hợp",
        "Tăng tương tác người dùng",
      ],
      user: [
        "Dễ dàng tìm kiếm tin tức quan tâm",
        "Tùy chỉnh nguồn tin theo sở thích",
      ],
    },
    scope: {
      in: [
        "Tổng hợp tin tức từ nhiều nguồn",
        "Phân loại tin tức theo chủ đề",
        "Tìm kiếm tin tức",
        "Đề xuất tin tức liên quan",
      ],
      out: ["Viết và đăng tin", "Bình luận và đánh giá"],
    },
    team: {
      developer: {
        name: "Trương Tiến Đức",
        tasks: [
          "Xây dựng crawler",
          "Phát triển thuật toán đề xuất",
          "Tối ưu hiệu năng",
        ],
      },
      mentor: {
        name: "FUNiX",
        tasks: ["Code review", "Tư vấn giải pháp"],
      },
    },
    primary: {
      must: [
        "Crawler tin tức tự động",
        "Tìm kiếm nhanh chóng",
        "Giao diện thân thiện",
      ],
      nice: ["Đề xuất cá nhân hóa", "Thống kê xu hướng"],
    },
    timeline: [
      {
        date: "01/06/2023",
        title: "Lên kế hoạch",
        tasks: ["Nghiên cứu công nghệ", "Thiết kế hệ thống"],
      },
      {
        date: "15/06/2023",
        title: "Crawler",
        tasks: ["Xây dựng crawler", "Xử lý dữ liệu"],
      },
      {
        date: "01/07/2023",
        title: "Frontend",
        tasks: ["Thiết kế giao diện", "Tích hợp API"],
      },
      {
        date: "15/07/2023",
        title: "Hoàn thiện",
        tasks: ["Tối ưu hiệu năng", "Kiểm thử và triển khai"],
      },
    ],
  },
};

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

// Update project details if on digital-cv.html
if (window.location.pathname.includes("digital-cv.html") && projectId) {
  const project = projectData[projectId];
  if (project) {
    // Update title
    document.querySelector("h1").textContent = project.title;

    // Update goals
    const goalsList = document.querySelector("#goals .project-content ul");
    if (goalsList) {
      goalsList.innerHTML = `
        <li class="mb-3">
          <strong>Business goals:</strong>
          <ul>
            ${project.goals.business.map((goal) => `<li>${goal}</li>`).join("")}
          </ul>
        </li>
        <li>
          <strong>User goals:</strong>
          <ul>
            ${project.goals.user.map((goal) => `<li>${goal}</li>`).join("")}
          </ul>
        </li>
      `;
    }

    // Update scope
    const scopeContent = document.querySelector("#scope .project-content");
    if (scopeContent) {
      scopeContent.innerHTML = `
        <div class="mb-3">
          <strong>IN</strong>
          <ul>
            ${project.scope.in.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div>
          <strong>OUT</strong>
          <ul>
            ${project.scope.out.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Update team
    const teamList = document.querySelector("#team .project-content ul");
    if (teamList) {
      teamList.innerHTML = `
        <li class="mb-3">
          <strong>Developer:</strong> ${project.team.developer.name}
          <ul>
            ${project.team.developer.tasks
              .map((task) => `<li>${task}</li>`)
              .join("")}
          </ul>
        </li>
        <li>
          <strong>Mentor:</strong> ${project.team.mentor.name}
          <ul>
            ${project.team.mentor.tasks
              .map((task) => `<li>${task}</li>`)
              .join("")}
          </ul>
        </li>
      `;
    }

    // Update primary
    const primaryList = document.querySelector("#primary .project-content ul");
    if (primaryList) {
      primaryList.innerHTML = `
        <li class="mb-3">
          <strong>Must have:</strong>
          <ul>
            ${project.primary.must.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </li>
        <li>
          <strong>Nice to have:</strong>
          <ul>
            ${project.primary.nice.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </li>
      `;
    }

    // Update timeline
    const timeline = document.querySelector("#timeline .timeline");
    if (timeline) {
      timeline.innerHTML = project.timeline
        .map(
          (item) => `
        <div class="timeline-item">
          <strong>${item.date}:</strong> ${item.title}
          <ul>
            ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("");
    }
  }
}
