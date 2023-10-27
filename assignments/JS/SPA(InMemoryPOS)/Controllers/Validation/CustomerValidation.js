const Cust_ID_Check = /^(C00-)[0-9]{3}$/;
const Cust_Name_Check = /^[A-Za-z ]{5,}$/;
const Cust_Address_Check = /^[A-Za-z0-9 ]{5,}$/;
const Cust_Salary_Check = /^[0-9]{2,}([.][0-9]{2})?$/;

let custArray = new Array();
custArray.push({field: $("#txtCustomerID"), regEx: Cust_ID_Check});
custArray.push({field: $("#txtCustomerName"), regEx: Cust_Name_Check});
custArray.push({field: $("#txtCustomerAddress"), regEx: Cust_Address_Check});
custArray.push({field: $("#txtCustomerSalary"), regEx: Cust_Salary_Check});


function clearCustomerInputFields() {
    $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").val("");
    $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").css("border", "1px solid #ced4da");
    $("#txtCustomerID").focus();
    setBtn();
}
//


function setBtn() {
    $("#btnCusDelete").prop("disabled", true);
    $("#btnUpdate").prop("disabled", true);

    if (checkAll()) {
        $("#btnCustomer").prop("disabled", false);
    } else {
        $("#btnCustomer").prop("disabled", true);
    }

    let id = $("#txtCustomerID").val();
    if (searchCustomer(id) == undefined) {
        $("#btnCusDelete").prop("disabled", true);
        $("#btnUpdate").prop("disabled", true);
    } else {
        $("#btnCusDelete").prop("disabled", false);
        $("#btnUpdate").prop("disabled", false);
    }

}


$(document).ready(function () {
    $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on("keydown keyup", function (e) {

        let indexNo = custArray.indexOf(custArray.find((c) => c.field.attr("id") == e.target.id));

        if (e.key == "Tab") {
            e.preventDefault();
        }

        checkValidations(custArray[indexNo]);

        setBtn();

        if (e.key == "Enter") {

            if (e.target.id != custArray[custArray.length - 1].field.attr("id")) {
                if (checkValidations(custArray[indexNo])) {
                    custArray[indexNo + 1].field.focus();
                }
            } else {
                if (checkValidations(custArray[indexNo])) {
                    saveCustomer();
                }
            }
        }
    });
});



// $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on("keydown keyup", function (e) {
//     alert("aaaaa")
//     let indexNo = custArray.indexOf(custArray.find((c) => c.field.attr("id") == e.target.id));
//
//     if (e.key == "Tab") {
//         e.preventDefault();
//     }
//
//     checkValidations(custArray[indexNo]);
//
//     setBtn();
//
//     if (e.key == "Enter") {
//
//         if (e.target.id != custArray[custArray.length - 1].field.attr("id")) {
//             if (checkValidations(custArray[indexNo])) {
//                 custArray[indexNo + 1].field.focus();
//             }
//         } else {
//             if (checkValidations(custArray[indexNo])) {
//                 saveCustomer();
//             }
//         }
//     }
// });



function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "2px solid white");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "2px solid white");
        }
    }

}


function checkAllCus() {
    for (let i = 0; i < custArray.length; i++) {
        if (!checkValidations(custArray[i])) return false;
    }
    return true;
}



//
// function setBorder(bol, ob) {
//     if (!bol) {
//         if (ob.field.val().length >= 1) {
//             ob.field.css("border", "2px solid red");
//         } else {
//             ob.field.css("border", "1px solid #ced4da");
//         }
//     } else {
//         if (ob.field.val().length >= 1) {
//             ob.field.css("border", "2px solid green");
//         } else {
//             ob.field.css("border", "1px solid #ced4da");
//         }
//     }
//
// }






