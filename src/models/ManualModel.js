import Departamento from './DepartamentoModel'

export default class Manual {
  constructor(
    id,
    titulo,
    departamento,
    conteudo,
    departamentos = new Departamento()
  ) {
    this.id = id
    this.titulo = titulo
    this.departamento = departamento
    this.conteudo = conteudo
    this.departamentos = departamentos
  }
}
