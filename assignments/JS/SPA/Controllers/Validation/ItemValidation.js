const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_DESCRIPTION_REGEX = /^[A-Za-z ]{5,}$/;
const ITEM_QTY_REGEX =  /^[0-9]{1,}$/;
const ITEM_UNITPRICE_REGEX =  /^[0-9]{2,}([.][0-9]{2})?$/;

let item_vArray = new Array();
item_vArray.push({field: $("#inputItemCode"), regEx: ITEM_CODE_REGEX});
item_vArray.push({field: $("#inputItemName"), regEx: ITEM_DESCRIPTION_REGEX});
item_vArray.push({field: $("#inputItemQty"), regEx: ITEM_QTY_REGEX});
item_vArray.push({field: $("#inputItemPrice"), regEx: ITEM_UNITPRICE_REGEX});


function clearItemInputFields() {
    $("#inputItemCode,#inputItemName,#inputItemQty,#inputItemPrice").val("");
    $("#inputItemCode,#inputItemName,#inputItemQty,#inputItemPrice").css("border", "1px solid #ced4da");
    $("#inputItemCode").focus();
    setBtn();
}

setBtn();

$("#inputItemCode,#inputItemName,#inputItemQty,#inputItemPrice").on("keydown keyup", function (e) {

    let indexNo = item_vArray.indexOf(item_vArray.find((c) => c.field.attr("code") == e.target.code));


    if (e.key == "Tab") {
        e.preventDefault();
    }


    checkValidations(item_vArray[indexNo]);

    setBtn();

    if (e.key == "Enter") {

        if (e.target.code != item_vArray[item_vArray.length - 1].field.attr("code")) {

            if (checkValidations(item_vArray[indexNo])) {
                item_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(item_vArray[indexNo])) {
                saveItem();
            }
        }
    }
});

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
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkAll() {
    for (let i = 0; i < item_vArray.length; i++) {
        if (!checkValidations(item_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    $("#btnItemDelete").prop("disabled", true);
    $("#btnItemUpdate").prop("disabled", true);

    if (checkAll()) {
        $("#btnItem").prop("disabled", false);
    } else {
        $("#btnItem").prop("disabled", true);
    }

    let code = $("#inputItemCode").val();
    if (searchItem(code) == undefined) {
        $("#btnItemDelete").prop("disabled", true);
        $("#btnItemUpdate").prop("disabled", true);
    } else {
        $("#btnItemDelete").prop("disabled", false);
        $("#btnItemUpdate").prop("disabled", false);
    }

}