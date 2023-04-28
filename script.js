const menuBody = document.querySelector(".menu__body");
const burgerButton = document.querySelector(".menu__button");
const spoilers = document.querySelectorAll(".spoiler__title");
const input = document.querySelector(".form__input");
const form = document.querySelector(".form");

burgerButton?.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burgerButton.classList.toggle("_active");
    menuBody.classList.toggle("_active");
});

spoilers?.forEach((el) => {
    el.addEventListener("click", () => {
        const content = el.nextElementSibling;

        if (content && content.style.maxHeight) {
            document.querySelectorAll(".spoiler__content").forEach((el) => {
                el.style.maxHeight = null;
            });
        } else {
            document.querySelectorAll(".spoiler__content").forEach((el) => {
                el.style.maxHeight = null;
            });
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


input?.addEventListener("blur", (event) => {
    const value = event.target.value;

    if (!emailValidator(value) && value.length) {
        input.classList.add("_error");
    } else {
        input.classList.remove("_error");
    }
});

input?.addEventListener("focus", (value) => {
    input.classList.remove("_error");
});


form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.target.firstElementChild.value;

    if (emailValidator(value)) {
        console.log("submit");
        form.submit();
        event.preventDefault();

    }
});


const emailValidator = (value) => {
    const EMAIL_REGEXP = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return EMAIL_REGEXP.test(value);
};
