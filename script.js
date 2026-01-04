function showIntake() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("intake").classList.remove("hidden");
}

function analyze() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (!name || !age || !gender) {
    alert("Please fill all required fields");
    return;
  }

  document.getElementById("intake").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
}

function goBack() {
  document.getElementById("intake").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function restart() {
  document.getElementById("results").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("symptoms").value = "";
}
