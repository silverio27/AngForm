# AngForm

Treinamento de angular CloudData.com.vc

# Services
As apis que servem esse repositório estão [aqui]('https://github.com/silverio27/AngServices').

# Observação
Todo passo a passo abaixo será feita pela perspectiva de um código já existente relacionado ao módulo de **Pessoas**. Se precisar consulte o módulo para obter as referências. Não se preocupe com a implementação no momento da criação da estrutura.

## Criação da estrutura

# Passo 1 - Módulos

Crie um novo módulo **Animal**.

````CMD
ng g m Animal --routing
````
>O parâmetro **--routing** cria um arquivo para configurações de rota do nosso módulo.

<br>

# Passo 2 - Estrutura de pastas

Crie as pastas para separar as responsabilidade de nossos componentes e serviços.
* pages
* services
* components
* interfaces

````CMD
md animal/pages
md animal/services
md animal/components
md animal/interfaces
````

# Passo 3 - Interface animal

A interface é o nosso contrato com as respostas que vem do back-end.
A interface nos auxilia no processo de desenvolvimento facilitando o acesso as propriedade de um objeto com o intelisense.
As interface definem tipos para nossos objetos e no auxilia no desenvolvimento encontrando erros em tempo de escrita.

````CMD
ng g i animal/interfaces/Animal
````

# Passo 4 - Service animal

O serviços são responsáveis pela conexão com o seu back-end. De forma que não precisamos nos preocupar com regras de negócio nem infraestrutura.

Aqui no front-end nosso objetivo é fornecer interfaces amigáveis para o cliente final manipular os serviços já criados.

````CMD
ng g c animal/services/Animal --skipTests
````
>--skipTests <br>
>esse parâmetro é para que não seja criado um código de testes <br>
>junto ao serviço, pois ainda não testamos o front-end
</br>
</br>

# Passo 5 - Page - Cadastro de animais

As nossas páginas são gerenciadores de componentes e serviços.

Nela, vamos importar os formulários e componentes de visualização e manipulação dos serviços.

````CMD
ng g c animal/pages/CadastroDeAnimal --skipTests
````

# Passo 6 - Component - Card Animal

Agora vamos criar um componente que vai exibir os dados de um animal através de card, um visão alternativa as linhas de tabela.

Os componentes nesse cenário são apenas para exibir e enviar dados sobre um objeto.

````CMD
ng g c animal/components/CardAnimal --skipTests
````

# Passo 7 - Component - Form Animal

O componente de formulário é responsável por montar os dados necessários para criação de um novo animal.

````CMD
ng g c animal/components/FormAnimal --skipTests
````

# Passo 8 - Component - Table Animal

O componente de tabela manual é responsável por gerenciar a exibição de uma lista de animais.

````CMD
ng g c animal/components/TableAnimal --skipTests
````

Pronto! Você tem a estrutura necessária para fazer a implementação do serviço de gerenciamento de animal.


## Implementação

Agora observe como é a implementação do módulo pessoas e replique a mesma lógica no módulo animal, fazendo as modificações necessárias.

Comece configurando as rotas, interfaces e serviços necessariamente nessa ordem.

No final crie um menu para que seja possível alternar entre as duas implementações (pessoas, animal).

>lembre-se também do arquivo environment.ts que é onde está o apontamento para o endpoint no back-end.