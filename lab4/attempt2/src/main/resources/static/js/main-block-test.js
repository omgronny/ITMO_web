
var messageApi = Vue.resource('/message{/id}');

Vue.component('submit-form', {
   props: ['messages'],
   data: function () {
       return {
           x: '',
           y: '',
           r: '',
           result: '',
           id: '',
           authorName: ''
       }
   },
    template:
        '<div>' +
            '<p><b>X:</b><br><input class="main-form-elem" style="margin: 10px;" type="text" v-model="x" id="x" name="par_x" size="40"></p>' +
            '<p><b>Y:</b><br><input class="main-form-elem" style="margin: 10px;" type="text" v-model="y" id="y" name="par_y" size="40"></p>' +
            '<p><b>R:</b><br><input class="main-form-elem" style="margin: 10px;" onchange="f()" type="text" value="3" v-model="r" id="r" name="par_r" size="40"></p>' +
            '<input style="border-radius: 5px" class="back_orange-but" id="subbutton" type="button" value="Submit" @click="sbm" />' +
        '</div>',

    methods: {
       sbm: function () {

           if (!validator()) {
               return false;
           }

           this.x = document.getElementById("x").value;
           this.y = document.getElementById("y").value;
           this.r = document.getElementById("r").value;

           var message = { x: this.x, y: this.y, r: this.r };

           messageApi.save({}, message).then(
               result =>
                   result.json().then(data => {

                       //alert(data.value);
                       this.messages.push(data);

                       this.x = '';
                       this.y = '';

                   })


           )

       }
    }
});

Vue.component('messages-list', {
    props: ['messages'],
   template: '<div>' +
       '    <h2 class="head">' +
       '        Roman Glinskikh <numbers class="orange">P3212</numbers>. Variant <numbers class="orange">12042</numbers>' +
       '    </h2>' +
       '<div class="big-div">' +
       '<div class="class-form">' +
       '        <div id="pointsform">' +
       '        <submit-form :messages="messages" />' +
                '</div>' +
       '</div>' +

       '<div class="element">' +
       '        <canvas id="circle"></canvas>' +
       '</div>' +

        '</div>' +
       '<table>' +
       '    <tr><th colspan="4" width="70%" id="elem">Result</th><th>' +
       // '<form th:action="@{/result}" method="post">' +
       // '    <input type="submit" class="back_orange" value="Sign Out"/>' +
       // '</form>' +
       '<form action="/result" method="post">' +
       '    <input type="submit" class="back_orange" value="Sign Out"/>' +
       '</form>' +
       '</th></tr>' +
       '    <tr class="timer"><td>Author</td><td> X </td><td>Y</td><td>R</td><td>Result</td></tr>' +
       '<tr v-for="message in messages">' +
       '<td>{{message.authorName}}</td><td> {{message.x}} </td><td>{{message.y}}</td><td>{{message.r}}</td><td>{{message.result}}</td>' +
       '</tr>' +
       '</table>' +
       '</div>',

    created: function () {
        messageApi.get().then(result =>
            result.json().then( data =>
                data.forEach(message => this.messages.push(message))
        ))
    }
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages" />',
    data: {
        messages: []
    }
});