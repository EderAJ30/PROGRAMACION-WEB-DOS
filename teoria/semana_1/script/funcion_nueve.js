const f = {
  valor: "",
  f1: (dato) => console.log(`Dato ${dato}`),
  f2: () => console.log(`realizar otra cosa...`),
  f3: (dato) => console.log(`otra funcionalidad para dato: ${dato}`),
  f4: (matricula) => console.log(`Buscando en B.D ${matricula}`),
  f5: (nombre) => console.log(`Buscando en B.D en el nombre ${nombre}`),

  set cambiarValor(valor) {
    this.valor = valor;
    console.log(`cambiando valor ${valor}`);
  },
  get obtenerValor() {
    console.log(`${this.valor}`);
  },
};

f.f1(1);
f.f2();
f.f3(5);
f.f4("343");
f.f5("Tomas");
f.cambiarValor = 1234;
f.obtenerValor;
