function submitReview() {
    const reviewText = document.getElementById('review').value;
    if (reviewText.trim()) {
        const reviewContainer = document.getElementById('reviewsContainer');
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewContainer.appendChild(newReview);
        document.getElementById('reviewForm').reset();
    } else {
        alert('Пожалуйста, введите отзыв перед отправкой.');
    }
}
