'use strict';

// Why do you use 'var' here? And why live these variables outside the closure?
var signupBtn = document.querySelector('[data-element=main-signupbtn]');
var closeBtn = document.querySelector('[data-element=close]');
var cancelBtn = document.querySelector('[data-element=cancelbtn]')
var modal = document.querySelector('[data-element=main-modal]');
var modalContent = document.querySelector('[data-element=modal-content]');

const PersonalBlog = (function() {

    const signUpModal = () => {

        // Why do you put these functions within the signUpModal function?
        function openModal() {
            // It should be enough to only add display: block to the whole modal
            modal.style.display = 'block';

            // This line throws an error, modalContent is null
            modalContent.style.display = 'block';
        }

        function closeModal() {
            // What's with the modalContent?
            modal.style.display = 'none';
        }

        signupBtn.onclick = openModal;
        closeBtn.onclick = closeModal;
        cancelBtn.onclick = closeModal;
    }

    const init = function() {
        signUpModal();
    };

    return {
        init: init,
    };
})();

document.addEventListener('DOMContentLoaded', PersonalBlog.init);
