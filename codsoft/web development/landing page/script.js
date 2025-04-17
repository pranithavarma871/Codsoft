// Scroll to "Features" section when "Learn More" button is clicked
function scrollToFeatures() {
    const featuresSection = document.getElementById("features");
    window.scrollTo({
      top: featuresSection.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Scroll to Top Button functionality
  window.onscroll = function () {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Form Submit Handling (Just for Example)
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent!");
  });
  