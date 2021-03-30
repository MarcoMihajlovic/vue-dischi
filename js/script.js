var app = new Vue ({
    el: "#root",
    
    data: {
        albums: [],
        types: [],
        filterGenre:"all"

    },

    methods: {
        getAlbums: function() {
            if(this.filterGenre == 'all') {
                return this.albums;
            }
                return this.albums.filter(element => element.genre == this.filterGenre)
        }
    },

    created () {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((request) => {
                    request.data.response.sort((a, b) => (a.year > b.year) ? 1 : -1);
                    request.data.response.forEach(element => {
                        this.albums.push(element)
                        if(!this.types.includes(element.genre)) {
                            this.types.push(element.genre);
                        };
                    })
                
            
            });
            console.log(this.albums);
            Vue.config.devtools = true;
    }
})