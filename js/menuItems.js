const menuItems = {

    menu: {

        categories: {

            "Documentos": [
                {
                    name: "GeoDocumentos",
                    icon: "bi bi-folder2",           
                    toast: {
        
                        description: "Acesse e gerencie documentos do sistema.",
                        gif: "https://cdn.lordicon.com/kpsnbsyj.json"
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
        
                        description: "Acesse e gerencie certidões e relatórios do sistema.",
                        gif: "https://cdn.lordicon.com/biwxmlnf.json"
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
        
                        description: "Acesse e gerencie as consultas de viabiliade do sistema.",
                        gif: "https://cdn.lordicon.com/aslgozpd.json"
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
        
                        description: "Acesse e gerencie as estatisticas do sistema.",
                        gif: "https://cdn.lordicon.com/osqwjgzg.json"
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
        
                        description: "Visualize as informações territoríais do sistema.",
                        gif: "https://cdn.lordicon.com/xulniijg.json"
                    },
                    subList: null
                },

                {
    
                    name: "Edição Tabular",
                    icon: "bi bi-pencil-square",     
                    toast: {
        
                        description: "Gerencie as tabelas presentess no sistema.",
                        gif: "https://cdn.lordicon.com/oclwxpmm.json"
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
        
                        description: "Acesse e manipule os cadastros.",
                        gif: "https://cdn.lordicon.com/auvicynv.json"
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
        
                        description: "Acesse e gerencie as ordens de serviço do sistema.",
                        gif: "https://cdn.lordicon.com/vmibgbhr.json"
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
        
                        description: "Acesse e gerencie as ferramentas de mapa do sistema.",
                        gif: "https://cdn.lordicon.com/ofqzcdla.json"
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
        
                        description: "Acesse e gerencie as ferramentas de dispositivos móveis.",
                        gif: "https://cdn.lordicon.com/sukojcry.json"
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
        
                        description: "Acesse e gerencie as ferramentas de mapa do sistema.",
                        gif: "https://cdn.lordicon.com/rqskgpey.json"
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
        
                        description: "Registre chamadas, obtenha os relatórios e cheque os ramais.",
                        gif: "https://cdn.lordicon.com/cnyeuzxc.json"
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
        
                        description: "Clique e faça download do manual de instruções do sistema.",
                        gif: "https://cdn.lordicon.com/stxtcyyo.json"
                    },
                    subList: null
                },

                {
    
                    name: "Salvar estado da sessão",
                    icon: "bi bi-save",         
                    toast: {
        
                        description: "Salve o estado atual da sessão, para facilitar os próximos acessos",
                        gif: "https://cdn.lordicon.com/sihdhmit.json"
                    },
                    subList: null
                },

                {
        
                    name: "Configurações",
                    icon: "bi bi-gear",           
                    toast: {
        
                        description: "Acesse as configurações do sistema.",
                        gif: "https://cdn.lordicon.com/ryyjawhw.json"
                    },
                    subList: null
                }
            ]
        }
    },

    camadas: {

        categories: {

            "Configurações": [

                {

                    name: "Gerenciar camadas",
                    icon: "bi bi-layers",
                    toast: {
        
                        description: "Clique e faça download do manual de instruções do sistema.",
                        gif: "https://cdn.lordicon.com/stxtcyyo.json"
                    },
                    subList: null
                }
            ]

        }
    },

    favoritos: {

    }
}

export default menuItems;