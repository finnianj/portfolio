import { resolve } from 'path'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
const root = resolve(__dirname, 'src')

export default {
    root: root,
    base: './',
    publicDir: '../ignorePublic',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
      rollupOptions: {
        input: {
          ocean: resolve(root, 'ocean.html'),
          simple: resolve(root, 'simple.html'),
          api: resolve(root, 'myapi.html'),
        },
      },
        outDir: '../public',
        emptyOutDir: true,
        sourcemap: true
    }
}
