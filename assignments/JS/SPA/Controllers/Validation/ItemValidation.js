const ITEM_CODE_REGEX = /^(C00-)[0-9]{3}$/;
const ITEM_DESCRIPTION_REGEX = /^[A-Za-z ]{5,}$/;
const ITEM_QTY_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const ITEM_UNITPRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let item_vArray = new Array();
item_vArray.push({field: $("#txtItemCode"), regEx: ITEM_CODE_REGEX});
item_vArray.push({field: $("#txtItemDescription"), regEx: ITEM_DESCRIPTION_REGEX});
item_vArray.push({field: $("#txtItemPrice"), regEx: ITEM_QTY_REGEX});
item_vArray.push({field: $("#txtItemQty"), regEx: ITEM_UNITPRICE_REGEX});

function clearItemInputFields() {
    $("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").val("");
    $("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").css("border", "1px solid #ced4da");
    $("#txtItemCode").focus();
    setBtn();
}

setBtn();

$("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").on("keydown keyup", function (e) {

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

    let code = $("#txtItemCode").val();
    if (searchItem(code) == undefined) {
        $("#btnItemDelete").prop("disabled", true);
        $("#btnItemUpdate").prop("disabled", true);
    } else {
        $("#btnItemDelete").prop("disabled", false);
        $("#btnItemUpdate").prop("disabled", false);
    }

}