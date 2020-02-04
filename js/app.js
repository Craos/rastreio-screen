let mysidebar;

let app = function() {

    console.log('app carregado');

    mySidebar = new dhtmlXSideBar({

        parent:         document.body,
        template:       "icons",
        icons_path:     "icons/",
        single_cell:    false,
        bubble:         6,
        width:          40,
        header:         true,
        autohide:       false,
        offsets: {          // optional, offsets for fullscreen init
            top:    0,     // you can specify all four sides
            right:  0,     // or only the side where you want to have an offset
            bottom: 0,
            left:   0
        },
        items: [
            {
                id:         "dashboard",
                text:       "Dashboard",
                icon:       "../img/dashboard.png",
                selected:   true
            },
            {
                id:         "sep1",
                type:       "separator"
            },
            {
                id:         "chamados",
                text:       "Chamados",
                icon:       "../img/chamado.png",
                selected:   false
            },
            {
                id:         "sep1",
                type:       "separator"
            },
            {
                id:         "registros",
                text:       "Eventos",
                icon:       "../img/registro.png",
                selected:   false
            },
            {
                id:         "sep1",
                type:       "separator"
            },
            {
                id:         "fila",
                text:       "Registros",
                icon:       "../img/fila.png",
                selected:   false
            },
            {
                id:         "sep1",
                type:       "separator"
            },
            {
                id:         "controldesk",
                text:       "Controldesk",
                icon:       "../img/controldesk.png",
                selected:   false
            },
            // {
            //     id:         "sep1",
            //     type:       "separator"
            // },
            // {
            //     id:         "configuracoes",
            //     text:       " Configurações",
            //     icon:       "../img/configuracoes.png",
            //     selected:   false
            // },
        ]
    });

    mySidebar.attachEvent("onSelect", function(id, lastId){

        if (id === 'rastreio'){
            rastreio();

            console.log('chegou no if');
        }

    });

};