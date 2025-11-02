# 🚂 Deploy Railway - Guia Completo

## 📋 **Pré-requisitos**
- Conta no [Railway](https://railway.app)
- Repositório no GitHub
- Projeto React configurado

## 🚀 **Processo de Deploy**

### 1. **Preparação do Repositório**
Certifique-se que todos os arquivos necessários estão commitados:
```bash
git add .
git commit -m "feat: add Railway deployment configuration"
git push origin main
```

### 2. **Configuração no Railway**

1. **Acesse o Railway:**
   - Vá para [railway.app](https://railway.app)
   - Faça login com GitHub

2. **Criar Novo Projeto:**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha o repositório `kratos_data_code`

3. **Configuração Automática:**
   - Railway detectará automaticamente como aplicação Node.js
   - Usará o `nixpacks.toml` para configuração otimizada

### 3. **Verificação de Deploy**

O Railway executará automaticamente:
```bash
# 1. Instalar dependências
npm ci

# 2. Build da aplicação
npm run build

# 3. Servir arquivos estáticos
npx serve -s build -l $PORT
```

### 4. **Monitoramento**
- Deploy levará ~2-3 minutos
- Logs disponíveis em tempo real
- URL será gerada automaticamente

## ⚙️ **Configurações Incluídas**

### `railway.json`
Configuração específica do Railway com:
- Builder: Nixpacks
- Start command otimizado
- Política de restart automático

### `nixpacks.toml`
Build configuration com:
- Node.js 18
- NPM 8
- Comando de build e start customizados

### `package.json`
Scripts adicionais:
- `serve` - Para servir build localmente
- `railway:start` - Comando específico Railway

## 🔧 **Variáveis de Ambiente**

### Automáticas (Railway):
- `PORT` - Porta do servidor (definida pelo Railway)
- `NODE_ENV` - Ambiente de execução

### Opcionais:
```bash
GENERATE_SOURCEMAP=false    # Reduz tamanho do build
REACT_APP_BUILD_PATH=./build # Diretório de build
```

## 📊 **Comandos Úteis**

### Desenvolvimento Local:
```bash
npm start                   # Servidor de desenvolvimento
npm run build              # Build de produção
npm run serve              # Testar build localmente
```

### Railway CLI (opcional):
```bash
# Instalar CLI
npm install -g @railway/cli

# Login
railway login

# Deploy manual
railway up

# Logs em tempo real
railway logs
```

## 🐛 **Troubleshooting**

### Problema: Build falhando
**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problema: Aplicação não carrega
**Verificar:**
1. `package.json` tem `"homepage": "."`
2. Build foi gerado corretamente
3. Variável `PORT` está sendo usada

### Problema: Arquivos estáticos não encontrados
**Solução:**
- Verificar se `serve -s build` está sendo executado
- Confirmar estrutura do diretório `build/`

## 📈 **Otimizações**

### Performance:
- `GENERATE_SOURCEMAP=false` reduz tamanho
- Serve com compressão gzip automática
- Cache headers otimizados

### Custos:
- Railway oferece plano gratuito
- Billing baseado em uso
- Sleep automático em inatividade

## 🔄 **Deploy Contínuo**

### Automático:
- Push para `main` → Deploy automático
- Pull requests → Deploy preview
- Rollback em caso de erro

### Branches:
```bash
# Deploy de branch específica
git checkout feature/nova-funcionalidade
git push origin feature/nova-funcionalidade
# Railway criará deploy de preview
```

## 📞 **Suporte**

### Railway:
- [Documentação](https://docs.railway.app)
- [Discord Community](https://discord.gg/railway)
- [Status Page](https://status.railway.app)

### Projeto:
- Issues no GitHub
- Documentação no README.md
- Conventional commits para clareza

---

**✅ Projeto configurado e pronto para deploy no Railway!**