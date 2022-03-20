export default function initAddClass() {
    const buttonNotes = document.querySelectorAll('.button-notes');
    buttonNotes.forEach((button) => {
        function addClass() {
            buttonNotes.forEach((item) => {
                item.classList.remove('ativo');
            })
            button.classList.add('ativo');
        }
        button.addEventListener('click',addClass);
    })
}