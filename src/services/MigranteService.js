//import apiClient from './ApiClient'
export default {
    buscaMigrante(id) {

        return {	
            id:	id,
            nome:	"Ana Maria",
            email:	"maria@gmail.com",
            telefone:	"(51) 9 9988 7766",
            identificacaoPassaporte:	"008542-77785",
            dataNascimento:	"19/07/1982",
            paisOrigem:	"Venezuela",
            logradouro:	"Rua João Manoel",
            numero:	"223",
            complemento:	"Casa",
            bairro:	"Sarandi",
            cep:	"90668-110",
            cidade:	"Porto Alegre",
            estado:	"Rio Grande do Sul",
            idiomas:[	
                "Espanhol",
                "Inglês",
                "Alemão",
                "Francês",
                "Português"],
            formacoes	:[
            {
            diploma:	"Tecnólogo em Análise e Desenvolvimento de sistemas",
            area:	"Tecnologia da Informação",
            descricao:	"Tecnologia da Informação",
            dataInicio:	"06/03/2017",
            dataFim:	"06/07/2017",
            duracao: "2 anos e meio"},
                
            {diploma:	"Bacharelado em Ciência da Computação",
            area:	"Tecnologia da Informação",
            descricao:	null,
            dataInicio:	"06/03/2017",
            dataFim:	"06/07/2022",
            duracao:	"5 anos e meio"}],
            experiencias:
            [	
            {descricao:	"Desenvolvimento de Software Java",
            dataInicio:	"01/01/2021",
            dataFim:	"30/06/2021",
            duracao:	"6 meses"},
            {
            descricao:	"Desenvolvimento de Software Java",
            dataInicio:	"01/01/2021",
            dataFim:	"30/06/2021",
            duracao:	"6 meses"},
            
            {descricao:	"Desenvolvimento de Software Java",
            dataInicio:	"01/01/2021",
            dataFim:	"30/06/2021",
            duracao:	"6 meses"}]
            }
        //return apiClient.get('/migrentes/'+id)
    }

}