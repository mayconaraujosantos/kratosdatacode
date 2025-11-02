# Multi-stage Dockerfile otimizado para Railway
FROM node:18-alpine as builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências primeiro (para cache)
COPY package*.json ./

# Instalar dependências
RUN npm ci --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação para produção
RUN npm run build

# Estágio final - Runtime
FROM node:18-alpine

# Instalar serve globalmente no runtime
RUN npm install -g serve@14.2.0

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Definir diretório de trabalho
WORKDIR /app

# Copiar apenas o build da aplicação
COPY --from=builder --chown=nextjs:nodejs /app/build ./build

# Mudar para usuário não-root
USER nextjs

# Expor porta
EXPOSE 3000

# Comando de saúde para verificar se a aplicação está funcionando
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT:-3000} || exit 1

# Comando para iniciar a aplicação
CMD ["sh", "-c", "serve -s build -l ${PORT:-3000} --no-clipboard"]