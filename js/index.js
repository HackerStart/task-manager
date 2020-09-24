window.onload = function() {
  let $modal = document.querySelector("#modal");
  let addBtn = document.querySelector("#add_btn");
  let modalBtnCancel = document.querySelector("#modal_btn_cancel");
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
  //定义 确认按钮 时间，判断输入框是否为空
  modalBtnOk.addEventListener("click", function() {
    let isNameEmpty = isEmpty(task_name);
    let isDeadlineEmpty = isEmpty(taskDeadline);
    let isDescEmpty = isEmpty(taskDescription);
    if(!isNameEmpty && !isDeadlineEmpty && !isDescEmpty) {
      $modal.style.display = "none";
    }
  })

  let btnIcon = document.querySelector("#btn_icon");
  btnIcon.addEventListener("click", function() {
    $modal.style.display = "none";
  })
  modalBtnCancel.addEventListener("click", function() {
    $modal.style.display = "none";
  })

  


}
