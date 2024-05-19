let htmlCode = document.querySelector('#html-code');
let cssCode = document.querySelector('#css-code');
let jsCode = document.querySelector('#js-code');
let output = document.querySelector('#output');

function run() {
    localStorage.setItem('htmlCode', htmlCode.value);
    localStorage.setItem('cssCode',  cssCode.value);
    localStorage.setItem('jsCode', jsCode.value);
    localStorage.setItem('output', output.value);

    output.contentDocument.body.innerHTML = `${localStorage.getItem('htmlCode')}`;
    output.contentDocument.head.innerHTML = `<style>${localStorage.getItem('cssCode')}</style>`;
    output.contentWindow.eval(localStorage.getItem('jsCode'));
}

htmlCode.addEventListener('keyup', ()=> {
    run()
});

cssCode.addEventListener('keyup', ()=> {
    run()
});
jsCode.addEventListener('keyup', ()=> {
    run()
});

htmlCode.value = localStorage.getItem('htmlCode');
cssCode.value = localStorage.getItem('cssCode');
jsCode.value = localStorage.getItem('jsCode');


output.contentDocument.body.innerHTML = `${localStorage.getItem('htmlCode')}`;
output.contentDocument.head.innerHTML = `<style>${localStorage.getItem('cssCode')}</style>`;
output.contentWindow.eval(localStorage.getItem('jsCode'));