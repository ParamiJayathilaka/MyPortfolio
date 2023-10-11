const ITEM_CODE_REGEX = /^(C00-)[0-9]{3}$/;
const ITEM_DESCRIPTION_REGEX = /^[A-Za-z ]{5,}$/;
const ITEM_QTY_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const ITEM_UNITPRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let item_vArray = new Array();
item_vArray.push({field: $("#txtItemCode"), regEx: CUS_ID_REGEX});
item_vArray.push({field: $("#txtItemDescription"), regEx: CUS_NAME_REGEX});
item_vArray.push({field: $("#txtItemPrice"), regEx: CUS_ADDRESS_REGEX});
item_vArray.push({field: $("#txtItemQty"), regEx: CUS_CONTACT_REGEX});

function clearItemInputFields() {
    $("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").val("");
    $("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").css("border", "1px solid #ced4da");
    $("#txtItemCode").focus();
    setBtn();
}

setBtn();

$("#txtItemCode,#txtItemDescription,#txtItemPrice,#txtItemQty").on("keydown keyup", function (e) {

    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));


    if (e.key == "Tab") {
        e.preventDefault();
    }


    checkValidations(c_vArray[indexNo]);

    setBtn();

    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {

            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveCustomer();
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