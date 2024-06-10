document.getElementById('image-input').addEventListener('change', function(event) {
    const files = event.target.files;
    const previews = ['preview1', 'preview2', 'preview3'];

    for (let i = 0; i < previews.length; i++) {
        const previewElement = document.getElementById(previews[i]);
        if (files[i]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewElement.innerHTML = '<img src="' + e.target.result + '" alt="Image ' + (i + 1) + '">';
            };
            reader.readAsDataURL(files[i]);
        } else {
            previewElement.innerHTML = '<span>Image ' + (i + 1) + '</span>';
        }
    }
});
