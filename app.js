
        function search() {

            var search = document.getElementById('searchfield').value;
            var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + search;

            fetch(url)

                .then(data => data.json())
                .then(res => {
                    console.log(res)
                    var arrayOfGifs = res.data[0];
                    var giphyLink = arrayOfGifs.images.fixed_width.url;
                    document.querySelector('#gif').setAttribute('src', giphyLink);

                    var arrayOfGifs = res.data[1];
                    var giphyLink1 = arrayOfGifs.images.fixed_width.url;
                    document.querySelector('#gif1').setAttribute('src', giphyLink1);

                    var arrayOfGifs = res.data[2];
                    var giphyLink2 = arrayOfGifs.images.fixed_width.url;
                    document.querySelector('#gif2').setAttribute('src', giphyLink2);
                });

        }
