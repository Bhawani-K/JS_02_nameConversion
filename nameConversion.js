function convertText() {
    let inputVal = document.getElementById("text").value;
    document.getElementById("text").innerHTML = inputVal;

    let camelCase = str => {
        let string = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        return string;
    }
    const ele_1 = document.querySelector('#camel-case')
    ele_1.insertAdjacentHTML('beforeend', camelCase(inputVal));

    // pascal-Case
    let pascalCase = str => {
        let string = str.replace(/\w+/g, function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
        return string;
    }
    const ele_2 = document.querySelector('#pascal-case')
    ele_2.insertAdjacentHTML('beforeend', pascalCase(inputVal));

    // SnakeCase
    let snakeCase = str =>{
        let string = str.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('_');
        return string;
    }
    const ele_3 = document.querySelector('#snake-case')
    ele_3.insertAdjacentHTML('beforeend', snakeCase(inputVal));

    // ScreamingSnakeCase
    let screamingSnakeCase = str =>{
        let string = str.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toUpperCase()).join('_');
        return string;
    }
    const ele_4 = document.querySelector('#screaming-snake-case')
    ele_4.insertAdjacentHTML('beforeend', screamingSnakeCase(inputVal));

    // KebabCase
    let kebabCase = str => {
        let string = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
        return string;
    }
    let ele_5 = document.querySelector('#kebab-case');
    ele_5.insertAdjacentHTML('beforeend', kebabCase(inputVal));

    let screamingKebabCase = str => {
        let string = str.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
        return string;
    }
    let ele_6 = document.querySelector('#screaming-kebab-case');
    ele_6.insertAdjacentHTML('beforeend', screamingKebabCase(inputVal));
}
window.onload = ""