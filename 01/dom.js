//console.dir(document);
// let input = document.querySelector('input[type="text"]');
// input.value = "hello";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

items = document.querySelector(".list-group-item:nth-child(1)");
odd = document.querySelectorAll("li:nth-child(odd)");
even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < 4; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
