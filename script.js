var selectedRow =null

function onFormSubmit() 
{
	if(validate())
	{
	var formData = readFormData();
if(selectedRow==null)
	insertNewRecord(formData);
	else
	updateRecord(formData);
resetform();
	}
	
}
function readFormData(){
	
	var formData={};
	formData["idNumber"] = document.getElementById("idNumber").value;
	formData["fullName"] = document.getElementById("fullName").value;
	formData["accountType"] = document.getElementById("accountType").value;
	formData["accountNumber"] = document.getElementById("accountNumber").value;
	formData["mobileNumber"] = document.getElementById("mobileNumber").value;
	return formData;
}

function insertNewRecord(data){
	if(confirm('Are you want to transfer your money?'))
	{
	var table = document.getElementById("bank").getElementsByTagName('tbody')[0];
	var newRow=table.insertRow(table.length);
	cell1=newRow.insertCell(0);
	cell1.innerHTML = data.idNumber;
	cell2=newRow.insertCell(1);
	cell2.innerHTML = data.fullName;
	cell3=newRow.insertCell(2);
	cell3.innerHTML = data.accountType;
	cell4=newRow.insertCell(3);
	cell4.innerHTML = data.accountNumber;
	cell5=newRow.insertCell(4);
	cell5.innerHTML = data.mobileNumber;
	cell5=newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)"></a>
                       <a onClick="onDelete(this)">Delete</a>`;
	}
	if(insertNewRecord==true);
	{
		setTimeout(function(){ alert("Congrats,Your Money Has Been Transferred"); }, 100);
	}
	
	
}

function resetform() {
	document.getElementById("idNumber").value="";
	document.getElementById("fullName").value="";
	document.getElementById("accountType").value="";
	document.getElementById("accountNumber").value="";
	document.getElementById("mobileNumber").value="";

}

function onEdit(td) {
	selectedRow=td.parentElement.parentElement;
	document.getElementById("idNumber").value =selectedRow.cells[0].innerHTML;
	document.getElementById("fullName").value =selectedRow.cells[1].innerHTML;
	document.getElementById("accountType").value =selectedRow.cells[2].innerHTML;
	document.getElementById("accountNumber").value =selectedRow.cells[3].innerHTML;
	document.getElementById("mobileNumber").value =selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
	
	selectedRow.cells[0].innerHTML=formData.idNumber;
	selectedRow.cells[1].innerHTML=formData.fullName;
	selectedRow.cells[2].innerHTML=formData.accountType;
	selectedRow.cells[3].innerHTML=formData.accountNumber;
	selectedRow.cells[4].innerHTML=formData.mobileNumber;

	
}

function onDelete(td) {
	if(confirm('Are you sure to delete this record?')) {
	row=td.parentElement.parentElement;
	document.getElementById("bank").deleteRow(row.rowIndex);
	resetform();
	}
}
	
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
	return isValid;
}