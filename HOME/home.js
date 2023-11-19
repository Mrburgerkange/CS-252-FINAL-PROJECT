document.addEventListener("DOMContentLoaded", function() {
  displayHome();
});

function displayHome() {
  const tips = [
    "Use '===' instead of '==' for a strict equality check.",
    "Always declare variables with 'let' or 'const' to avoid global scope pollution.",
    "Use 'map()', 'reduce()', and 'filter()' for array manipulation instead of traditional for loops.",
    "Utilize template literals for easier-to-read string concatenation.",
    "Use the 'Spread' and 'Rest' operators to work with arrays and objects in a more readable way."
  ];

  function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  }

  let homeContent = `
        <h2 class="home-title">Welcome to the JavaScript Learning Hub</h2>
        <p class="home-intro">
            Explore a variety of resources and quizzes to enhance your JavaScript skills.
            Whether you're a beginner or an experienced developer, there's something for everyone.
        </p>
        <div class="tip-container">
            <h3 class="tip-title">Random JavaScript Tip</h3>
            <p class="tip-text">${getRandomTip()}</p>
        </div>
    `;

  setContent(homeContent);
}

function setContent(content) {
  const contentElement = document.getElementById("content");
  if (contentElement) {
    contentElement.innerHTML = content;
  } else {
    console.error('Element with id "content" not found');
  }
}
