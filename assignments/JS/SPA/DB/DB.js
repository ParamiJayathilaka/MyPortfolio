//you can store data like as follows
var customerDB = [
    {id: "C00-001", name: "Inosha Harshani", address: "Galle",salary: 100000},
    {id: "C00-002", name: "Gamage Jayathilaka", address: "Hikkaduwa",salary: 200000},
    {id: "C00-003", name: "Thinithi Parami", address: "Baddegama",salary: 300000}
];

var itemDB = [
    {code:"I00-001",description:"Bluse(XL)",qtyOnHand: 100,unitPrice: 145.00},
    {code:"I00-002",description:"Shirt",qtyOnHand: 150,unitPrice: 345.00},
    {code:"I00-003",description:"Frock",qtyOnHand: 400,unitPrice: 245.00}
];

var orderDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001", orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, unitPrice:145.00},
            {oid:"OID-001", code:"I00-002", qty:2, unitPrice:345.00}
        ]
    }
];