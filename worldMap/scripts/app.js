const progressBar = document.querySelector('.progress-bar');
const dotItemOne = document.querySelector('.one');
const dotItemTwo = document.querySelector('.two');
const dotItemThree = document.querySelector('.three');
const dotItemFour = document.querySelector('.four');

let switchButton = document.querySelector('.switch-button');
console.log(switchButton)
switchButton.addEventListener('click' , () =>
{
    switchButton.classList.contains('active-button') ? switchButton.classList.remove('active-button') : switchButton.classList.add('active-button')
})

dotItemOne.addEventListener('click', () =>
{
    progressBar.style.height = '83%';
})
dotItemTwo.addEventListener('click', () =>
{
    progressBar.style.height = '61%';
})
dotItemThree.addEventListener('click', () =>
{
    progressBar.style.height = '38%';
})
dotItemFour.addEventListener('click', () =>
{
    progressBar.style.height = '13%';
})