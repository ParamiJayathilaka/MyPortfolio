let orderNumberCounter = 1;
let orderIDstor;
generateOrderID();
function generateOrderID() {
    const orderID = `ORD-${String(orderNumberCounter).padStart(3, '0')}`;
    orderNumberCounter++;
    orderIDstor = orderID;
    $("#OrderId").val(orderID);
}

let typeOrdIdOrderPlace = document.getElementById("OrderId");
let OrderNotTypeId = document.getElementById("OrderNotTypeId");
typeOrdIdOrderPlace.addEventListener("keyup", function () {
    if ($("#OrderId").val() === orderIDstor) {
        $("#OrderNotTypeId").css({
            display: "none",
        });
        $("#lableTotPrice").text("0");
        $("#lableSubTotal").text("0");
    } else {
        $("#OrderNotTypeId").css({
            display: "block",
        });
        OrderNotTypeId.textContent="Next Order Id : "+orderIDstor;
    }
});

//item section
let ChoiceElement = document.getElementById("ChoiceQTYOrder");
let labelElement = document.getElementById("h1hello");
let qty2;
function CheckQTY(qty) {
    qty2=qty;
}

ChoiceElement.addEventListener("keyup", function () {
    let value = ChoiceElement.value;
    if (qty2 <= value) {
        $("#qtymassage").css({
            display: "block",
        });
        $("#ChoiceQTYOrder").css({
            border:"2px solid red"
        });
        $("#h1hello").css({
            display: "block"
        });
        labelElement.textContent = qty2;
    }else {
        $("#qtymassage").css({
            display: "none"
        });
        $("#ChoiceQTYOrder").css({
            border:"0px solid white"
        });
        $("#h1hello").css({
            display: "none"
        });
    }
});

function checkValidation() {
    var inputField = document.getElementById("ItemIdSetOrder");
    var inputValue = inputField.value.trim();
    var inputField2 = document.getElementById("custIdSetOrder");
    var inputValue2 = inputField2.value.trim();
    var inputFieldDate = document.getElementById("date");
    var inputValueDate = inputFieldDate.value.trim();
    var inputFieldorder = document.getElementById("ChoiceQTYOrder");
    var inputValueorder = inputFieldorder.value.trim();
    if (inputValue === "" || inputValue2 === "" || inputValueDate === "" || inputValueorder === "") {
        if (inputValue === "") {
            $("#IteminputState").css({
                border: "2px solid red"
            });
        } else {
            $("#IteminputState").css({
                border: "0px solid white"
            });
        }
        if (inputValue2 === "") {
            $("#CustominputState").css({
                border: "2px solid red"
            });
        } else {
            $("#CustominputState").css({
                border: "0px solid white"
            });
        }
        if (inputValueDate === "") {
            $("#date").css({
                border: "2px solid red"
            });
        } else {
            $("#date").css({
                border: "0px solid white"
            });
        }
        if (inputValueorder === "") {
            $("#ChoiceQTYOrder").css({
                border: "2px solid red"
            });
        } else {
            $("#ChoiceQTYOrder").css({
                border: "0px solid white"
            });
        }
    } else {
        getAllItemTOOrder();
        $("#IteminputState").css({
            border:"0px solid white"
        });
        $("#CustominputState").css({
            border:"0px solid white"
        });
        $("#date").css({
            border:"0px solid white"
        });
        $("#ChoiceQTYOrder").css({
            border:"2px solid white"
        });
    }
}

function checkValidationPurch() {
    var inputField = document.getElementById("ItemIdSetOrder");
    var inputValue = inputField.value.trim();
    var inputField2 = document.getElementById("custIdSetOrder");
    var inputValue2 = inputField2.value.trim();
    var inputFieldDate = document.getElementById("date");
    var inputValueDate = inputFieldDate.value.trim();
    var inputFieldorder = document.getElementById("ChoiceQTYOrder");
    var inputValueorder = inputFieldorder.value.trim();
    if (inputValue === "" || inputValue2 === "" || inputValueDate === "" || inputValueorder === "") {
        if (inputValue === "") {
            $("#IteminputState").css({
                border: "2px solid red"
            });
        } else {
            $("#IteminputState").css({
                border: "0px solid white"
            });
        }
        if (inputValue2 === "") {
            $("#CustominputState").css({
                border: "2px solid red"
            });
        } else {
            $("#CustominputState").css({
                border: "0px solid white"
            });
        }
        if (inputValueDate === "") {
            $("#date").css({
                border: "2px solid red"
            });
        } else {
            $("#date").css({
                border: "0px solid white"
            });
        }
        if (inputValueorder === "") {
            $("#ChoiceQTYOrder").css({
                border: "2px solid red"
            });
        } else {
            $("#ChoiceQTYOrder").css({
                border: "0px solid white"
            });
        }
    } else {
        $("#IteminputState").css({
            border:"0px solid white"
        });
        $("#CustominputState").css({
            border:"0px solid white"
        });
        $("#date").css({
            border:"0px solid white"
        });
        $("#ChoiceQTYOrder").css({
            border:"2px solid white"
        });
    }
}

$("#addToCardOrder").click(function () {
    checkValidation();
});

function inputCashCheck() {
    let value = inputCash.value;
    let balance = inputCash.value-totalPriceSum2;
    if (totalPriceSum2 <= value) {
        $("#cashLOwMasse").css({
            display: "none"
        });
        $("#inputCash").css({
            border:"0px solid white"
        });
        $("#cashShow").css({
            display: "none"
        });
        $("#BalanceInput").val(balance);
        // document.getElementById("BalanceInput").innerHTML = balance;
    }else {
        $("#cashLOwMasse").css({
            display: "block",
        });
        $("#inputCash").css({
            border:"2px solid red"
        });
        $("#cashShow").css({
            display: "block"
        });
        cashLOwMasse.textContent = totalPriceSum2;
    }
}

//purches order
$("#purchase").click(function () {
    let inputField = document.getElementById("inputCash");
    let inputValue = inputField.value.trim();
    let inputField2 = document.getElementById("discount");
    let inputValue2 = inputField2.value.trim();
    let inputFieldDate = document.getElementById("BalanceInput");
    let inputValueDate = inputFieldDate.value.trim();
    if (checkValidationPurch() || inputValue === "" || inputValue2 === "" || inputValueDate === "") {
        $("#inputCash").css({
            border:"2px solid red"
        });
        $("#discount").css({
            border:"2px solid red"
        });
        $("#BalanceInput").css({
            border:"2px solid red"
        });
        checkValidationPurch();
    } else {
        $("#inputCash").css({
            border:"0px solid white"
        });
        $("#discount").css({
            border:"0px solid white"
        });
        $("#BalanceInput").css({
            border:"0px solid white"
        });
        // setOrderValue(orderIDstor);
        ItemQTYLower(orderIDstor);
    }
});

function allemtyset() {
    $("#custIdSetOrder").val("");
    $("#custNameSetOrder").val("");
    $("#custAddressSetOrder").val("");
    $("#custSalarySetOrder").val("");
    $("#ItemIdSetOrder").val("");
    $("#ItemNameSetOrder").val("");
    $("#ItemPriceSetOrder").val("");
    $("#ItemQTYSetOrder").val("");

    $("#inputCash").val("");
    $("#discount").val("");
    $("#BalanceInput").val("");
    $("#date").val("");
    $("#CustominputState").val("C00-001");

    $("#IteminputState").val("I00-001");
    $("#lableTotPrice").text("0");
    $("#lableSubTotal").text("0");
    $("#ChoiceQTYOrder").val("");
    $("#TBodyOrder").empty();
    generateOrderID();
    alert("order placed");

}



