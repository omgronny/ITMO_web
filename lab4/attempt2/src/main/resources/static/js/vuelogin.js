Vue.component('login-list', {

    props: [],
    template: '<div>' +
        // '<div th:if="${param.error}">' +
        // 'Invalid username and password.' +
        // '</div>' +
        // '<form th:action="@{/login}" method="post">' +
        // '   <p><b>Login:</b><input style="margin: 10px;" type="text" name="username" size="40" ></p>' +
        // '   <p><b>Password:</b><input type="password" style="margin: 10px;" name="password" size="40"></p>' +
        // '   <input style="background-color: orange; border-radius: 5px" id="subbutton" type="submit" value="Sign In" />' +
        // '</form>' +
        // '<form style="float: right" action="/registration" method="get">' +
        // '   <input style="background-color: orange; border-radius: 5px" id="regburron" type="submit" value="Create new account" />' +
        // '</form>' +
        // '</div>'
        '<form action="/login" method="post">' +
        '   <p><b>Login:</b><input style="margin: 10px;" type="text" name="username" size="40" ></p>' +
        '   <p><b>Password:</b><input type="password" style="margin: 10px;" name="password" size="40"></p>' +
        '   <input style="background-color: orange; border-radius: 5px" id="subbutton" type="submit" value="Sign In" />' +
        '</form>' +
        '<form style="float: right" action="/registration" method="get">' +
        '   <input style="background-color: orange; border-radius: 5px" id="regburron" type="submit" value="Create new account" />' +
        '</form>' +
        '</div>'


});

var app = new Vue({
    el: '#loginform',
    template: '<login-list />',
    data: {
        messages: []
    }
});