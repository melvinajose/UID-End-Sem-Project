function myFunction() {
 
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function handleClick() {
    btn.textContent = 'This is how replacement works';
});
}