

Vue.component('reg-list', {
    props: [],
    template: '<div>' +
        '<div v-if="message">' +
        'User exist!' +
        '</div>' +
        '<form action="/registration" method="post">' +
        '        <p><b>UserName : </b> <input type="text" name="username"/></p>' +
        '        <p style="margin-left: 10px"><b> Password:</b> <input type="password" name="psw"/> </p>' +
        '        <input style="background-color: orange; border-radius: 5px" id="subbutton" type="submit" value="Log In" />' +
        '</form>' +
        '<form style="float: right" action="/" method="get">' +
        '   <input style="background-color: orange; border-radius: 5px" id="regburron" type="submit" value="Back to sign in" />' +
        '</form>' +
        '</div>'

});


var app = new Vue({
    el: '#regform',
    template: '<reg-list />',
    data: {
        message: ''
    }
});