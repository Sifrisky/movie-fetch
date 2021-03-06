var app = new Vue({
    el: "#app",
    data() {
      return {
          query: null,
          results: null,
          apikey: '67b2bb72'
      }
    },
    created() {
      this.getMovies();
    },
    methods: {
      getMovies() {
        axios.get(`http://www.omdbapi.com/?s=${ this.query }&apikey=${ this.apikey }`)
          .then(response => {
            console.log(response.data.Search)
  
            results = response.data.Search
  
            let html = '';
  
            results.forEach(result => {
              html += `
                <div class="row">
                  <div class="col-lg-12 col-sm-12 col-md-6" movies>
                  <div class="card style="width: 18rem;">
                    <img src="${ result.Poster }" class="card-image-top img-fluid">
                    <div class="card-body">
                      <h4 class="card-title">${result.Title }</h4>
                      <p class="card-text">Year: ${ result.Year }</p>
                    </div>
                  </div>
                  </div>
                </div>
              `
            });
  
            document.getElementById('movies').innerHTML = html;
  
          })
      }
    }
  })

