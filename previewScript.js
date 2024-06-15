// const htmlEditor = document.getElementById('html-editor');
// const cssEditor = document.getElementById('css-editor');
// const jsEditor = document.getElementById('js-editor');
// const headerEditor = document.getElementById('header-editor');
// const footerEditor = document.getElementById('footer-editor');
const preview = document.getElementById('preview');

// htmlEditor.addEventListener('input', updatePreview);
// cssEditor.addEventListener('input', updatePreview);
// jsEditor.addEventListener('input', updatePreview);
// headerEditor.addEventListener('input', updatePreview);
// footerEditor.addEventListener('input', updatePreview);

let storage = JSON.parse(localStorage.getItem('CodeStorage'));

if (!storage) {
storage = {
    html: '\n\n',
    css: '\n\n',
    js: '\n\n',
    header: '',
    footer: '',
};
}

// populate inputs/textboxes
// htmlEditor.value = storage.html;
// cssEditor.value = storage.css;
// jsEditor.value = storage.js;
// headerEditor.value = storage.header;
// footerEditor.value = storage.footer;

// code structure -----

const combinedCode = `
    ${storage.header}
    <style>${storage.css}</style>

    ${storage.html}

    ${storage.footer}
    <script>${storage.js}</script>
`;

// end code structure -----

preview.innerHTML = combinedCode;