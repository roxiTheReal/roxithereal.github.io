document.querySelector('.image-new').addEventListener('click', function() {
    const imageUrl = this.src;
    window.open(imageUrl, '_blank');
});