'use strict';

const PersonalBlog = (function() {
    const signupBtn = document.querySelector('[data-element=main-signupbtn]')
    const closeBtn = document.querySelector('[data-element=close]')
    const cancelBtn = document.querySelector('[data-element=cancelbtn]')
    const modal = document.querySelector('[data-element=main-modal]')

    const openModal = function() {
        modal.style.display = 'block'
    }

    const closeModal = function() {
        modal.style.display = 'none'
    }

    const buttonAction = function() {
        signupBtn.onclick = openModal
        closeBtn.onclick = closeModal
        cancelBtn.onclick = closeModal
    }

    const init = function() {
        buttonAction()
    }

    return {
        init: init,
    }

  })()

document.addEventListener('DOMContentLoaded', PersonalBlog.init)