# Kit de Grafismo Fonético - Landing Page

Landing page para o Kit de Grafismo Fonético, um material educacional para alfabetização infantil.

## 🚀 Deploy

### Vercel
1. Faça login na [Vercel](https://vercel.com)
2. Clique em "Add New" > "Project"
3. Importe seu repositório do GitHub
4. Clique em "Deploy"

### GitHub Pages
1. Vá em Settings > Pages no seu repositório
2. Em "Source", selecione "Deploy from a branch"
3. Selecione a branch `main` e pasta `/ (root)`
4. Clique em "Save"

## 📁 Estrutura

```
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript
├── vercel.json     # Configuração Vercel
└── README.md       # Este arquivo
```

## ✏️ Personalização

### Trocar link de checkout
No arquivo `index.html`, procure por:
```html
href="https://pay.hotmart.com/SEU_LINK_AQUI"
```
Substitua `SEU_LINK_AQUI` pelo seu link de checkout da Hotmart.

### Adicionar vídeo
Substitua o `div.video-placeholder` por um embed do YouTube ou Vimeo.

### Adicionar Pixel do Facebook
Adicione o código do pixel antes do `</head>` no `index.html`.

## 📱 Responsivo

O site é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🎨 Cores

As cores podem ser alteradas no início do arquivo `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #4ecdc4;
    --accent-color: #ffe66d;
}
```
