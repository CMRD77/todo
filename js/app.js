const app = new Vue({
    
    el: "#app",
    data:{
        titulo: "Cosas por hacer",
        tareas:[],
        nuevaTarea: ""
    },
    methods:{
        agregarTarea: function(){
            //console.log("Se dió click.", this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.tareas)
            this.nuevaTarea ="";
        },
        editarTarea: function(index){
            this.tareas[index].estado=true;
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
        }
    }

});