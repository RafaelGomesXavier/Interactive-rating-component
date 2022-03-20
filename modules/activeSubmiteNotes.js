export default function submiteNotes() {
    const image = document.querySelector('.js-handle-submit img');
    const div = document.querySelector('.js-handle-submit div');
    const buttonSubmit = document.querySelector('.js-handle-submit #button-submit');
    const buttonNotes = document.querySelectorAll('.button-notes');
    const sectContent = document.querySelector('.section-content');
    const sectNotes = document.querySelector('.section-notes');
    function validate() {

        
        buttonNotes.forEach((item) => {
            
            
            if(item.classList.contains('ativo')){
                image.setAttribute('src', './images/illustration-thank-you.svg')
                sectContent.insertAdjacentElement("afterbegin", sectNotes);
                
                
                
                
                
                sectContent.querySelector('h1').innerHTML = 'Thank you!';

                sectContent.querySelector('p').innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

                sectNotes.innerHTML = `<p>You selected ${item.innerHTML} out of 5</p>`



                buttonSubmit.remove();
                image.classList.add('voted');
                div.classList.add('voted');
                sectNotes.classList.add('voted');
                sectContent.classList.add('voted')
            }
        })
        


    }
    buttonSubmit.addEventListener('click', validate);

}