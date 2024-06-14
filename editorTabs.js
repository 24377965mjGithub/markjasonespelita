// Get the textarea element
var textarea = $('.editor');

// Function to handle tab key press
textarea.on('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        // Insert tab character at the caret position
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // Insert tab character
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

        // Move the caret position forward
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

// Function to handle automatic indentation
textarea.on('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        var selectedText = this.value.substring(start, end);

        // Count preceding spaces of the current line
        var lineStart = this.value.lastIndexOf('\n', start - 1) + 1;
        var indent = '';
        for (var i = lineStart; i < start; i++) {
            if (this.value[i] === ' ') {
                indent += ' ';
            } else {
                break;
            }
        }

        // Insert newline with the same indentation
        this.value = this.value.substring(0, start) + '\n' + indent + this.value.substring(end);

        // Move the caret position forward and adjust selection
        this.selectionStart = this.selectionEnd = start + indent.length + 1;
    }
});

