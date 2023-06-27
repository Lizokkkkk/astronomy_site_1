const header = new URL(document.location).searchParams,
  planet_img = document.getElementById("planet_img"),
  planet_name = document.getElementById("planet_name"),
  info = document.getElementById("planet_info"),
  sign_planet = document.getElementById("sign_planet"),
  add_info = document.getElementById("add_info");

fetch("/static/json/planets.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(line => {
        if (line.sign == header.get("sign")) {
            planet_img.src = `${line.img}`;
            planet_name.innerHTML = `${line.planet}`;
            info.innerHTML = `${line.info}`;
            sign_planet.innerHTML = `${line.influence}`;
            add_info.innerHTML = `${line.quality}`;
        }
    })
  });