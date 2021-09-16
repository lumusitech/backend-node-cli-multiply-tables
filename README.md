# 📜 Notas:
Aplicación simple para generar tabla de multiplicar.

Después de clonar el repo, no olvidar hacer:

```bash
npm install
```
Con esto se instalaran las dependencias necesarias de la aplicación

## 📌 Uso:

Para más información sobre la aplicación, puede usar help

```bash
node app --help
```

```bash
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Set multiply base                           [number] [required]
  -l, --listar   list created table        [boolean] [required] [default: false]
  -h, --hasta    table limit                 [number] [required] [default: 10]
  ```
  ## ⚡ Ejemplo:

  ```bash
  node app -b 2 -l -h 12
  ```

  ```bash
  ===============
  Tabla del 2
===============
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
2 X 11 = 22
2 X 12 = 24
===============
tabla-2.txt creado
  ```
