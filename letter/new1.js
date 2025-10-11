function showYesResponse() {
document.getElementById('title').classList.add('hidden');
document.getElementById('intro').classList.add('hidden');
document.getElementById('question').classList.add('hidden');
document.getElementById('buttons').classList.add('hidden');
            
            
document.getElementById('yesResponse').style.display = 'block';
            
            
document.body.style.background = 'linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #e91e63 100%)';
document.getElementById('container').style.background = 'rgba(255, 255, 255, 0.95)';
document.getElementById('container').style.animation = 'none';
document.getElementById('container').style.transform = 'scale(1.1)';
            
            
const hearts = document.querySelectorAll('.floating-heart');
hearts.forEach(heart => {
    heart.style.opacity = '1';
    heart.style.animationPlayState = 'running';
});

}function showNoResponse() {
           
document.getElementById('title').classList.add('hidden');
document.getElementById('intro').classList.add('hidden');
document.getElementById('question').classList.add('hidden');
document.getElementById('buttons').classList.add('hidden');
            
            
document.getElementById('noResponse').style.display = 'block';
            
            
document.body.classList.add('sad-mode');
document.getElementById('container').classList.add('sad-container');
document.getElementById('container').style.animation = 'slowPulse 3s ease-in-out infinite';
document.getElementById('container').style.transform = 'scale(1)';
            
            
const petals = document.querySelectorAll('.falling-petal');
petals.forEach(petal => {
    petal.style.opacity = '1';
    petal.style.animationPlayState = 'running';
});

}

function resetToQuestion() {
            
document.getElementById('noResponse').style.display = 'none';
            
            
document.getElementById('title').classList.remove('hidden');
document.getElementById('intro').classList.remove('hidden');
document.getElementById('question').classList.remove('hidden');
document.getElementById('buttons').classList.remove('hidden');
            
            
document.body.classList.remove('sad-mode');
document.getElementById('container').classList.remove('sad-container');
document.getElementById('container').style.background = 'rgba(255, 255, 255, 0.9)';
document.getElementById('container').style.animation = 'pulse 2s ease-in-out infinite';
document.getElementById('container').style.transform = 'scale(1)';
            
const petals = document.querySelectorAll('.falling-petal');
petals.forEach(petal => {
    petal.style.opacity = '0';
    petal.style.animationPlayState = 'paused';
});


}
    