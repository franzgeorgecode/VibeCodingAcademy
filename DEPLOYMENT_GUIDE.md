# 🚀 Guía de Configuración Post-Despliegue

## Variables de Entorno Requeridas en Netlify

Ve a tu dashboard de Netlify: https://app.netlify.com/sites/vibecodinga/settings/deploys#environment-variables

### 1. Clerk Authentication
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_dG91Y2hpbmctbGlvbi0xOS5jbGVyay5hY2NvdW50cy5kZXYk
```

### 2. Supabase (Requerido)
```
VITE_SUPABASE_URL=tu_supabase_url_aqui
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key_aqui
```

### 3. OpenRouter AI (Opcional)
```
VITE_OPENROUTER_API_KEY=tu_openrouter_api_key_aqui
```

## Configuración de Clerk

1. Ve a tu dashboard de Clerk: https://dashboard.clerk.com
2. En **Domains** añade:
   - `vibecodinga.netlify.app`
   - `https://vibecodinga.netlify.app`
3. En **OAuth providers** habilita:
   - Google
   - GitHub
4. En **Email & SMS** configura el email provider

## Configuración de Supabase

1. Ve a tu proyecto de Supabase
2. En **Settings > API** copia:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
3. Ejecuta las migraciones si no lo has hecho:
   ```sql
   -- Las migraciones ya están en /supabase/migrations/
   ```

## Configuración de OpenRouter (Opcional)

1. Ve a https://openrouter.ai
2. Crea una cuenta y obtén tu API key
3. Añade `VITE_OPENROUTER_API_KEY` en Netlify

## ✅ Verificación

Después de configurar las variables:
1. Ve a **Deploys** en Netlify
2. Haz clic en **Trigger deploy** → **Deploy site**
3. Espera a que termine el despliegue
4. Visita https://vibecodinga.netlify.app
5. Prueba el registro/login
6. Prueba el chat con SrCode

## 🎯 Estado Actual

- ✅ Sitio desplegado en vibecodinga.netlify.app
- ⏳ Variables de entorno pendientes
- ⏳ Configuración de Clerk pendiente
- ⏳ Configuración de Supabase pendiente
- ⏳ Configuración de OpenRouter pendiente (opcional)

## 🔧 Solución de Problemas

### Si el login no funciona:
- Verifica que `VITE_CLERK_PUBLISHABLE_KEY` esté configurada
- Verifica que el dominio esté añadido en Clerk

### Si la base de datos no funciona:
- Verifica las variables de Supabase
- Verifica que las migraciones estén ejecutadas

### Si SrCode no responde:
- Sin OpenRouter: Usará respuestas predefinidas
- Con OpenRouter: Verifica la API key

## 📞 Soporte

Si necesitas ayuda, revisa:
1. Los logs de Netlify en **Functions**
2. La consola del navegador en **Developer Tools**
3. Los logs de Supabase en **Logs & Analytics**