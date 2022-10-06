Vue.createApp({
    data() {
        return {
            text: null,
            numberOfTimes: null,
            message: ""
        }
    },
    methods: {
        Repeater(text, numberOfTimes){

            if(this.numberOfTimes <= 0){
                throw new ArgumentException("Number of times can't be less than 1")
            }
            for(let i = 0; i < this.numberOfTimes; i++){
                this.message += this.text
                
            }
        }
    }
}).mount("#app")