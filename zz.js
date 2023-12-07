let slides = document.querySelectorAll('.slidde-container');
let index = 0 

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Função para iniciar a animação quando o elemento estiver visível
function startAnimationIfVisible(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var element = entry.target;
            element.Counter = 0;
            var targetValue = parseInt(element.textContent);

            var duration = 2000;
            var startTime;
            function updateValue(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = timestamp - startTime;

                element.Counter = Math.ceil(progress / duration * targetValue);

                if (progress < duration) {
                    requestAnimationFrame(updateValue);
                } else {
                    element.Counter = targetValue;
                }

                element.textContent = element.Counter;
            }

            requestAnimationFrame(updateValue);
            observer.unobserve(element); // Interrompe a observação após iniciar a animação
        }
    });
}

// Ouvinte de evento para verificar quando a seção é visível
var observer = new IntersectionObserver(startAnimationIfVisible, { threshold: 0.5 });

// Adiciona os elementos a serem observados
var elements = document.querySelectorAll('.numero');
elements.forEach(function(element) {
    observer.observe(element);
});

