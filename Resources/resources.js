document.addEventListener("DOMContentLoaded", function() {
    // Default to JavaScript resources on page load
    displayResources('javascript');
  });
  
  function displayResources(language) {
    let resourcesContent = `<h2>Learning Resources for ${language.charAt(0).toUpperCase() + language.slice(1)}</h2>`;
  
    // Define resources for each language
    const languageResources = {
      'javascript': [
        { name: "MDN JavaScript Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
        // Add JavaScript resources here
      ],
      'python': [
        // Add Python resources here
      ],
      'java': [
        // Add Java resources here
      ]
    };
  
    resourcesContent += "<ul class='resource-list'>";
    languageResources[language].forEach(resource => {
      resourcesContent += `<li><a href="${resource.link}" target="_blank">${resource.name}</a></li>`;
    });
    resourcesContent += "</ul>";
  
    document.getElementById("content").innerHTML = resourcesContent;
  }
  