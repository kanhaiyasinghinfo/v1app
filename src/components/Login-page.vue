<template>
<div class="container">
<div class="row">
<div class="col-lg-5 col-lg-offset-4 login_midl">
<span>{{statusMessage}}</span>
<span v-if="thisSubmit">{{msg}}</span>
<button v-if="thisSubmit" v-on:click="back">Go back</button>
<form v-on:submit="validateThis" method="post" novalidate="true" v-if="!thisSubmit"><fieldset>
<legend>Login</legend>
<table class="table-bordered">
<tr>
    <th>
    <div class="input text">
    <label for="username">Username *</label>
    <input type="text" name="username" v-validate="'required|email'" v-model="username" placeholder="example@gmail.com"/>
    <span class="errormsg" v-if="errors.has('username')">{{errors.first('username')}}</span>
    </div>
    </th>
    </tr>
    <tr>
        <th>
            <div class="input password">
                <label for="password">Password *</label>
                <input type="password" name="password" id="password" v-validate="'required|alpha_num|min:5|max:10'" v-model="password" placeholder="password"/>
                <span class="errormsg" v-if="errors.has('password')">{{errors.first('password')}}</span>
                </div>
                </th>
                </tr>
<tr><td><button type="submit" disabled="submit">login</button></td></tr>
</table>
</fieldset>
</form></div>
</div>

</div>
</template>
<script>
export default{
    name: 'SignIn',
    created: function(){
    this.statusMessage= "";
    console.log(this.statusMessage);
    },
    beforeCreate: function(){
    this.statusMessage= "Loading...";
    console.log(this.statusMessage);
    },
    data() {
   return {
       heading: "Sign In",
       username: '',
       password: '',
       thisSubmit: false,
       submit: false,
       msg: '',
       statusMessage: ''
      }
    },
    methods:{
        back: function(e){
            this.validateThis(e)
        }

    }
}
</script>
<style scoped>
.errormsg {
  display:block;
  color: #f57f6c;
  font-size: 12px;
}
</style>