document.getElementById("akan-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (!birthdate || !gender) {
      alert("Please enter a valid birthdate and select a gender.");
      return;
    }
  
    const date = new Date(birthdate);
    const dayIndex = date.getDay();
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const akanName = gender.value === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
  
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
  });
  