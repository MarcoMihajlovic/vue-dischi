var app = new Vue ({
    el: "#root",
    
    data: {
        albums: [],

    },

    created () {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((request) => {
                    request.data.response.forEach(element => this.albums.push(element))
                 this.albums.sort((a, b) => (a.year > b.year) ? 1 : -1)  
                })
                console.log(this.albums);
    }
})