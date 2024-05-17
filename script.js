const form = document.forms.namedItem('add');
const inputs = document.querySelectorAll('input')

const patterns = {
    name: /^[a-z ,.'-]+$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
};

inputs.forEach((inp) => {
    inp.onkeyup = () => {
        if (!patterns[inp.name].test(inp.value)) {
            inp.classList.add('error');
        } else {
            inp.classList.remove('error');
        }
    };
});

