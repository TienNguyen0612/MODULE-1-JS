let listProduct = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Apple iPhone 6", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"]
let editIndex

function displayProduct() {
    let data = "<table>"
    data += "<tr><td colspan='3'><b>Product Name</b></td><td style='color: red'>" + listProduct.length + " products</td></tr>"
    for (let i = 0; i < listProduct.length; i++) {
        data += "<tr>"
        data += "<td id='name'>" + listProduct[i] + "</td>"
        data += "<td><button onclick='edit(" + i + ")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "<td><button onclick='viewProduct(" + i + ")'>View</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("product").innerHTML = data
}

function add() {
    let product = document.getElementById("add").value
    listProduct.push(product)
    document.getElementById("add").value = ""
    displayProduct()
}

function edit(index) {
    // let product = prompt("Nhập lại giá trị sản phẩm bạn muốn đổi:", listProduct[index])
    // listProduct[index] = product
    document.getElementById("edit").value = listProduct[index]
    editIndex = index
    displayProduct()
}

function editProduct() {
    // let product = document.getElementById("edit").value
    listProduct[editIndex] = document.getElementById("edit").value
    document.getElementById("edit").value = ""
    displayProduct()
}

function deleteProduct(index) {
    listProduct.splice(index, 1)
    displayProduct()
}

function viewProduct(index) {
    document.getElementById("product").innerHTML = `Sản phẩm thứ ${index + 1} là: ${listProduct[index]}`
}