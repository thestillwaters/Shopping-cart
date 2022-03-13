(function () {
    var items = [{
        id:0,
        itemName: "Classic Tee",
        price: "75.00",
        desription: "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet. consectetur adipiscing elit Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus",
        size: "S",
        imgPath: "img/classic-tee.jpg",
        imgThumbnailPath: "img/tee-thumbnail.JPG"
    }, {
        id:1,
        itemName: "Classic Tee",
        price: "75.00",
        desription: "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet. consectetur adipiscing elit Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus",
        size: "M",
        imgPath: "img/classic-tee.jpg",        
        imgThumbnailPath: "img/tee-thumbnail.JPG"
    }, {
        id:2,
        itemName: "Classic Tee",
        price: "75.00",
        desription: "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet. consectetur adipiscing elit Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus",
        size: "L",
        imgPath: "img/classic-tee.jpg",
        imgThumbnailPath: "img/tee-thumbnail.JPG"
    }];

    document.getElementsByClassName("item--itemName")[0].innerHTML = items[0].itemName;
    document.getElementsByClassName("item--price")[0].innerHTML = items[0].price;
    document.getElementsByClassName("item--desription")[0].innerHTML = items[0].desription;
    //cart empty for desktop
    var desktopElements = document.getElementsByClassName("cart--item");
    for (var i = 0, len = desktopElements.length; i < len; i++) {
        desktopElements[i].style.display = 'none';
    }
    //cart empty for mobile
    var mobileElements = document.getElementsByClassName("cart--mobile--item");
    for (var i = 0, len = mobileElements.length; i < len; i++) {
        mobileElements[i].style.display = 'none';
    }
    items.forEach(createItemSizeBtn); 
    //create three size buttons
    function createItemSizeBtn(item) {
        var btn = document.createElement("button");
        btn.innerHTML = item.size;
        btn.className = "border border-light";
        btn.addEventListener("click", function () {
            document.getElementsByClassName("choseSize")[0].innerHTML = btn.innerHTML;
        })
        document.getElementsByClassName("item--size")[0].appendChild(btn);        
    }

    var itemAdd = document.getElementsByClassName('item--add')[0];   
    // cart array has element with id and count and id can refer to items array which has all info
    var cart = [];
    itemAdd.addEventListener("click", function () {
        var choseSize = document.getElementsByClassName("choseSize")[0].innerHTML
        
        if (choseSize === "") {
            alert('Please choose a size');
        }else{
            var obj = items.find(o => o.size === choseSize);
            var cartItem = cart.find(o => o.id === obj.id);
            //if cart item not exsit, update item info for button for desktop and mobile
            if(cart.find(o => o.id === obj.id)  === undefined){
                item = {
                    id:obj.id,
                    count:1
                }
                cart.push(item);                
                document.getElementsByClassName("cart--item")[obj.id].style.display = 'block'; 
                document.getElementsByClassName("cart--mobile--item")[obj.id].style.display = 'block';
                //update desktop cart
                document.getElementsByClassName("cart--item--img")[item.id].src = obj.imgThumbnailPath;
                document.getElementsByClassName("cart--item--itemName")[item.id].innerHTML = obj.itemName;
                document.getElementsByClassName("cart--item--price")[item.id].innerHTML = obj.price;
                document.getElementsByClassName("cart--item--size")[item.id].innerHTML = obj.size;
                document.getElementsByClassName("cart--item--count")[item.id].innerHTML = item.count;
                //update mobile cart
                document.getElementsByClassName("cart--mobile--item--img")[item.id].src = obj.imgThumbnailPath;
                document.getElementsByClassName("cart--mobile--item--itemName")[item.id].innerHTML = obj.itemName;
                document.getElementsByClassName("cart--mobile--item--price")[item.id].innerHTML = obj.price;
                document.getElementsByClassName("cart--mobile--item--size")[item.id].innerHTML = obj.size;
                document.getElementsByClassName("cart--mobile--item--count")[item.id].innerHTML = item.count;
            //if cart item exsits, only update quantity
            }else {
                cartItem.count +=1;                
                document.getElementsByClassName("cart--item--count")[cartItem.id].innerHTML = cartItem.count;
                document.getElementsByClassName("cart--mobile--item--count")[cartItem.id].innerHTML = cartItem.count;
            }
            var total = cart.reduce((a, b) => a + b.count, 0)
            document.getElementsByClassName("cart--mobile--item--total")[0].innerHTML = total;
            document.getElementsByClassName("cart--item--total")[0].innerHTML = total;
        }
    })
})();