const app = Vue.createApp({
    data() {
        return  {
            firstName: 'Dhanesh',
            lastName: 'Gopalan',
            email: 'dhaneshg@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Gimisha'
            this.lastName = 'Gopalan'
            this.email = 'gimishag@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
    
})

app.mount('#app')