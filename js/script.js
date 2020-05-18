'use strict';

var signupBtn = document.querySelector('[data-element=main-signupbtn]');
var closeBtn = document.querySelector('[data-element=close]');
var cancelBtn = document.querySelector('[data-element=cancelbtn]')
var modal = document.querySelector('[data-element=main-modal]');
var modalContent = document.querySelector('[data-element=modal-content]');

const PersonalBlog = (function() {

    const signUpModal = () => {
        function openModal() {
            modal.style.display = 'block';
            modalContent.style.display = 'block';
        }

        function closeModal() {
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