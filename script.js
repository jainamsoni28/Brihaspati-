// const words = ["Protection", "Security", "Company", "Reliability", "Trust"];
// let index = 0;
// const typingText = document.getElementById("typing-text");

// function changeText() {
//     typingText.textContent = words[index];
//     index = (index + 1) % words.length;
// }

// setInterval(changeText, 2000);
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('#about');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

const words = ["Protection", "Security", "Company"];
        let wordIndex = 0;
        let letterIndex = 0;
        const textElement = document.querySelector('.text');
        
        function typeWord() {
            if (letterIndex < words[wordIndex].length) {
                // textElement.document.style.color="aqua"
                textElement.style.color="#0EC9AC"
                textElement.innerHTML += words[wordIndex][letterIndex];
                letterIndex++;
                setTimeout(typeWord, 100); // Typing speed
            } else {
                setTimeout(eraseWord, 2000); // Wait before erasing
            }
        }

        function eraseWord() {
            if (letterIndex > 0) {
                textElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
                letterIndex--;
                setTimeout(eraseWord, 50); // Erasing speed
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWord, 500); // Wait before typing next word
            }
        }

        typeWord();

        document.querySelectorAll('.nav-items a').forEach((anchor) => {
            anchor.addEventListener('click', function (event) {
              event.preventDefault();
          
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
          
              if (targetElement) {
                const yOffset = -80; // Adjust based on navbar height
                const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          
                window.scrollTo({
                  top: y,
                  behavior: 'smooth',
                });
              }
            });
          });
          