// 

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const image = document.getElementById("image")
const lists = document.getElementById("lists")

btn.addEventListener("click", () => {
    const data = input.value;
   image.src = `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${data}`
    
   const insertData = ` <li class="list">
                <img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${data}" alt="image">
                <p class="para">${data}</p>
                <div id="cancleBtn">╳</div>
            </li>`
    lists.insertAdjacentHTML("beforeend", insertData)
})