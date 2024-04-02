let employeeName = document.getElementById("name") ;
let employeeId = document.getElementById("id") ;
let employeeDesignation = document.getElementById("designation") ;
let employeeAddress = document.getElementById("address") ;
let employeeDeparament = document.getElementById("deparament") ;
let employeeSalary = document.getElementById("salary") ;


let selected = null ;

function saveEmployeeData() 
{
	let employeeData = fetchEmployeeData() ;
	if (selected==null)
	{
		saveEmployee(employeeData);
	}
	else
	{
		updateRow() ;
	}
	clearFields() ;
	// open("Data.html") ;
}

function fetchEmployeeData() 
{
	let employeeData = {} ;
	employeeData.employeeName = employeeName.value ;
	employeeData.employeeId = employeeId.value ;
	employeeData.employeeAddress = employeeAddress.value ;
	employeeData.employeeDesignation = employeeDesignation.value ;
	employeeData.employeeDeparament = employeeDeparament.value ;
	employeeData.employeeSalary = employeeSalary.value ;
	return employeeData ;
}

function saveEmployee(employeeData) 
{
	let tbody = document.getElementById("table-body") ;
	let newRow = tbody.insertRow(0) ;

	let cell0 = newRow.insertCell(0);
	cell0.innerHTML = employeeData.employeeName ;

	let cell1 = newRow.insertCell(1) ;
	cell1.innerHTML = employeeData.employeeId ;
	let cell2 = newRow.insertCell(2) ;
	cell2.innerHTML = employeeData.employeeDesignation ;
	let cell3 = newRow.insertCell(3) ;
	cell3.innerHTML = employeeData.employeeDeparament ;
	let cell4 = newRow.insertCell(4) ;
	cell4.innerHTML = employeeData.employeeAddress;
	let cell5 = newRow.insertCell(5) ;
	cell5.innerHTML = employeeData.employeeSalary ;
	let cell6 = newRow.insertCell(6) ;
	cell6.innerHTML = `<button type="button" onClick="editEmployee(this)">EDIT</button>
						<button type="button" onClick="deleteEmployee(this)">DELETE</button>` ;
}

function editEmployee(obj) 
{
	selected = obj.parentElement.parentElement ;
	employeeName.value = selected.cells[0].innerHTML;
	employeeId.value = selected.cells[1].innerHTML;
	employeeDesignation.value = selected.cells[2].innerHTML;
	employeeDeparament.value = selected.cells[3].innerHTML;
	employeeAddress.value = selected.cells[4].innerHTML;
	employeeSalary.value = selected.cells[5].innerHTML;
}

function clearFields() 
{
	employeeName.value = "";
	employeeId.value = "";
	employeeDesignation.value ="";
	employeeDeparament.value ="";
	employeeAddress.value ="";
	employeeSalary.value = "";	
}

function updateRow(argument) {
	selected.cells[0].innerHTML = employeeName.value ;
	selected.cells[1].innerHTML = employeeId.value ;
	selected.cells[2].innerHTML = employeeDesignation.value ;
	selected.cells[3].innerHTML = employeeDeparament.value ;
	selected.cells[4].innerHTML = employeeAddress.value ;
	selected.cells[5].innerHTML = employeeSalary.value ;
}

function deleteEmployee(obj) 
{
	let row = obj.parentElement.parentElement ;
	if(confirm("Are you sure..??"))
	{
		document.getElementById("table-body").deleteRow(row.index) ;
	}
}