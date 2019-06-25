Vue.component('input-password', {
  template: '<span>' +
  ' <div class="input-group">'+
  '<input class="form-control" placeholder="Mot de passe *"type="password" v-show="!visible" v-model="password" name="password">' +
  '<input class="form-control" placeholder="Mot de passe *"type="text" v-model="password" v-show="visible" >' +
  '<div class="input-group-append"><span class="input-group-text" @click="set_visible()" id="inputGroupPrepend2">VOIR</span></div></div>'+

  // '<button ><i data-feather="circle"></i></button>' +
  '</span>',
  data: function(){
    return{
      password:'',
      visible:false
    }
  },
  methods:{
    set_visible: function(){
      this.visible = !this.visible;
    }
  }
})
var app = new Vue({
  el: '#app-content'
})



var Profil = Vue.extend({
  template: '<p>{{prenom}} {{nom}} alias {{alias}}</p>',
  data: function () {
    return {
      prenom: 'Antoine',
      nom: 'Miloux',
      alias: 'Développeur web'
    }
  }
})
// crée une instance de Profil et la monte sur un élément
new Profil().$mount('#point-de-montage')
