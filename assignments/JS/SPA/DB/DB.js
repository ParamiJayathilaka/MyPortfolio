//you can store data like as follows
var customerDB = [
    {id: "C00-001", name: "Inosha Harshani", address: "Galle",salary: 120000},
    {id: "C00-002", name: "Gamage Jayathilaka", address: "Hikkaduwa",salary: 100000},
    {id: "C00-003", name: "Thinithi Parami", address: "Baddegama",salary: 250000}
];

var itemDB = [
    {code:"I00-001",description:"Bluse(XL)",qtyOnHand: 70,unitPrice: 2500.00},
    {code:"I00-002",description:"Shirt",qtyOnHand: 200,unitPrice: 1500.00},
    {code:"I00-003",description:"Frock",qtyOnHand: 50,unitPrice: 2575.00}
];

var orderDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001", orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, unitPrice:2500.00},
            {oid:"OID-001", code:"I00-002", qty:2, unitPrice:1500.00}
        ]
    }
];