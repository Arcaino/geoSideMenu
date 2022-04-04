const menuItems = {

    menu: {

        categories: {

            "Documentos": [
                {
                    name: "GeoDocumentos",
                    icon: "bi bi-folder2",           
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [

                        {
                            name: "Gerenciar",
                            subList: null
                        },
                        {
    
                            name: "Ler QRCode",
                            subList: null
                        },

                        {

                            name: "Enviar",
                            subList: null
                        }
                    ]
                },

                {
                    name: "Certidões e Relatórios",
                    icon: "bi bi-file-earmark-text",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Gerar Certidões",
                            subList: null
                        },

                        {

                            name: "Gerar Modelos de Certidões",
                            subList: null
                        },

                        {

                            name: "Gerar Certidões Diversas",
                            subList: null
                        }
                    ]
                },

                {
        
                    name: "Consulta de Viabilidade",
                    icon: "bi bi-card-checklist",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Autenticidade do Documento",
                            subList: null
                        },

                        {

                            name: "Consultar documentos",
                            subList: null
                        },

                        {

                            name: "Funcionamento",
                            subList: null
                        },

                        {

                            name: "Parcelamento do Solo",
                            subList: null
                        },
                        
                        {

                            name: "Licenciamento Obras e Edificações",
                            subList: null
                        }
                    ]
                }
            ],

            "Dados": [

                {
        
                    name: "Estatísticas",
                    icon: "bi bi-bar-chart",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Gráficos",
                            subList: null
                        },

                        {

                            name: "Integridade",
                            subList: null
                        }
                    ]
                },

                {
    
                    name: "Dashboards",
                    icon: "bi bi-grid-1x2",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: null
                },

                {
    
                    name: "Edição Tabular",
                    icon: "bi bi-pencil-square",     
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Campos",
                            subList: null
                        },

                        {

                            name: "Valores",
                            subList: null
                        }
                    ]
                },

                {
    
                    name: "Cadastros",
                    icon: "bi bi-file-earmark-plus",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Imobiliário",
                            subList: null
                        },

                        {

                            name: "Pessoa",
                            subList: null
                        },

                        {

                            name: "Zoneamento",
                            subList: [
                                
                                {

                                    name: "CNAE"
                                },

                                {

                                    name: "Usos"
                                },

                                {

                                    name: "Parâmetros"
                                },
                                
                                {

                                    name: "Vincular"
                                },

                                {

                                    name: "Desvincular"
                                }
                            ]
                        }
                    ]
                },

                {
        
                    name: "Ordens de Serviço",
                    icon: "bi bi-ui-checks",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Criar",
                            subList: null
                        },

                        {

                            name: "Gerenciar",
                            subList: null
                        }
                    ]
                },

                {

                    name: "Ferramentas de Mapa",
                    icon: "bi bi-map",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Temáticos",
                            subList: null
                        },

                        {

                            name: "Buffer",
                            subList: null
                        },

                        {

                            name: "Buffer com Raio",
                            subList: null
                        },

                        {

                            name: "Buffer Métrico",
                            subList: null
                        },

                        {

                            name: "Mapa de Calor",
                            subList: null
                        },

                        {

                            name: "Sobrepor mapas",
                            subList: null
                        },

                        {

                            name: "Seleção por gráfico",
                            subList: null
                        },

                        {

                            name: "Seleção por localização",
                            subList: null
                        },
                        
                        {

                            name: "Menu de inconsistências",
                            subList: [
                                
                                {

                                    name: "Inconsistências"
                                },

                                {

                                    name: "Histórico"
                                }
                            ]
                        }
                    ]
                }
            ],

            "Dispositivos Móveis" : [

                {
    
                    name: "Aplicativos Móveis",
                    icon: "bi bi-phone",           
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Aplicativos",
                            subList: null
                        },

                        {

                            name: "Usuários",
                            subList: null
                        },

                        {

                            name: "Dados",
                            subList: null
                        },

                        {

                            name: "GeoApp",
                            subList: null
                        }
                    ]
                }
            ],

            "Atendimento" : [

                {
    
                    name: "Presencial",
                    icon: "bi bi-telephone",       
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Realizar",
                            subList: null
                        },

                        {

                            name: "Lateral",
                            subList: null
                        },

                        {

                            name: "Relatório",
                            subList: null
                        }
                    ]
                },

                {
    
                    name: "GeoFone",
                    icon: "bi bi-headset",        
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: [
        
                        {

                            name: "Nova chamada",
                            subList: null
                        },

                        {

                            name: "Relatório de chamadas",
                            subList: null
                        },

                        {

                            name: "Grupo de categorias",
                            subList: null
                        },

                        {

                            name: "Categorias",
                            subList: null
                        },

                        {

                            name: "Gravações",
                            subList: null
                        },

                        {

                            name: "Equipamentos",
                            subList: null
                        },

                        {

                            name: "Tokens",
                            subList: null
                        },

                        {

                            name: "Ramais",
                            subList: null
                        }
                    ]
                }
            ],

            "Outros": [

                {
    
                    name: "Manual de Instruções",
                    icon: "bi bi-book",          
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: null
                },

                {
    
                    name: "Salvar estado da sessão",
                    icon: "bi bi-save",         
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: null
                },

                {
        
                    name: "Configurações",
                    icon: "bi bi-gear",           
                    toast: {
        
                        name: "",
                        description: "",
                        gif: ""
                    },
                    subList: null
                }
            ]
        }
    },

    camadas: {

    },

    favoritos: {

    }
}

export default menuItems;