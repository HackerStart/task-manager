window.onload = function() {
  let taskBody = document.querySelector("#task_body");
  //定义函数更新当前任务数量情况
  function tasksOverview() {
    let allTasksCount = document.querySelector("#all_tasks_count");
    let activeTasksCount = document.querySelector("#active_tasks_count");
    let paddingTasksCount = document.querySelector("#padding_tasks_count");
    let closedTasksCount = document.querySelector("#closed_tasks_count");
    // let allTasksPercent = document.querySelector("#all_tasks_percent")
    let activeTasksPercent = document.querySelector("#active_tasks_percent")
    let paddingTasksPercent = document.querySelector("#padding_tasks_percent")
    let closedTasksPercent = document.querySelector("#closed_tasks_percent")
    //各任务数量
    allTasksCount.textContent = taskBody.children.length - 1;
    activeTasksCount.textContent = countStatus("Active");
    paddingTasksCount.textContent = countStatus("Padding");
    closedTasksCount.textContent = countStatus("Closed");
    //各任务占比
    if(allTasksCount.textContent === "0") {
      activeTasksPercent.textContent = "0%";
      paddingTasksPercent.textContent = "0%";
      closedTasksPercent.textContent = "0%";
    }
    else {
      activeTasksPercent.textContent = toPercent(allTasksCount.textContent, activeTasksCount.textContent);
      paddingTasksPercent.textContent = toPercent(allTasksCount.textContent, paddingTasksCount.textContent)
      closedTasksPercent.textContent = toPercent(allTasksCount.textContent, closedTasksCount.textContent)
    }

  }

  //定义函数 不同状态任务的数量
  function countStatus(statu) {
    let num = 0;
    let allStatus = document.querySelectorAll(".task_status_col");
    allStatus.forEach(dom => {
      if(dom.textContent === statu) {
        num++;
      }
    })
    return num;
  }

  //定义函数 计算百分比
  function toPercent(str1, str2) {
    if(str1 !== "0") {
      let $percent = (parseInt(str2)/parseInt(str1)).toFixed(2) * 100 + "%";
      return $percent;
    }
  }

  tasksOverview();

  let $modal = document.querySelector("#modal");
  let addBtn = document.querySelector("#add_btn");
  let task_name = document.querySelector("#task_name");
  let taskDeadline = document.querySelector("#task_deadline");
  let taskDescription = document.querySelector("#task_description");
  
  //定义 清空复原输入框 函数
  function getEmpty(dom) {
    dom.style["border-color"] = "#ced4da";
    dom.value = "";
  }
  //新建task并清空复原输入框
  addBtn.addEventListener("click", function() {
    $modal.style.display = "flex";
    getEmpty(task_name);
    getEmpty(taskDeadline);
    getEmpty(taskDescription);
  });

  //定义 判断输入框是否为空 函数
  function isEmpty(dom) {
    if(dom.value === '') {
      dom.style["border-color"] = "red";
      return true;
    }
    else {
      // dom.style["border-color"] = "#ced4da";
      return false;
    }
  }

  let modalBtnOk = document.querySelector("#modal_btn_ok");
  let taskBodyRow = document.querySelector("#task_body_row");
  let num = 0;
  //定义 确认按钮 事件，判断输入框是否为空
  modalBtnOk.addEventListener("click", function() {
    let isNameEmpty = isEmpty(task_name);
    let isDeadlineEmpty = isEmpty(taskDeadline);
    let isDescEmpty = isEmpty(taskDescription);
    //若输入框不为空，新增一行任务
    if(!isNameEmpty && !isDeadlineEmpty && !isDescEmpty) {
      $modal.style.display = "none";
      let newRow = document.createElement("tr");
      newRow.classList.add("task_row");
      newRow.innerHTML = taskBodyRow.innerHTML;
      newRow.children[0].textContent = ++num;
      newRow.children[1].textContent = task_name.value;
      newRow.children[2].textContent = taskDescription.value;
      newRow.children[3].textContent = taskDeadline.value
      newRow.children[4].textContent = "Active";
      changeColor(newRow.children[4]);
      taskBody.appendChild(newRow);
      tasksOverview();
    }
  })

  //定义函数：修改状态栏字体颜色
  function changeColor(dom) {
    if(dom.textContent === "Active") {
      dom.style.color = "rgb(177, 177, 6)";
    }
    if(dom.textContent === "Padding") {
      dom.style.color = "rgb(82, 82, 187)";
    }
    if(dom.textContent === "Closed") {
      dom.style.color = "rgb(238, 82, 113)";
    }
  }

  //关闭新建任务窗口
  let btnIcon = document.querySelector("#btn_icon");
  btnIcon.addEventListener("click", function() {
    $modal.style.display = "none";
  });

  //取消新建任务
  let modalBtnCancel = document.querySelector("#modal_btn_cancel");
  modalBtnCancel.addEventListener("click", function() {
    $modal.style.display = "none";
  });

  


}
