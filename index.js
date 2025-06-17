const poke_form = document.getElementById("poke-form");

poke_form.addEventListener("submit", async function(event){
    event.preventDefault();

    const name_id = document.getElementById("poke-name").value;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_id}`)
        const data = await response.json();

        const name = data.name;
        const img = data.sprites.front_default;

        const poke_name = document.createElement("h1");
        poke_name.textContent = name.charAt(0).toUpperCase() + name.slice(1);

        const poke_image = document.createElement("img");
        poke_image.setAttribute("src", img);
        poke_image.className = "w-100";

        const name_container = document.getElementById("name-container");
        const pic_container = document.getElementById("pic-container");

        name_container.appendChild(poke_name);
        pic_container.appendChild(poke_image);


    } catch (error){
        console.log("Error:", error);
        const error_message = document.createElement("h1");
        error_message.textContent = "Error: Pokemon not found!";

        error_message.className = "d-block";

        const name_container = document.getElementById("name-container");

        name_container.appendChild(error_message);
        
    }
});