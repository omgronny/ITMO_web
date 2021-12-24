alert("jhjkjhk");
var messageApi = Vue.resource('/login{/id}');

Vue.component('login-form', {

    props: ['messages'],
    data: function () {
        return {
            login: '',
            password: '',
            id: ''
        }
    },

    template:
        '<form method="post" action="@{/login}">' +
            '<p><b>Login:</b><input style="margin: 10px;" type="text" id="login" v-model="login" name="username" size="40" ></p>' +
            '<p><b>Password:</b><input type="text" style="margin: 10px;" id="password" v-model="password" name="password" size="40"></p>' +
            '<input style="background-color: orange; border-radius: 5px" id="subbutton" type="submit" value="Sign In" />' +
        '</form>',

    methods: {
    sbm: function () {

        let user = { login: document.getElementById("login").value, password: document.getElementById("password").value };

        messageApi.save({}, user).then(
            result =>
                result.json().then(data => {


                })


        )

    }

},




});
var app = new Vue({
    el: '#reg',
    template: '<login-form :messages="messages" />',
    data: {
        messages: []
    }
});