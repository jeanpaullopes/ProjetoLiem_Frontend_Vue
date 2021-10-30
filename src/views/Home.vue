<template>
  <div>
    <div class="hero-wrapper">
            <section class="hero hero-intro is-large smt-in" style="background-image:url(back1.jpg);">
              <div class="hero-body">
                <div class="container">
                  <div class="columns">
                    <div class="column has-text-centered">
                      <h1 class="title">
                        LIGAMOS EMPRESAS E MIGRANTES
                      </h1>
                      <div class="column is-desktop column-buttons">
                        <router-link to="/newEmpresa" type="button" class="button is-primary is-large is-outlined button-item">
                          Cadastrar empresa
                        </router-link> 
                        <router-link to="/newMigrante" type="button"
                          class="button is-primary is-large is-outlined button-item">
                          Cadastrar migrante
                        </router-link></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="quem-somos" class="section about">
            <div class="container">
              <h2 class="title has-text-centered is-family-secondary is-2">Quem somos</h2>
              <div class="columns">
                <div class="description column is-12">
                  <p class="subtitle is-family-secondary"><strong>
                      A LIEM: ligando empresas e migrantes é uma plataforma digital que conecta migrantes
                      em busca de uma oportunidade de trabalho e empresas com vagas de emprego.
                    </strong></p>
                  <p class="subtitle is-family-secondary">
                    O projeto surgiu dentro de uma iniciativa mais ampla de assessoria a imigrantes e refugiados do
                    Centro Universitário Ritter dos Reis: o NAARI (Núcleo de Apoio e Assessoria a Refugiados e
                    Imigrantes).
                    O NAARI atua na integração de refugiados e imigrantes na comunidade através de apoio operacional,
                    jurídico e oficinas voltadas para capacitação ao mercado de trabalho.
                    Em 2018 surgiu também o CHEMEN: empoderando migrantes, um projeto de extensão voltado
                    especificamente para imigrantes haitianos.
                  </p>
                  <p class="subtitle is-family-secondary">
                    Através dos atendimentos realizados junto aos migrantes, ficou claro que uma das grandes
                    dificuldades enfrentadas por eles para sua plena integração era justamente a inserção no mercado de
                    trabalho.
                    Surge, então, o LIEM que objetiva estimular a empregabilidade de migrantes na cidade de Porto Alegre
                    e região.
                  </p>
                  <p class="subtitle is-family-secondary"><u>
                      O LIEM não é uma empresa e não tem fins lucrativos.
                      Todo o trabalho é feito por professores, alunos ou parceiros que trabalham voluntariamente.
                    </u></p>
                </div>
              </div>
              <div class="mvv columns is-multiline has-text-centered">
                <div class="column is-3 mvv-item">
                  <figure class="image is-128x128 is-inline-block"><img src="https://via.placeholder.com/450"
                      class="is-rounded"></figure>
                  <h2 class="title is-6 is-family-roboto has-text-left">Prof. Marina de almeida rosa</h2>
                </div>
                <div class="column is-3 mvv-item">
                  <figure class="image is-128x128 is-inline-block"><img src="https://via.placeholder.com/450"
                      class="is-rounded"></figure>
                  <h2 class="title is-6 is-family-roboto has-text-left">Prof. Fernand Barth Barasuol</h2>
                </div>
                <div class="column is-3 mvv-item">
                  <figure class="image is-128x128 is-inline-block"><img src="https://via.placeholder.com/450"
                      class="is-rounded"></figure>
                  <h2 class="title is-6 is-family-roboto has-text-left">Prof. Rodrigo Heldt Silveira</h2>
                </div>
                <div class="column is-3 mvv-item">
                  <figure class="image is-128x128 is-inline-block"><img src="https://via.placeholder.com/450"
                      class="is-rounded"></figure>
                  <h2 class="title is-6 is-family-roboto has-text-left">Prof. Marina de almeida rosa</h2>
                </div>
              </div>
            </div>
          </section>
          <section id="o-que-fazemos" class="section whatwedo has-background-primary">
            <div class="columns-container">
              <h2 class="title has-text-centered is-family-secondary is-2">Como Funciona</h2>
              <div class="columns">
                <div class="column left-column" style="background-image:url(empresa.jpg);">
                  <h2 class="is-family-roboto is-2 column-title">Empresas</h2>
                  <ul>
                    <li class="column-list-item">1. Fazer o cadastro da empresa.</li>
                    <li class="column-list-item">2. Depois que a empresa é aprovada, ela pode publicar vagas através do
                      site e ver currículos.</li>
                    <li class="column-list-item">3. A empresa pode optar por selecionar currículos diretamente ou que a
                      equipe LIEM selecione de acordo com o perfil desejado.</li>
                    <li class="column-list-item">4. A empresa realiza as entrevistas com os candidatos selecionados.
                    </li>
                  </ul>
                </div>
                <div class="column right-column" style="background-image:url(back5.jpg);">
                  <h2 class="is-family-roboto is-2 column-title">Migrantes</h2>
                  <ul>
                    <li class="column-list-item">1. O migrante se cadastra no site.</li>
                    <li class="column-list-item">2. Após o cadastro ser aceito, o migrante pode cadastrar o currículo.
                    </li>
                    <li class="column-list-item">3. Quando uma empresa seleciona seu currículo, o migrante recebe um
                      aviso e deve confirmar interesse na vaga.</li>
                    <li class="column-list-item">4. A empresa envia o horário da entrevista à qual ele deve comparecer.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="parceiros" class="section is-small clients">
            <div class="container has-text-centered"><span class="title is-spaced">Parceiros</span>
              <p class="subtitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
              <!---->
            </div>
          </section>
          <section id="contato" class="section is-small contact">
            <div class="container-fluid has-text-centered"><span class="title is-spaced">Contato</span>
              <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                  <div class="field">
                    <div class="control"><input type="text" placeholder="Nome" required="required" value=""
                        class="input is-medium"></div>
                  </div>
                  <div class="field">
                    <div class="control"><input type="email" placeholder="E-mail" required="required" value=""
                        class="input is-medium"></div>
                  </div>
                  <div class="field">
                    <div class="control"><input type="text" placeholder="Telefone" value="" class="input is-medium">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control"><textarea placeholder="Mensagem" class="textarea is-medium"></textarea></div>
                  </div>
                  <div class="field">
                    <div class="control has-text-centered"><a class="button is-primary is-large">Enviar</a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      img : 1
    }
  },
  mounted(){
    this.proxImg()
  },
  methods:{
    proxImg() {
      if (this.img == 7) {
        this.img = 0
      }
      this.img++
      setTimeout(()=> this.proxImg, 1000)
    }
  },
};
</script>
