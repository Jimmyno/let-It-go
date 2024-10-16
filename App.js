function showMeditations() {
  alert("Here are your guided meditations for today.");
}

function showCheckIn() {
  alert("How are you feeling today?");
}

function showTriggers() {
  alert("List of triggers to avoid today.");
}

// Funzione per aggiornare il progresso (esempio: 10% completato)
function updateProgress(percent) {
  const progressCircle = document.getElementById("progress");
  const totalLength = 220; // Circonferenza del cerchio
  const offset = totalLength - (totalLength * percent / 100);
  progressCircle.style.strokeDashoffset = offset;
}

// Esempio di utilizzo della funzione per aggiornare il progresso
updateProgress(10);
