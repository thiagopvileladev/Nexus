# 🎮 Hub de Jogos Nexus (PS1 & PS2)

> Uma plataforma que reúne de forma simples jogos antigos de ps1 e ps2, onde você pode baixar e jogá-los!

---

## 📸 Demonstração
<img width="1920" height="1080" alt="print" src="https://github.com/user-attachments/assets/a35b7a1b-56ac-4e4a-aca9-286659f7610c" />

## ✨ Funcionalidades
* **Interface Intuitiva:** Navegue pelos seus jogos com capas e descrições.
* **Integração com Emuladores:** Lança automaticamente o **PCSX2** e o **DuckStation**.
*  **Integração com site:** Para o download dos jogos, é integrado com o site **ROMSFUN**.
* **Portabilidade:** Sem a necessidade de configuração avançada para jogar os jogos.

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
Se você não tiver o node.js instalado na sua máquina, baixe para não ocorrer nenhum erro no programa
* [Node.js](https://nodejs.org/) 

### 2. Instalação
Link para o google drive do projeto:
* [Nexus](https://drive.google.com/file/d/1AZuE6RdPmCFKOyZzuPUces9aG_P1yIur/view?usp=sharing) 

---

## ✨ Funcionamento e Execução

Diferente de aplicativos convencionais que utilizam um instalador (build final), este projeto foi estruturado para rodar de forma **portátil**. 

### ⚙️ Por que não existe um instalador (`.exe`)?
O site utilizado como fonte dos jogos (**romsfun.com**) possui restrições de segurança que bloqueiam requisições vindas de aplicativos compilados. Para contornar essa limitação e manter a simplicidade do projeto, optei pela **execução direta**, ou seja, no terminal powershell. Isso garante que os downloads de arquivos `.iso` e `.chd` funcionem sem interrupções.

### 🚀 Como rodar o Nexus Hub
1. **Baixe e extraia** o arquivo ZIP do projeto.
2. Acesse a pasta extraída (normalmente chamada `web_content`).
3. Localize e execute o arquivo **`nexus.bat`**.

> **Nota:** O arquivo `.bat` automatiza a inicialização do ambiente, executando o comando `npx electron .` de forma invisível para que você não precise usar o terminal manualmente.

### 🎮 Sobre os Emuladores (DuckStation e PCSX2)
Ao abrir um jogo pela primeira vez, os emuladores integrados solicitarão uma configuração inicial rápida:
* Basta avançar as telas de configuração (**Next/Próximo**) até o final.
* Este processo é necessário apenas na primeira execução.
* Após configurado, é só conectar seu controle e jogar!

---



