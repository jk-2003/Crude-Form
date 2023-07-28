let row = null;
var msg_name = document.getElementById("msg_name");
var msg_age = document.getElementById("msg_age");
var msg_ph_no = document.getElementById("msg_ph_no");

function submit(event) {
  let value = readform();
  if (value == false) {
    if (!name_valid() || !age_valid() || !ph_no_valid()) {
      document.getElementById("error_msg").innerHTML = "clear the error!";
      setTimeout(reset, 500);
      return false;
    }
  } else {
    if (row == null) {
      writedata(value);
      document.getElementById("success_msg").innerHTML = "submit succesfully!";
      setTimeout(reset, 500);
    } else {
      update(value);
      row = null;
      reset();
    }
  }
}

function readform() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let ph_no = document.getElementById("ph_no").value;
  let formdata = [name, age, ph_no];
  if (formdata.includes("")) {
    return false;
  } else {
    return formdata;
  }
}

function writedata(data) {
  let table = document.getElementById("table");
  let row = table.insertRow(table.length);
  row.insertCell(0).innerHTML = data[0];

  row.insertCell(1).innerHTML = data[1];

  row.insertCell(2).innerHTML = data[2];

  row.insertCell(3).innerHTML =
    '<button onclick="onedit(this)">edit</button>  <button onclick="ondelete(this)">delete</button>';
}
// reset data
function reset() {
  document.getElementById("name").value = " ";
  document.getElementById("age").value = " ";
  document.getElementById("ph_no").value = " ";
  document.getElementById("msg_name").value = " ";
  document.getElementById("msg_age").value = " ";
  document.getElementById("msg_ph_no").value = " ";
  document.getElementById("success_msg").innerHTML = " ";
  document.getElementById("error_msg").innerHTML = " ";
  row = null;
}
// edit data
function onedit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("age").value = row.cells[1].innerHTML;
  document.getElementById("ph_no").value = row.cell[2].innerHTML;
}
// updata date

function update(data) {
  row.cells[0].innerHTML = data[0];
  row.cells[1].innerHTML = data[1];
  row.cells[2].innerHTML = data[2];
}

// delete data
function ondelete(td) {
  if (confirm("if you want to delete this row data")) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }
}

// validation

function name_valid() {
  var name = document.getElementById("name").value;
  if (name.length === 0) {
    msg_name.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    msg_name.innerHTML = "fill firstname and lastname";
    return false;
  }

  msg_name.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function age_valid() {
  var age = document.getElementById("age").value;
  if (age.length == 0) {
    msg_age.innerHTML = "age is required";
    return false;
  }
  msg_age.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
function ph_no_valid() {
  var ph_no = document.getElementById("ph_no").value;

  if (ph_no.length == 0) {
    msg_ph_no.innerHTML = "phone no is required";
    return false;
  }

  if (ph_no.length !== 10) {
    msg_ph_no.innerHTML = "phone no should be 10 digits";
    return false;
  }

  if (!ph_no.match(/^[0-9]{10}$/)) {
    msg_ph_no.innerHTML = "phone no is required";
    return false;
  }
  msg_ph_no.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
