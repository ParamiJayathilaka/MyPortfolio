getAllCustomers();

$("#btnCustomer").click(function () {
    if (checkAllCus()){
        saveCustomer();
    }else{
        alert("Error");
    }

});

$("#btnGetAll").click(function () {
    getAllCustomers();
});


function bindTrEvents() {
    $('#tblCustomer>tr').click(function () {
        // $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").css("border", "2px solid blue");
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalary").val(salary);
    })
}


$("#btnCusDelete").click(function () {
    let id = $("#txtCustomerID").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }
});

$("#btnUpdate").click(function () {
    let id = $("#txtCustomerID").val();
    updateCustomer(id);
    clearCustomerInputFields();
});



//clear textField
$("#btn-clear1").click(function () {
    clearCustomerInputFields();

});

// Save Customer
function saveCustomer() {
    alert("asdada")
    let customerID = $("#txtCustomerID").val();
    //check customer is exists or not?
    if (searchCustomer(customerID.trim()) == undefined) {

        let customerID = $("#txtCustomerID").val();
        let customerName = $("#txtCustomerName").val();
        let customerAddress = $("#txtCustomerAddress").val();
        let customerSalary = $("#txtCustomerSalary").val();

        let newCustomer = Object.assign({}, customer);

        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}


function getAllCustomers() {
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        $("#tblCustomer").append(row);
        bindTrEvents();
    }
}


function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}


function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No Customer find..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);

            let customerID = $("#txtCustomerID").val();
            let customerName = $("#txtCustomerName").val();
            let customerAddress = $("#txtCustomerAddress").val();
            let customerSalary = $("#txtCustomerSalary").val();

            customer.id = customerID;
            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();
        }
    }
}




$(document).on('click', '#CustomerTbl > tr', function() {
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let address = $(this).children().eq(2).text();
    let salary = $(this).children().eq(3).text();

    setTextFieldValues(id,name,address,salary);
});

function setTextFieldValues(id, name, address, salary) {
    $("#txtCustomerID").val(id);
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#txtCustomerSalary").val(salary);
}






