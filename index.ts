var list: List = []
type List = Array<medicine>;

class medicine {
    private _bName = "";
    private _gName = "";
    private _stock = 0;
    private _price = 0;
    constructor(brandName: string, genericName: string, stock: number, price: number) {
        this._bName = brandName
        this._gName = genericName;
        this._stock = stock;
        this._price = price;
    }
    get getBrandName() {
        return this._bName;
    }
    get getGenericName() {
        return this._gName;
    }
    get getStock() {
        return this._stock;
    }
    get getPrice() {
        return this._price;
    }
    set setStock(stock: number) {
        this._stock = stock;
    }
}

function registerItems() {
    register();
    let bName = (document.getElementById("textInputBrandName") as HTMLInputElement).value
    let gName = (document.getElementById("textInputGenericName") as HTMLInputElement).value
    let stock = (document.getElementById("textInputStock") as HTMLInputElement).value
    let price = (document.getElementById("textInputPrice") as HTMLInputElement).value


    if (bName.trim() == "" || gName.trim() == "" || stock.trim() == "" || price.trim() == "") {
        alert("Invalid Input")
    } else {
        let table = <HTMLTableElement>document.getElementById("tableP");

        for(let item of list) {
            if(item.getBrandName == bName) {
                return
            }
        }

        list.push(new medicine(bName, gName, parseInt(stock), parseInt(price)));

        let row = table.insertRow(table.rows.length)

        let td1 = row.insertCell(0)
        let td2 = row.insertCell(1)
        let td3 = row.insertCell(2)
        let td4 = row.insertCell(3)

        td1.innerHTML = bName;
        td2.innerHTML = gName;
        td3.innerHTML = stock;
        td4.innerHTML = price;
    }

    (document.getElementById("textInputBrandName") as HTMLInputElement).value = "";
    (document.getElementById("textInputGenericName") as HTMLInputElement).value = "";
    (document.getElementById("textInputStock") as HTMLInputElement).value = "";
    (document.getElementById("textInputPrice") as HTMLInputElement).value = "";
}

function updateTable() {
    let table = <HTMLTableElement>document.getElementById("tableP");
    
    table.innerHTML = ''
    
    let header = table.insertRow(0)

    let h1 = header.insertCell(0)
    let h2 = header.insertCell(1)
    let h3 = header.insertCell(2)
    let h4 = header.insertCell(3)

    h1.innerHTML = 'Brand Name'
    h2.innerHTML = 'Generic Name'
    h3.innerHTML = 'Stock'
    h4.innerHTML = 'Price'

    let n = 1;
    
    list.forEach(item => {
        let row = table.insertRow(n)

        let td1 = row.insertCell(0)
        let td2 = row.insertCell(1)
        let td3 = row.insertCell(2)
        let td4 = row.insertCell(3)

        td1.innerHTML = item.getBrandName;
        td2.innerHTML = item.getGenericName
        td3.innerHTML = `${item.getStock}`;
        td4.innerHTML = `${item.getPrice}`;
        n++;
    })
}

function submitBuy() {
    buy();

    let bName = (document.getElementById("textInputBrandName") as HTMLInputElement).value
    let stock = (document.getElementById("textInputStock") as HTMLInputElement).value

    let result = 0;

    if (bName.trim() == "" || stock.trim() == "") {
        alert("Invalid Input")
    } else {
        let i;

        for (i = 0; i < list.length; i++) {
            if (bName == list[i].getBrandName && parseInt(stock) <= list[i].getStock) {
                result = list[i].getStock - parseInt(stock)
                list[i].setStock = result
                alert("You have bought the medicine");
                updateTable()
                register();
                break;
            }
        }

        if (i == list.length)
            alert("Error!");
    }

    (document.getElementById("textInputBrandName") as HTMLInputElement).value = "";
    (document.getElementById("textInputGenericName") as HTMLInputElement).value = "";
    (document.getElementById("textInputStock") as HTMLInputElement).value = "";
    (document.getElementById("textInputPrice") as HTMLInputElement).value = "";
}

