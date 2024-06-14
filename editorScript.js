const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');
const preview = document.getElementById('preview');

htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);

let storage = JSON.parse(localStorage.getItem('CodeStorage'));

if (!storage) {
  storage = {
    html: '\n\n',
    css: '\n\n',
    js: '\n\n'
  };
}

// populate inputs/textboxes
htmlEditor.value = storage.html;
cssEditor.value = storage.css;
jsEditor.value = storage.js;

const combinedCode = `${storage.html}<style>${storage.css}</style><script>${storage.js}</script>`;
preview.srcdoc = combinedCode;

function updatePreview() {
  const html = htmlEditor.value;
  const cssRaw = cssEditor.value;
  const jsRaw = jsEditor.value;

  // storage
  let storage = JSON.parse(localStorage.getItem('CodeStorage'));
  if (!storage) {
    storage = {
      html: '\n\n',
      css: '\n\n',
      js: '\n\n'
    };
  }

  storage.html = html;
  storage.css = cssRaw;
  storage.js = jsRaw;

  localStorage.setItem('CodeStorage', JSON.stringify(storage));

  const combinedCode = `${storage.html}<style>${storage.css}</style><script>${storage.js}</script>`;

  preview.srcdoc = combinedCode;
}