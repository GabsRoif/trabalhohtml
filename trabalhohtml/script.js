document.addEventListener('DOMContentLoaded', () => {
    fetch('php/fetch_news.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('esports-news').innerHTML = data.esports;
            document.getElementById('descontos-news').innerHTML = data.descontos;
            document.getElementById('trailers-news').innerHTML = data.trailers;
        })
        .catch(error => console.error('Error fetching news:', error));
});
