# Sistema de Cálculo de Riscos SIM

Este é um sistema desenvolvido para automatizar o cálculo de riscos dentro do **Serviço de Inspeção Municipal (SIM)** de Franca-SP. O sistema permite que o usuário selecione diferentes variáveis relacionadas ao produto e suas características, como categoria, volume, área, e fatores de risco associados ao produto, calculando automaticamente o risco total (R).

## Funcionalidades

- **Cálculo de Risco Volume (RV)**: Com base na área de produção e o volume de produto informado.
- **Cálculo de Risco Produto (RP)**: De acordo com a categoria do produto selecionado em uma tabela específica de risco.
- **Cálculo de Risco Distribuição (RD)**: Determinado por checkboxes, que avaliam diferentes fatores de risco relacionados à distribuição do produto.
  - Se nenhuma checkbox estiver marcada, RD será 1.
  - Se apenas a terceira checkbox estiver marcada, RD será 2.
  - Se a primeira ou segunda checkbox estiverem marcadas, ou ambas, RD será 2.
  - Se a primeira e a terceira, ou a segunda e a terceira estiverem marcadas, RD será 3.
  - Se a quarta checkbox estiver marcada, RD será 4, independentemente das outras.
- **Botão Limpar**: Função para limpar todos os campos do formulário e redefinir as entradas, facilitando o uso contínuo do sistema.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página web.
- **CSS3**: Estilização da página, utilizando tons de branco, azul claro e cinza, compatível com dispositivos móveis.
- **JavaScript**: Lógica do sistema, incluindo os cálculos de risco e manipulação de eventos de formulário.

## Como Usar

1. Selecione a **área de produção**.
2. Informe o **volume** e selecione a **categoria** do produto.
3. Marque as checkboxes da **caracterização do RD** conforme necessário.
4. Pressione o botão **Calcular** para obter o risco total (R).
5. Caso necessário, utilize o botão **Limpar** para reiniciar o formulário.

## Acesse o Sistema

Você pode acessar o sistema online através do seguinte link:
[https://fabiovitorino97.github.io/Riscos-SIM/](https://fabiovitorino97.github.io/Riscos-SIM/)