// import medicine from './pharmacy/medicine.ts'
var list = [];
var medicine = /** @class */ (function () {
    function medicine(brandName, genericName, stock, price) {
        this._bName = "";
        this._gName = "";
        this._stock = 0;
        this._price = 0;
        this._bName = brandName;
        this._gName = genericName;
        this._stock = stock;
        this._price = price;
    }
    Object.defineProperty(medicine.prototype, "getBrandName", {
        get: function () {
            return this._bName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(medicine.prototype, "getGenericName", {
        get: function () {
            return this._gName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(medicine.prototype, "getStock", {
        get: function () {
            return this._stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(medicine.prototype, "getPrice", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(medicine.prototype, "setStock", {
        set: function (stock) {
            this._stock = stock;
        },
        enumerable: false,
        configurable: true
    });
    return medicine;
}());
function registerItems() {
    register();
    var bName = document.getElementById("textInputBrandName").value;
    var gName = document.getElementById("textInputGenericName").value;
    var stock = document.getElementById("textInputStock").value;
    var price = document.getElementById("textInputPrice").value;
    if (bName.trim() == "" || gName.trim() == "" || stock.trim() == "" || price.trim() == "") {
        alert("Invalid Input");
    }
    else {
        var table = document.getElementById("tableP");
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            if (item.getBrandName == bName) {
                return;
            }
        }
        list.push(new medicine(bName, gName, parseInt(stock), parseInt(price)));
        var row = table.insertRow(table.rows.length);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        var td4 = row.insertCell(3);
        td1.innerHTML = bName;
        td2.innerHTML = gName;
        td3.innerHTML = stock;
        td4.innerHTML = price;
    }
    document.getElementById("textInputBrandName").value = "";
    document.getElementById("textInputGenericName").value = "";
    document.getElementById("textInputStock").value = "";
    document.getElementById("textInputPrice").value = "";
}
function updateTable() {
    var table = document.getElementById("tableP");
    // delete all rows
    table.innerHTML = '';
    var header = table.insertRow(0);
    var h1 = header.insertCell(0);
    var h2 = header.insertCell(1);
    var h3 = header.insertCell(2);
    var h4 = header.insertCell(3);
    h1.innerHTML = 'Brand Name';
    h2.innerHTML = 'Generic Name';
    h3.innerHTML = 'Stock';
    h4.innerHTML = 'Price';
    var n = 1;
    list.forEach(function (item) {
        var row = table.insertRow(n);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        var td4 = row.insertCell(3);
        td1.innerHTML = item.getBrandName;
        td2.innerHTML = item.getGenericName;
        td3.innerHTML = "" + item.getStock;
        td4.innerHTML = "" + item.getPrice;
        n++;
    });
}
function submitBuy() {
    buy();
    var bName = document.getElementById("textInputBrandName").value;
    var stock = document.getElementById("textInputStock").value;
    var result = 0;
    if (bName.trim() == "" || stock.trim() == "") {
        alert("Invalid Input");
    }
    else {
        var i = void 0;
        for (i = 0; i < list.length; i++) {
            if (bName == list[i].getBrandName && parseInt(stock) <= list[i].getStock) {
                result = list[i].getStock - parseInt(stock);
                list[i].setStock = result;
                alert("You have bought the medicine");
                updateTable();
                register();
                break;
            }
        }
        if (i == list.length)
            alert("Error!");
    }
    document.getElementById("textInputBrandName").value = "";
    document.getElementById("textInputGenericName").value = "";
    document.getElementById("textInputStock").value = "";
    document.getElementById("textInputPrice").value = "";
}
function submitChange() {
    changeQuantity();
    var bName = document.getElementById("textInputBrandName").value;
    var stock = document.getElementById("textInputStock").value;
    var result = 0;
    if (bName.trim() == "" || stock.trim() == "") {
        alert("Invalid Input");
    }
    else {
        var i = void 0;
        for (i = 0; i < list.length; i++) {
            if (bName == list[i].getBrandName) {
                result = list[i].getStock + parseInt(stock);
                list[i].setStock = result;
                alert("You have edited the stock value");
                updateTable();
                register();
                break;
            }
        }
        if (i == list.length)
            alert("Error!");
    }
    document.getElementById("textInputBrandName").value = "";
    document.getElementById("textInputGenericName").value = "";
    document.getElementById("textInputStock").value = "";
    document.getElementById("textInputPrice").value = "";
}
//hiding buttons for UI
function register() {
    document.getElementById("title").innerHTML = "Pharmacy<br><br>Register Items";
    document.getElementById("textDescription").innerHTML = "Register medicines";
    document.getElementById("buyButton").style.display = "block";
    document.getElementById("registerButton").style.display = "block";
    document.getElementById("submitBuyButton").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("submitChange").style.display = "none";
    document.getElementById("changeQuantityButton").style.display = "block";
    document.getElementById("textInputGenericName").style.display = "inline-block";
    document.getElementById("genericName").style.display = "inline-block";
    document.getElementById("textInputPrice").style.display = "inline-block";
    document.getElementById("price").style.display = "inline-block";
}
function changeQuantity() {
    document.getElementById("title").innerHTML = "Pharmacy<br><br>Add Quantity";
    document.getElementById("textDescription").innerHTML = "Enter the Existed Brand name to change the quantity of the stock";
    document.getElementById("submitChange").style.display = "block";
    document.getElementById("buyButton").style.display = "block";
    document.getElementById("register").style.display = "block";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("changeQuantityButton").style.display = "none";
    document.getElementById("submitBuyButton").style.display = "none";
    document.getElementById("textInputGenericName").style.display = "none";
    document.getElementById("genericName").style.display = "none";
    document.getElementById("textInputPrice").style.display = "none";
    document.getElementById("price").style.display = "none";
}
function buy() {
    document.getElementById("title").innerHTML = "Pharmacy<br><br>Buy Items";
    document.getElementById("textDescription").innerHTML = "Enter the existed brand name to buy the stock";
    document.getElementById("buyButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("submitBuyButton").style.display = "block";
    document.getElementById("register").style.display = "block";
    document.getElementById("submitChange").style.display = "none";
    document.getElementById("changeQuantityButton").style.display = "block";
    document.getElementById("textInputGenericName").style.display = "none";
    document.getElementById("genericName").style.display = "none";
    document.getElementById("textInputPrice").style.display = "none";
    document.getElementById("price").style.display = "none";
}
