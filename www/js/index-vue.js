

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo <p>in the foo</p></div>' }
const Bar = { template: '<div>At the bar with {{$route.params.punter}}</div>',
beforeRouteUpdate(to,from,next){
	if(console) console.log('to:',to);
	next();
} }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar/:punter', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
   // mode: 'history',
  routes:routes 
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data:{message:'Hey. not everything needs to be under a route'},
  methods:{
  	gotoFoo:function(event){
  		router.push('/foo');
  	}
  }
}).$mount('#app')