function submitChange() {
    changeQuantity();
    let bName = (document.getElementById("textInputBrandName") as HTMLInputElement).value
    let stock = (document.getElementById("textInputStock") as HTMLInputElement).value

    let result = 0;

    if (bName.trim() == "" || stock.trim() == "") {
        alert("Invalid Input")
    } else {
        let i;

        for (i = 0; i < list.length; i++) {
            if (bName == list[i].getBrandName) {
                result = list[i].getStock + parseInt(stock)
                list[i].setStock = result
                alert("You have edited the stock value");
                updateTable()
                register();
                break;
            }
        }

        if (i == list.length)
            alert("Error!");
    }

    (document.getElementById("textInputBrandName") as HTMLInputElement).value = "";
    (document.getElementById("textInputGenericName") as HTMLInputElement).value = "";
    (document.getElementById("textInputStock") as HTMLInputElement).value = "";
    (document.getElementById("textInputPrice") as HTMLInputElement).value = "";
}

//hiding buttons for UI
function register() {
    (document.getElementById("title") as HTMLInputElement).innerHTML = "Pharmacy<br><br>Register Items";
    (document.getElementById("textDescription") as HTMLInputElement).innerHTML = "Register medicines";

    (document.getElementById("buyButton") as HTMLInputElement).style.display = "block";
    (document.getElementById("registerButton") as HTMLInputElement).style.display = "block";
    (document.getElementById("submitBuyButton") as HTMLInputElement).style.display = "none";
    (document.getElementById("register") as HTMLInputElement).style.display = "none";
    (document.getElementById("submitChange") as HTMLInputElement).style.display = "none";
    (document.getElementById("changeQuantityButton") as HTMLInputElement).style.display = "block";

    (document.getElementById("textInputGenericName") as HTMLInputElement).style.display = "inline-block";
    (document.getElementById("genericName") as HTMLInputElement).style.display = "inline-block";
    (document.getElementById("textInputPrice") as HTMLInputElement).style.display = "inline-block";
    (document.getElementById("price") as HTMLInputElement).style.display = "inline-block";
}

function changeQuantity() {
    (document.getElementById("title") as HTMLInputElement).innerHTML = "Pharmacy<br><br>Add Quantity";
    (document.getElementById("textDescription") as HTMLInputElement).innerHTML = "Enter the Existed Brand name to change the quantity of the stock";

    (document.getElementById("submitChange") as HTMLInputElement).style.display = "block";
    (document.getElementById("buyButton") as HTMLInputElement).style.display = "block";
    (document.getElementById("register") as HTMLInputElement).style.display = "block";
    (document.getElementById("registerButton") as HTMLInputElement).style.display = "none";
    (document.getElementById("changeQuantityButton") as HTMLInputElement).style.display = "none";
    (document.getElementById("submitBuyButton") as HTMLInputElement).style.display = "none";

    (document.getElementById("textInputGenericName") as HTMLInputElement).style.display = "none";
    (document.getElementById("genericName") as HTMLInputElement).style.display = "none";
    (document.getElementById("textInputPrice") as HTMLInputElement).style.display = "none";
    (document.getElementById("price") as HTMLInputElement).style.display = "none";
}

function buy() {
    (document.getElementById("title") as HTMLInputElement).innerHTML = "Pharmacy<br><br>Buy Items";
    (document.getElementById("textDescription") as HTMLInputElement).innerHTML = "Enter the existed brand name to buy the stock";

    (document.getElementById("buyButton") as HTMLInputElement).style.display = "none";
    (document.getElementById("registerButton") as HTMLInputElement).style.display = "none";
    (document.getElementById("submitBuyButton") as HTMLInputElement).style.display = "block";
    (document.getElementById("register") as HTMLInputElement).style.display = "block";
    (document.getElementById("submitChange") as HTMLInputElement).style.display = "none";
    (document.getElementById("changeQuantityButton") as HTMLInputElement).style.display = "block";

    (document.getElementById("textInputGenericName") as HTMLInputElement).style.display = "none";
    (document.getElementById("genericName") as HTMLInputElement).style.display = "none";
    (document.getElementById("textInputPrice") as HTMLInputElement).style.display = "none";
    (document.getElementById("price") as HTMLInputElement).style.display = "none";
}