var products = document.getElementById("products")
var search = document.getElementById("search")
var products_box = products.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entered_value = event.target.value.toUpperCase()

    for(count=0;count<products_box.length;count++)
    {
        var productname = products_box[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(entered_value)<0)
        {
            products_box[count].style.display = "none"
        }

        else
        {
            products_box[count].style.display = "block"
        }
    }
})
