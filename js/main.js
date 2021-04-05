document.querySelector("button").addEventListener("click", getRapName);

async function getRapName() {
  const rapName = document.querySelector("input").value;
  try {
    const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`);
    const data = await res.json();
    console.log(data);
    document.querySelector(
      "#result"
    ).innerHTML = `<h3>Stage Name: <span class="stage-name"> ${rapName}</span></h3>
    <h3>Birth Name:<span class="birth-name"> ${data.birthname}</span></h3>`;
  } catch (err) {
    console.log(error.message);
  }
}
