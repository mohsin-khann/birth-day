document.addEventListener("DOMContentLoaded", () => {
    // Create confetti
    createConfetti()
  
    // Create floating hearts
    createHearts()
  
    // Create balloons
    createBalloons()
  
    // Add candle click event
    const candle = document.querySelector(".candle")
    candle.addEventListener("click", blowOutCandle)
  
    // Add animation to photos
    animatePhotos()
  
    // Initialize timeline animations
    initializeTimeline()
  
    // Initialize photo modal
    initializePhotoModal()
  
    // Add typing animation to title
    animateTitle()
  })
  
  // Function to create confetti
  function createConfetti() {
    const confettiContainer = document.querySelector(".confetti-container")
    const colors = ["#ff6b95", "#9c6bff", "#ffcc00", "#66d9ff", "#ff9eb5"]
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div")
      confetti.style.width = `${Math.random() * 10 + 5}px`
      confetti.style.height = `${Math.random() * 10 + 5}px`
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.position = "absolute"
      confetti.style.top = "-50px"
      confetti.style.left = `${Math.random() * 100}vw`
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"
      confetti.style.opacity = Math.random() + 0.5
  
      const animationDuration = Math.random() * 3 + 2
      confetti.style.animation = `fall ${animationDuration}s linear infinite`
      confetti.style.animationDelay = `${Math.random() * 5}s`
  
      // Add keyframes for falling animation
      const style = document.createElement("style")
      style.innerHTML = `
              @keyframes fall {
                  0% {
                      transform: translateY(-50px) rotate(0deg);
                  }
                  100% {
                      transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                  }
              }
          `
      document.head.appendChild(style)
  
      confettiContainer.appendChild(confetti)
    }
  }
  
  // Function to create floating hearts
  function createHearts() {
    const heartsContainer = document.querySelector(".hearts-container")
  
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div")
      heart.innerHTML = "❤️"
      heart.style.position = "absolute"
      heart.style.fontSize = `${Math.random() * 20 + 10}px`
      heart.style.left = `${Math.random() * 100}%`
      heart.style.bottom = "-20px"
      heart.style.opacity = "0"
      heart.style.animation = `heartFloat ${Math.random() * 5 + 5}s linear infinite`
      heart.style.animationDelay = `${Math.random() * 5}s`
  
      heartsContainer.appendChild(heart)
    }
  }
  
  // Function to create balloons
  function createBalloons() {
    const balloonContainer = document.querySelector(".balloon-container")
    const colors = ["#ff6b95", "#9c6bff", "#ffcc00", "#66d9ff", "#ff9eb5"]
  
    for (let i = 0; i < 15; i++) {
      const balloon = document.createElement("div")
      const size = Math.random() * 40 + 40
      const color = colors[Math.floor(Math.random() * colors.length)]
      const left = Math.random() * 100
      const delay = Math.random() * 15
      const duration = Math.random() * 10 + 15
      const rotation = Math.random() * 360 - 180
  
      balloon.style.position = "absolute"
      balloon.style.width = `${size}px`
      balloon.style.height = `${size * 1.2}px`
      balloon.style.borderRadius = "50% 50% 50% 50% / 40% 40% 60% 60%"
      balloon.style.background = color
      balloon.style.left = `${left}%`
      balloon.style.bottom = "-100px"
      balloon.style.animation = `balloonFloat ${duration}s linear infinite`
      balloon.style.animationDelay = `${delay}s`
      balloon.style.setProperty("--rotation", `${rotation}deg`)
  
      // Add string to balloon
      const string = document.createElement("div")
      string.style.position = "absolute"
      string.style.width = "1px"
      string.style.height = "100px"
      string.style.background = "rgba(255, 255, 255, 0.7)"
      string.style.bottom = "-100px"
      string.style.left = "50%"
      string.style.transformOrigin = "top"
  
      balloon.appendChild(string)
      balloonContainer.appendChild(balloon)
    }
  }
  
  // Function to blow out candle
  function blowOutCandle() {
    const flame = document.querySelector(".flame")
    flame.style.animation = "none"
    flame.style.opacity = "0"
  
    // Show birthday message
    setTimeout(() => {
      // Create a special message element
      const specialMessage = document.createElement("div")
      specialMessage.className = "special-message"
      specialMessage.innerHTML = `
              <div class="special-message-inner">
                  <h2>Your wish is my command!</h2>
                  <p>May all your dreams come true on this special day.</p>
                  <p>I love you more than words can say!</p>
              </div>
          `
      specialMessage.style.position = "fixed"
      specialMessage.style.top = "50%"
      specialMessage.style.left = "50%"
      specialMessage.style.transform = "translate(-50%, -50%)"
      specialMessage.style.background = "rgba(255, 255, 255, 0.95)"
      specialMessage.style.padding = "2rem"
      specialMessage.style.borderRadius = "15px"
      specialMessage.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)"
      specialMessage.style.zIndex = "1000"
      specialMessage.style.maxWidth = "80%"
      specialMessage.style.textAlign = "center"
      specialMessage.style.animation = "fadeIn 1s ease-out"
  
      // Add close button
      const closeButton = document.createElement("button")
      closeButton.textContent = "Close"
      closeButton.style.marginTop = "1rem"
      closeButton.style.padding = "0.5rem 1rem"
      closeButton.style.background = "#ff6b95"
      closeButton.style.color = "white"
      closeButton.style.border = "none"
      closeButton.style.borderRadius = "5px"
      closeButton.style.cursor = "pointer"
      closeButton.style.fontFamily = "Poppins, sans-serif"
  
      closeButton.addEventListener("click", () => {
        document.body.removeChild(specialMessage)
  
        // Add more hearts after closing
        createMoreHearts()
      })
  
      specialMessage.querySelector(".special-message-inner").appendChild(closeButton)
      document.body.appendChild(specialMessage)
    }, 500)
  }
  
  // Function to create more hearts after blowing candle
  function createMoreHearts() {
    const heartsContainer = document.querySelector(".hearts-container")
  
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const heart = document.createElement("div")
        heart.innerHTML = "❤️"
        heart.style.position = "absolute"
        heart.style.fontSize = `${Math.random() * 30 + 15}px`
        heart.style.left = `${Math.random() * 100}%`
        heart.style.bottom = "-20px"
        heart.style.opacity = "0"
        heart.style.animation = `heartFloat ${Math.random() * 3 + 3}s linear`
        heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 50%)`
  
        heartsContainer.appendChild(heart)
  
        // Remove heart after animation completes
        setTimeout(() => {
          heartsContainer.removeChild(heart)
        }, 6000)
      }, i * 100)
    }
  }
  
  // Function to animate photos
  function animatePhotos() {
    const photos = document.querySelectorAll(".photo")
  
    photos.forEach((photo, index) => {
      // Add staggered animation
      photo.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`
      photo.style.opacity = "0"
    })
  }
  
  // Function to initialize timeline
  function initializeTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item")
  
    // Check if timeline items are in viewport
    function checkTimelineItems() {
      timelineItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (itemPosition < screenPosition) {
          item.classList.add("visible")
        }
      })
    }
  
    // Initial check
    checkTimelineItems()
  
    // Check on scroll
    window.addEventListener("scroll", checkTimelineItems)
  }
  
  // Function to initialize photo modal
  function initializePhotoModal() {
    const modal = document.getElementById("photoModal")
    const modalImg = document.getElementById("modalImage")
    const modalDesc = document.getElementById("modalDescription")
    const closeModal = document.querySelector(".close-modal")
    const photos = document.querySelectorAll(".photo")
  
    // Open modal when clicking on a photo
    photos.forEach((photo) => {
      photo.addEventListener("click", function () {
        const imgSrc = this.querySelector("img").src
        const description = this.getAttribute("data-description")
  
        modalImg.src = imgSrc
        modalDesc.textContent = description
  
        modal.style.display = "block"
        setTimeout(() => {
          modal.classList.add("show")
        }, 10)
  
        // Prevent scrolling when modal is open
        document.body.style.overflow = "hidden"
      })
    })
  
    // Close modal when clicking on close button
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show")
      setTimeout(() => {
        modal.style.display = "none"
      }, 300)
  
      // Re-enable scrolling
      document.body.style.overflow = "auto"
    })
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show")
        setTimeout(() => {
          modal.style.display = "none"
        }, 300)
  
        // Re-enable scrolling
        document.body.style.overflow = "auto"
      }
    })
  }
  
  // Function to animate title with typing effect
  function animateTitle() {
    const title = document.querySelector(".title")
    const subtitle = document.querySelector(".subtitle")
    const originalTitle = title.textContent
    const originalSubtitle = subtitle.textContent
  
    title.textContent = ""
    subtitle.textContent = ""
  
    setTimeout(() => {
      typeWriter(title, originalTitle, 100, () => {
        setTimeout(() => {
          typeWriter(subtitle, originalSubtitle, 50)
        }, 500)
      })
    }, 1000)
  }
  
  // Function for typing animation
  function typeWriter(element, text, speed, callback) {
    let i = 0
    element.innerHTML = ""
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      } else if (callback) {
        callback()
      }
    }
  
    type()
  }
  
  // Add scroll animations for all sections
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".message-section, .gallery-section, .timeline-section")
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  })
  