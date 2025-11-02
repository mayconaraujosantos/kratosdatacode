# Dockerfile para Railway - Multi-stage build
FROM node:18-alpine as builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM node:18-alpine

WORKDIR /app

# Instalar serve globalmente
RUN npm install -g serve

# Copiar build da aplicação do estágio anterior
COPY --from=builder /app/build ./build

# Expor porta (Railway usa variável de ambiente PORT)
EXPOSE $PORT

# Comando para iniciar a aplicação
CMD ["sh", "-c", "serve -s build -l $PORT"]