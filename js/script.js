/** Global constants section */
const BUTTON_LIST = document.querySelectorAll('.rating-btn'),
      SUBMIT_BUTTON = document.querySelector('.submit-btn'),
      RATING_STATE = document.querySelector('.rating-state'),
      THANK_YOU_STATE = document.querySelector('.thank-you-state'),
      THANK_YOU_RATE = document.querySelector('.thank-you-rate');

/** Clear rating from local storage upon page load */
localStorage.removeItem('rating');


/** Functions section */
 
/**
 * This function deselects rating
 */
function removeRating(){
    BUTTON_LIST.forEach(button =>{
        if (button.innerText !== localStorage.getItem('rating')){
            button.classList.remove('active-rating-btn');
        }
    });
}

/**
 * This function selects rating
 * @param {string} event - This represents on which button did the user click happen
 */
function selectRating(event){
    let rating = event.target;
    rating.classList.add('active-rating-btn');
    localStorage.setItem('rating', rating.innerText);
    removeRating();
    validateRating();
}

/**
 * This functions ensures user selects a rating before it submits
 */
function validateRating(){
    if (localStorage.getItem('rating') !== null){
        SUBMIT_BUTTON.disabled = false;
        SUBMIT_BUTTON.classList.remove('disabled-btn');

    } else {
        SUBMIT_BUTTON.disabled = true;
        SUBMIT_BUTTON.classList.add('disabled-btn');
    }
}
validateRating();

/**
 * This function changes the page state and update rating
 */
function changeState(){
    RATING_STATE.classList.add('hide-rating-state');
    THANK_YOU_STATE.classList.add('show-thank-you-state');
    THANK_YOU_RATE.innerText = localStorage.getItem('rating');
}


/** Listeners section */

BUTTON_LIST.forEach(button =>{
    button.addEventListener('click', selectRating);
});

SUBMIT_BUTTON.addEventListener('click', changeState);
