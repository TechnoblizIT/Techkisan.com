class Endpoints {
   
    constructor(){
         this.BASE_URL="http://localhost:8080"
        this.CONTACT_US_URI=`${this.BASE_URL}/contactus`
        this.SIGNUP_URI=`${this.BASE_URL}/user/register`
    }

}

export default Endpoints;