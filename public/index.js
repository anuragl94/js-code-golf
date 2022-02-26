const rootEl = document.getElementById("root");

SCORES.forEach(function(matchScores, matchIndex) {
  const matchTitle = `Match ${String(matchIndex + 1).padStart(2, 0)}`;
  const scoreCardEl = document.createElement("div");
  scoreCardEl.innerHTML = `
    <div class="scorecard">
      <h3>${matchTitle}</h3>
      <table>
        <tbody>
          ${Object.entries(matchScores).sort((a, b) => {
            return a[1] - b[1];
          }).map(([user, score]) => `
            <tr>
              <td>${score} bytes</td>
              <td>${user}</td>
            </tr>
          `).join("") || `
            <tr>
              <td>This match has no submissions</td>
            </tr>
          `}
        </tbody>
      </table>
    </div>
  `;
  rootEl.appendChild(scoreCardEl);
})