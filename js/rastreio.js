function rastreio() {
    let layoutrastreio = mySidebar.cells('rastreio').attachLayout({
        pattern: "2E",
        offsets: {
            top: 5,
            right: 10,
            bottom: 5,
            left: 10
        },

        cells: [
            {
                id: "a",
                text: "Novo Cadastro",
                header: false,

            },
            {
                id: "b",
                header: true,
                text: "Chamados Registrados",
                height: 280,
                fix_size: [true, null],
            },
        ]
    });
}