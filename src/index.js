const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', e => {
        e.preventDefault();
        const searchInput = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${searchInput.value}`)
            .then(res => res.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;
            });
        inputForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', init);