
import footer from "../components/footer.js";
var foot = document.getElementById("footer");
foot.innerHTML = footer();

async function details() {

    let mealId = localStorage.getItem("mealId");


    let response = await fetch(`http://localhost:8888/products/${mealId}`);

    var data = await response.json();

    console.log("data", data);

    let meal_details = document.getElementById("meal_details");

    let meal_image = document.getElementById("meal_image");

    let main_img = document.createElement('img');
    main_img.setAttribute("id", "main_img");

    main_img.src = data.strMealThumb;

    meal_image.append(main_img);

    let name_p = document.createElement('p');
    name_p.setAttribute("id", "name_p");

    name_p.innerText = data.strMeal;

    let country_p = document.createElement('p');
    country_p.setAttribute("id", "country_p");

    country_p.innerText = "Indian";

    let price_p = document.createElement('p');
    price_p.setAttribute("id", "price_p");

    price_p.innerText = "₹" + " " + data.price;

    let add_div = document.createElement('div');
    add_div.setAttribute("id", "add_div");

    add_div.innerHTML = "Add";
    add_div.addEventListener("click", function () {
        sideCart(({ strMeal, strMealThumb }))
    });

    let detailsMeal_div = document.createElement('div');
    detailsMeal_div.setAttribute("id", "detailsMeal_div");


    let details_head = document.createElement('p');
    details_head.setAttribute("id", "details_head");

    details_head.innerText = "DETAILS ABOUT THIS MEAL";

    let details_description = document.createElement('p');
    details_description.setAttribute("id", "details_description");

    details_description.innerText = "Spicy mushrooms, deep fried and crisp in this bowl, makes for an awesome meal. This dish comes with satisfying schezwan veggies and crispy mushrooms, served on a bed of veg fried rice along with pickled veggie slices for that perfect indulgent meal. Enjoy!";


    // let category_div = document.createElement('div');
    // category_div.setAttribute("id", "category_div");

    // let category_img = document.createElement('img');
    // category_img.setAttribute("id", "category_img");

    // if (strCategory == "Vegetarian") {
    //     category_img.src = "./images/leaf.png";
    // } else {
    //     category_img.src = "./images/chicken-leg.png";
    // }

    // let category_p = document.createElement('p');
    // category_p.setAttribute("id", "category_p");

    // if (strCategory == "Vegetarian") {
    //     category_p.innerText = "Veg";
    // } else {
    //     category_p.innerText = "Non-Veg";
    // }



    // category_div.append(category_img, category_p);

    detailsMeal_div.append(details_head, details_description);
    meal_details.append(name_p, country_p, price_p, add_div, detailsMeal_div);





    // appendMeal(data);


    let response_random = await fetch(`http://localhost:8888/category/salad`);

    let data_random = await response_random.json();

    let data_ranMeal = data_random[0].product_id;

    console.log("data_ranMeal", data_ranMeal);

    appendRandom(data_ranMeal);

}

details();

// function appendMeal(data) {

//     data.forEach(function (elem) {


//     });

// };

let appendRandom = ((data) => {


    var i = 1;
    data.forEach((elem) => {
        if (i > 4) {

        } else {
            var ran_meal = document.getElementById('ran_meal');


            let { _id } = elem;
            let { strMeal } = elem;
            let { strMealThumb } = elem;
            let { price } = elem;

            let ran_main = document.createElement('div');
            ran_main.setAttribute("id", "ran_main");


            let ran_div1 = document.createElement('div');
            ran_div1.setAttribute("id", "ran_div1");

            let ran_div2 = document.createElement('div2');
            ran_div2.setAttribute("id", "ran_div2");

            let ran_img = document.createElement('img');
            ran_img.setAttribute("id", "ran_img");

            ran_img.src = strMealThumb;

            let ran_p1 = document.createElement('p');
            ran_p1.setAttribute("id", "ran_p1");

            ran_p1.innerText = strMeal;

            let ran_p2 = document.createElement('p');
            ran_p2.setAttribute("id", "ran_p2");

            ran_p2.innerText = "Continental";

            let ran_div2_div1 = document.createElement('div');
            ran_div2_div1.setAttribute("id", "ran_div2_div1");

            ran_div2_div1.innerHTML = "₹" + " " + price;

            let ran_div2_div2 = document.createElement('div');
            ran_div2_div2.setAttribute("id", "ran_div2_div2");

            ran_div2_div2.innerHTML = "Add";



            ran_div2.append(ran_div2_div1, ran_div2_div2);
            ran_div1.append(ran_img, ran_p1, ran_p2);

            ran_main.append(ran_div1, ran_div2);

            ran_meal.append(ran_main);

            ran_main.addEventListener("click", () => {

                localStorage.setItem("mealId", _id);
                window.location.href = "mealpage.html";
            });

        }

        i++;

    })

})




document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})

var cart = JSON.parse(localStorage.getItem("CartData")) || []
function sideCart({ strMeal, strMealThumb }) {


    let cartData = {
        strMeal,
        strMealThumb,
        price: 249
    }
    cart.push(cartData)
    localStorage.setItem("CartData", JSON.stringify(cart));

    console.log(cartData)

}