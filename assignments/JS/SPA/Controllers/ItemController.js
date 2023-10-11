getAllItems();

$("#btnItem").click(function () {
    if (checkAll()){
        saveItem();
    }else{
        alert("Error");
    }

});

$("#btnItemGetAll").click(function () {
    getAllItems();
});


function bindTrEvents() {
    $('#tblItem>tr').click(function () {
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let description = $(this).children().eq(1).text();
        let qty = $(this).children().eq(2).text();
        let unitPrice = $(this).children().eq(3).text();


        //set the selected rows data to the input fields
        $("#txtItemCode").val(code);
        $("#txtItemDescription").val(description);
        $("#txtItemPrice").val(unitPrice);
        $("#txtItemQty").val(qty);

    })
}


$("#btnItemDelete").click(function () {
    let code = $("#txtItemCode").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }


});

$("#btnItemUpdate").click(function () {
    let code = $("#txtItemCode").val();
    updateItem(code);
    clearItemInputFields();
});

$("#btn-clear1").click(function () {
    clearItemInputFields();
});


function saveItem() {
    let itemCoad = $("#txtItemCode").val();
    //check customer is exists or not?
    if (searchItem(itemCoad.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let itemCoad = $("#txtItemCode").val();
        let itemDescription = $("#txtItemDescription").val();
        let itemQtyOnHand = $("#txtQty").val();
        let itemUnitPrice = $("#txtItemPrice").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newItem = Object.assign({}, item);

        //assigning new values for the customer object
        newItem.code = itemCoad;
        newItem.description = itemDescription;
        newItem.qtyOnHand= itemQtyOnHand;
        newItem.unitPrice = itemUnitPrice;

        //add customer record to the customer array (DB)
        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}



function getAllItems() {
    //clear all tbody data before add
    $("#tblItem").empty();

    //get all items
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let description = itemDB[i].description;
        let qty = itemDB[i].qtyOnHand;
        let unitPrice = itemDB[i].unitPrice;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${description}</td>
                     <td>${qty}</td>
                     <td>${unitPrice}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblItem").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();

    }
}

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    return itemDB.find(function (item) {
        //if the search id match with customer record
        //then return that object
        return item.code == code;
    });
}

function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the code");
    } else {
        let consent = confirm("Do you really want to update this Item.?");
        if (consent) {
            let item = searchItem(code);
            //if the customer available can we update.?

            let itemCode = $("#txtItemCode").val();
            let itemDescription = $("#txtItemDescription").val();
            let itemQtyOnHand = $("#txtQty").val();
            let itemUnitPrice = $("#txtItemPrice").val();

            item.code = itemCode;
            item.description = itemDescription;
            item.qtyOnHand = itemQtyOnHand;
            item.unitPrice = itemUnitPrice;

            getAllItems();
        }
    }

}



